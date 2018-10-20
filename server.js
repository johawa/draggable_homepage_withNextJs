const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const send = require("./mailer.js").send;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    //console.log(req.body);

    const { name, email, message } = req.body;

    send({ email, name, text: message })
      .then(() => {
        console.log("success");
        res.json({ message: "true" });
      })
      .catch(error => {
        console.log("failed", error);
        res.json({ message: "false" });
      });
  });

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
