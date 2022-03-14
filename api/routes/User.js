module.exports = (app) => {
  const controller = app.controllers;

  app.route("/api/v1/User").get(controller.GetUser.GetUser)
  app.route("/api/v1/User").put(controller.PutUser.PutUser)
  app.route("/api/v1/User").delete(controller.DeleteUser.DeleteUser)

};
