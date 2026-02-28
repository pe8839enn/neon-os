import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(process.env.PORT || 3000);
