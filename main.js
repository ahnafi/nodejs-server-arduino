import bodyParser from "body-parser";
import express from "express";
import fs from "fs/promises";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.send("ok");
});

// let name;

app.post("/api/post", async (req, res) => {
  const newName = req.body.name;
  await fs.writeFile("data/data.txt", newName, "utf8");
  res.redirect("/index.html");
});

app.get("/api/data", async (req, res) => {
  const name = await fs.readFile("data/data.txt","utf8");

  res.status(200).json({
    name,
  });
});

app.listen(port, () => {
  console.log("listening...");
});
