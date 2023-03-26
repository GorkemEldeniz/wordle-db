import { words } from "./words.js";

let currentDate = new Date();

export default words.map((word, index) => {
	const obj = {
		date: `${currentDate.toDateString()}`,
		word,
	};

	currentDate = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate() + 1
	);
	return {
		...obj,
	};
});
