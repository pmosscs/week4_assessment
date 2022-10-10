const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());





const { getCompliment } = require('./controller')
const { getFortune } = require('./controller.js')
const { addSong } = require('./controller.js')
const { changeTitle } = require('./controller.js')
const { deleteSong } = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/songs", addSong);
app.put("/api/songs/:song", changeTitle);
app.delete("/api/songs/:song", deleteSong);




app.listen(4000, () => console.log("Server running on 4000"));
