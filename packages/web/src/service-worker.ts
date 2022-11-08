/// <reference lib="webworker" />

// https://stackoverflow.com/questions/63116331/how-to-migrate-service-worker-from-js-to-ts
/* eslint-disable no-redeclare */
declare var self: ServiceWorkerGlobalScope;

export {};

// Register event listener for the 'push' event.
self.addEventListener("push", function (event) {
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: "Alea iacta est",
    })
  );
});

// https://serviceworke.rs/message-relay_index_doc.html
self.addEventListener("message", function (event) {
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: event.data,
    })
  );
  // Get all the connected clients and forward the message along.
  const promise = self.clients.matchAll().then(function (clientList) {
    // event.source.id contains the ID of the sender of the message.
    const senderID = event.source.id;
    clientList.forEach(function (client) {
      // Skip sending the message to the client that sent it.
      if (client.id === senderID) {
        return;
      }
      client.postMessage({
        client: senderID,
        message: event.data,
      });
    });
  });
  // If event.waitUntil is defined, use it to extend the lifetime of the Service Worker.
  if (event.waitUntil) {
    event.waitUntil(promise);
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
