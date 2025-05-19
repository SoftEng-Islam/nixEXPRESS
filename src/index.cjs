const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const mockUsers = [
	{ id: 1, username: "Islam" },
	{ id: 2, username: "Iman" },
	{ id: 3, username: "Ahmed" },
];

app.get("/", (req, res) => {
	res.status(201).send({ msg: "hello" });
});

app.get(`/api/users`, (req, res) => {
	res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
	console.log(req.params);
	const parsedID = parseInt(req.params.id);
	console.log(parsedID);
	if (isNaN(parsedID))
		return res.status(400).send({ msg: "Bad Request. Invalid ID" });
	const findUser = mockUsers.find((user) => user.id === parsedID);
	if (!findUser) return res.sendStatus(404);
	return res.send(findUser);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// localhost:8080
// localhost:8080/users
// localhost:8080/Products
