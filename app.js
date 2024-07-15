const Form = document.getElementById("form");
const cancelBtn = document.getElementById("cancelBtn");
const div = document.getElementById("divMessage");
const P = document.createElement("p");
cancelBtn.addEventListener("mouseover", () => {
  // Generate random positions for the button
  cancelBtn.style.width = "100px";

  cancelBtn.style.zIndex = "4";
  cancelBtn.style.backgroundColor = "red";
  cancelBtn.style.color = "white";
  const x = Math.random() * 200 - 100; // Move within a range of -100px to +100px on the x-axis
  const y = Math.random() * 200 - 100; // Move within a range of -100px to +100px on the y-axis

  // Apply the transformation
  cancelBtn.style.transform = `translate(${x}px, ${y}px)`;

  div.innerHTML =
    "<p>Your comment has no value to me, forget it hahahahaha!!!!</p>";
  div.style.display = "block";
});
Form.addEventListener("submit", function (event) {
  target.preventDefault();
  data = new FormData(Form);
  formValues = Object.fromEntries(data);
  console.log(formValues);

  if (formValues.dob.year > 1990) {
    div.innerHTML = "<p>Your getting old!!!!</p>";
    div.style.display = "block";
  }
});
const ColorSelector = document.getElementById("subColor");
ColorSelector.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightpink";
  div.innerHTML += "<p>I do not care about your favourite color!!!</p>";
  div.style.display = "block";
});
