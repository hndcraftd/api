#!/usr/bin/env node

import "../src/env.js";
import app from "../src/app.js";
const { PORT } = process.env;
(async () => {
  app.listen(PORT);
  console.info("\nSuccessfully started server on port", PORT, ". 📡 \n");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
