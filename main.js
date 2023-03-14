const countInput = document.getElementById("count");
const generateBtn = document.querySelector(".btn");

generateBtn.addEventListener("click", () => {
	const value = countInput.value || "";
	if (value.trim() === "") {
		alert("togri kirit ey");
		countInput.value = "";
	} else {
		console.log("value = ", value);
	}
});
