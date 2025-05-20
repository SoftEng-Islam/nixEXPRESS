const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

const mockUsers = [
	{ id: 1, username: "Islam" },
	{ id: 2, username: "Iman" },
	{ id: 3, username: "Ahmed" },
];

app.get("/", (req, res) => {
	res.status(201).send({ msg: "hello" });
});

// api/users?filter=username&value=Is
app.get(`/api/users`, (req, res) => {
	console.log(req.query);
	const {
		query: { filter, value },
	} = req;
	// when filter and value are undefined
	if (!filter && !value) return res.send(mockUsers);

	if (filter && value)
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));

	return res.send(mockUsers);
});

// api/users/1
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

app.post("/api/users", (req, res) => {
	// console.log(req.body);
	const { body } = req;
	const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
	mockUsers.push(newUser);
	return res.status(201).send(newUser);
});

app.put("/api/users/:id", (req, res) => {
	const {
		body,
		params: { id },
	} = req;

	const parsedID = parseInt(id);
	if (isNaN(parsedID)) return res.sendStatus(400);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// put
// patch
// delete
