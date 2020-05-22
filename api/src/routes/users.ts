import { Router } from "express";
const router = Router();

router.get("/", function (req, res) {
  res.send("Hier kommen später die Benutzer raus");
});

router.get("/:id", function (req, res) {
  res.send("Die Daten von einem Benutzer");
});

router.post("/", function (req, res) {
  res.send("Neuer Benutzer wurde angelegt.");
});

router.post("/:id", function (req, res) {
  res.send("Der Benutzer wurde aktualisiert.");
});

router.delete("/:id", function (req, res) {
  res.send("Der Benutzer wurde gelöscht.");
});

export default router;