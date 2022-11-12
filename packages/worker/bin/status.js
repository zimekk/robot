#!/usr/bin/env node

require("../bin").status.apply(null, process.argv.slice(2));
