import express from "express";

const app = express();
const port = 3300;

// app
app.get("/", (req, res) => {
    res.send("<h2>API is running...</h2>");
  });

  app.listen(port, () => {
    console.log(`Successfully started server on port ${port}.`);
  });