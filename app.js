require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const currentTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  res.send(`
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="utf-8">
        <title>Node.js + Express  + nodemon</title>
      </head>
      <body>
        <h1>Node.js + Express + nodemon のテストページです。</h1>
        <p>現在時刻: ${currentTime}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
