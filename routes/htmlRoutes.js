// import our burger model
const burger = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    
    burger
      .findAll()
      // if we get to resolve()
      .then(dbburgerData => {
        res.render("index", {burgerData: dbburgerData})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}