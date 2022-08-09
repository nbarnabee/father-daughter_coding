const express = require("express");
const app = express();
const typeIs = require("type-is");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/otherindex", (req, res) => {
  res.sendFile(__dirname + "/otherindex.html");
});

app.post("/handler", async (req, res) => {
  try {
    console.log(
      typeIs(req, ["html", "json", "*/*", "application/*", "text/*"])
    );
    console.log(req.body);
    res.json({ response: "success" });
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
