const {
  Firestore,
  DocumentReference,
  CollectionReference,
  FieldPath,
} = require("@google-cloud/firestore");
const firestore = new Firestore();
module.exports = (app) => {
  const controller = {};

  controller.PutUser = async (req, res) => {
    const { email, first_name, second_name } = req.query;
    if (!email) {
      return res.status(400).json("email not found");
    }
    if (!first_name) {
      return res.status(400).json("first_name not found");
    }
    if (!second_name) {
      return res.status(400).json("second_name not found");
    }
    const newUser = { email, first_name, second_name };
    let query = await firestore
      .collection("Users")
      .where("email", "==", email)
      .get();
    console.log("Docs: ", query.size);

    if (query.size > 0) {
      return res.status(409).json("email already taken");
    }

    let createQuery = await (
      await firestore.collection("Users").add(newUser)
    ).id;
    newUser.id = createQuery;
    return res.status(200).json(newUser);
  };

  return controller;
};
