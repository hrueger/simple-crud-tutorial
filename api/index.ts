import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

const app = express();

app.use(bodyParser.json());

let users: string[] = [];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  users.push(req.body.name);
  res.send(true);
});
app.post("/users/:name", (req, res) => {
  users = users.map((u) => {
    if (u == req.params.name) {
      u = req.body.name;
    }
    return u;
  })
  res.send(true);
});
app.delete("/users/:name", (req, res) => {
  users = users.filter((user) => {
    return user != req.params.name;
  });
  res.send(true);
});

app.use("/", express.static(path.join(__dirname, "../frontend/dist/simple-crud")))

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});

/*
GET -> Anzeige
POST -> Hinzuzufügen / Aktualisieren
DELET -> Löschen
*/