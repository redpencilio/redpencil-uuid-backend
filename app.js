import { app, uuid } from "mu";

app.get("/uuid", function (req, res) {
  res.send(JSON.stringify({ uuid: uuid() }));
});
