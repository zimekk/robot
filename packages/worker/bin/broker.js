#!/usr/bin/env node

require("../bin").broker.apply(null, process.argv.slice(2));
