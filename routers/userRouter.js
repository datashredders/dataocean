import express from "express";
import postgresClient from "../config/db.js";

const router = express.Router();

//Create user
router.post("/", async (req, res) => {
  try {
    const text =
      "INSERT INTO users (email, password, fullname) VALUES ($1, crypt($2, gen_salt('bf')), $3) RETURNING *";

    const values = [req.body.email, req.body.password, req.body.fullname];

    const { rows } = await postgresClient.query(text, values);
    return res.status(201).json({ createdUser: rows[0] });
  } catch (error) {
    console.log("hata var Error", error.message);
    return res.status(400).json({ message: error, message });
  }
});

//Authenticate user
router.post("/login", async (req, res) => {
  try {
    const text =
      "SELECT * FROM users WHERE email = $1 AND password = crypt($2, password)";
    const values = [req.body.email, req.body.password];
    const { rows } = await postgresClient.query(text, values);
    if (!rows.length) {
      return res.status(404).json({ message: "user not found." });
    } else {
      return res.status(200).json({ message: "Authentication successfull." });
    }
  } catch (error) {
    console.log("hata Error", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Update user
router.put("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const text =
      "UPDATE users SET email = $1, fullname = $2 WHERE id = $3 RETURNING *";

    const values = [req.body.email, req.body.fullname, userId];

    const { rows } = await postgresClient.query(text, values);

    if (!rows.length) {
      return res.status(404).json({ message: "user not found." });
    } else {
      return res.status(200).json({ updatedUser: rows[0] });
    }
  } catch (error) {
    console.log("hata Error", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Delete user
router.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const text = "DELETE FROM users WHERE id = $1 RETURNING *";

    const values = [userId];
    const { rows } = await postgresClient.query(text, values);
    if (!rows.length) {
      return res.status(404).json({ message: "user not found." });
    } else {
      return res.status(200).json({ deletedUser: rows[0] });
    }
  } catch (error) {
    console.log("hata Error", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get users
router.get("/users", async (req, res) => {
  try {
    const text = "SELECT * FROM deneme ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get HaberData
router.get("/haberdata", async (req, res) => {
  try {
    const text = "SELECT * FROM haber ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get MüzikData
router.get("/muzikdata", async (req, res) => {
  try {
    const text = "SELECT * FROM muzik ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get SporData
router.get("/spordata", async (req, res) => {
  try {
    const text = "SELECT * FROM spor ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get EgitimData
router.get("/egitimdata", async (req, res) => {
  try {
    const text = "SELECT * FROM egitim ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get TeknolojiData
router.get("/teknolojidata", async (req, res) => {
  try {
    const text = "SELECT * FROM teknoloji ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

//Get BelgeselData
router.get("/belgeseldata", async (req, res) => {
  try {
    const text = "SELECT * FROM belgesel ORDER BY id ASC";

    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error accured", error.message);
    return res.status(400).json({ message: error.message });
  }
});
export default router;
