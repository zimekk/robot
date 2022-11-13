#!/usr/bin/env node

require("../bin").chrome.apply(null, process.argv.slice(2));
