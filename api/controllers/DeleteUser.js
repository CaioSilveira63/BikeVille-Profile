const {
  Firestore,
  DocumentReference,
  CollectionReference,
  FieldPath,
} = require("@google-cloud/firestore");
const firestore = new Firestore();
module.exports = (app) => {
  const controller = {};

  controller.DeleteUser = async (req, res) => {
    const { userID } = req.query;

    if (!userID) {
      return res.status(400).json("userID not found");
    } else {
      let query = await firestore.collection("Users").doc(userID).get();
      if (!query.exists) {
        return res.status(404).json("user not found");
      } else {
        let deleteQuery = await firestore
          .collection("Users")
          .doc(userID)
          .delete();
        return res.status(200).json("success");
      }
    }
  };

  return controller;
};
