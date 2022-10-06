const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const firebase = require("firebase-admin");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentReference,
} = require("firebase-admin/firestore");

const db = getFirestore();

const alldata = [];
router.get(
  "/getdata",

  async (req, res) => {
    try {
      const citiesRef = db.collection("projects");
      const snapshot = await citiesRef.get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.json(data);

      
    } catch (err) {
      console.log("dhg")
      res.json(alldata);

    }
  }
);
router.post("/add", async (req, res) => {
  try {
    const { title, image } = req.body;
    const projects = db.collection("projects");
    await projects.add({
      title: title,
      image: image,
    });
    console.log(title + image);
    res.status(200).send({ msg: "sucessfully sent " });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const projects = db.collection("projects");

    const cardcheck = await projects.doc(req.params.id).delete();
    if (!cardcheck) {
      return res.status(404).send("not found");
    }
    res.send({ msg: "done" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;
