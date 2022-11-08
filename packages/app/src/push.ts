import { Router, json } from "express";
// https://github.com/mozilla/serviceworker-cookbook/blob/master/push-simple/server.js
// https://tools.ietf.org/html/draft-ietf-webpush-encryption.
import webPush from "web-push";

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:"
  );
  console.log(webPush.generateVAPIDKeys());
}
// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
  "https://serviceworke.rs/",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export default () =>
  Router()
    .use(json())
    .get("/vapidPublicKey", function (req, res) {
      res.send(process.env.VAPID_PUBLIC_KEY);
    })
    .post("/register", function (req, res) {
      // A real world application would store the subscription info.
      res.sendStatus(201);
    })
    .post("/sendNotification", function (req, res) {
      const subscription = req.body.subscription;
      const payload = null;
      const options = {
        TTL: req.body.ttl,
      };

      setTimeout(function () {
        webPush
          .sendNotification(subscription, payload, options)
          .then(function () {
            res.sendStatus(201);
          })
          .catch(function (error) {
            res.sendStatus(500);
            console.log(error);
          });
      }, req.body.delay * 1000);
    });
