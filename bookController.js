let books = [
	{ id: 1739741870410, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
	{ id: 1739741883845, title: "To Kill a Mockingbird", author: "Harper Lee" },
	{ id: 1739741894999, title: "1984", author: "George Orwell" },
	{ id: 1739741921835, title: "Pride and Prejudice", author: "Jane Austen" },
	{ id: 1739741928339, title: "Moby-Dick", author: "Herman Melville" },
	{ id: 1739741934885, title: "The Catcher in the Rye", author: "J.D. Salinger" },
	{ id: 1739741937667, title: "Brave New World", author: "Aldous Huxley" },
	{ id: 1739741942193, title: "The Hobbit", author: "J.R.R. Tolkien" },
	{ id: 1739741944154, title: "Fahrenheit 451", author: "Ray Bradbury" },
	{ id: 1739741946195, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
];

exports.getAllBooks = (req, res) => {
	res.status(200).json({
		status: "success",
		size: books.length,
		data: {
			books,
		},
	});
};

exports.createBook = (req, res) => {
	const { title, author } = req.body;

	if (!title || !author)
		return res.status(400).json({
			status: "fail",
			message: "Title or Author field is missing.",
		});

	const book = { id: Date.now(), title, author };
	books.push(book);

	res.status(200).json({
		status: "success",
		data: {
			book,
		},
	});
};

exports.getBook = (req, res) => {
	const book = books.find((b) => b.id === +req.params.id);

	if (!book)
		return res.status(404).json({
			status: "fail",
			message: "No book found with that ID.",
		});

	res.status(200).json({
		status: "success",
		data: {
			book,
		},
	});
};

exports.updateBook = (req, res) => {
	const book = books.find((b) => b.id === +req.params.id);

	if (!book)
		return res.status(404).json({
			status: "fail",
			message: "No book found with that ID.",
		});

	const bookIdx = books.indexOf(book);

	const { title, author } = req.body;

	if (title) books[bookIdx].title = title;
	if (author) books[bookIdx].author = author;

	res.status(201).json({
		status: "success",
		data: {
			book: books[bookIdx],
		},
	});
};

exports.deleteBook = (req, res) => {
	const book = books.find((b) => b.id === +req.params.id);

	if (!book)
		return res.status(404).json({
			status: "fail",
			message: "No book found with that ID.",
		});

	books = books.filter((b) => b.id !== +req.params.id);

	res.status(204).json({
		status: "success",
		data: null,
	});
};
