// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();

// app.use(
//   "/**",
//   createProxyMiddleware({
//     target: "http://makefriendsback.promo-miner.art/",
//     changeOrigin: "*",
//   })
// );

const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    // origin: "http://makefriendsback.promo-miner.art/test_main",
    origin: "*",
  })
);
app.options("*", cors());

const PORT = process.env.PORT;

app.listen(PORT);
