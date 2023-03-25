const changeColor = () => {
  var randomcolor = Math.floor(Math.random() * 16777215);
  randomcolor = randomcolor.toString(16);
  document.getElementById("colorcode").innerText = "#" + randomcolor;
  document.body.style.backgroundColor = "#" + randomcolor;
};

document.getElementById("mybtn").addEventListener("click", changeColor);
changeColor();