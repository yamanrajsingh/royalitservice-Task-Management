const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./Database/models/User");
const Task = require("./Database/models/Task");

const bodyParser = require("body-parser");

const Auth = require("./middleware/Auth");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        phonenumber: req.body.phonenumber,
      });
      newUser
        .save()
        .then((result) => {
          res.json({
            NewUser: result,
          });
        })
        .catch((err) => {
          res.json({ error: err });
        });
    }
  });
});

app.post("/signin", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              username: user.username,
              phonenumber: user.phonenumber,
            },
            "Dummy Text for Encryption",
            {
              expiresIn: "24h",
            }
          );
          return res.json({ token: token, name: user.username });
        } else {
          return res.status(401).json({ error: "Invalid password" }); // Return if password is incorrect
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

app.post("/tasks", (req, res, next) => {
  const newTask = new Task({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    date: req.body.date,
  });
  newTask
    .save()
    .then((result) => {
      res.json({ newtask: result });
    })
    .catch((err) => {
      res.json({ message: "Error in adding task" });
    });
});

app.get("/tasks", (req, res, next) => {
  Task.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: "Error in fetching data" });
    });
});

app.get("/tasks/:id", (req, res, next) => {
  const id = req.params.id;
  Task.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/tasks/:id", (req, res, next) => {
  const id = req.params.id;
  Task.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        date: req.body.date,
      },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete("/tasks/:id", (req, res, next) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.use((req, res, next) => {
  res.send("Page Not Found");
});

module.exports = app;
