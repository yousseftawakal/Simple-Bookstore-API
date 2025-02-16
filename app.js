const express = require("express");
const app = express();
const PORT = 3000;

const bookRouter = require("./bookRoutes");

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from the server!");
});

app.use("/books", bookRouter);

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}...`);
});
