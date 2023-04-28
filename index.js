import express from "express";
import cors from "cors";
import { datas } from "./words.js";
import { corsOptions } from "./cors.config.js";

const PORT = 3000;
const app = express();

console.log(new Date());

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.json(datas);
});

app.listen(PORT, () => {
	console.log(`Sunucu ${PORT} çalışmakta`);
});
