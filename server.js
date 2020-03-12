const path = require("path");
const express = require("express");
const webpack = require("webpack");

// const env = process.env.NODE_ENV;
const env = process.env.npm_lifecycle_event;
const app = express();
const PORT = 9000;

if (env === "serve") {
  // 生产环境，则运行build文件夹中的代码
  app.use(express.static("blog"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "blog", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("服务已启动: http://localhost:%s", PORT);
});