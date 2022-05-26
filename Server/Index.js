const express = require("express");

const PORT = process.env.PORT || 3001;



const app = express();

app.get("/api", (req, res) => {
  res.sendFile(__dirname + '')
  });

  app.listen(PORT, () => {
    console.log(`Server uključen na ${PORT} portu...`);
  });