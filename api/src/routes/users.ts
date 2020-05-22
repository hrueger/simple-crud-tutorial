import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/user";
const router = Router();

router.get("/", async function (req, res) {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.send(users);
});

router.get("/:id", function (req, res) {
  res.send("Die Daten von einem Benutzer");
});

router.post("/", async function (req, res) {
  if (!(req.body.name && req.body.nickname && req.body.password)) {
    res.status(400);
    res.send("Nicht alle Daten angegeben!");
    return;
  }

  const userRepository = getRepository(User);
  const newUser = new User();
  newUser.name = req.body.name;
  newUser.nickname = req.body.nickname;
  newUser.password = req.body.password;
  await userRepository.save(newUser);

  res.send("Neuer Benutzer wurde angelegt.");
});

router.post("/:id", function (req, res) {
  res.send("Der Benutzer wurde aktualisiert.");
});

router.delete("/:id", function (req, res) {
  res.send("Der Benutzer wurde gelöscht.");
});

export default router;