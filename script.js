let btnElement = document.querySelector(".btn");

btnElement.addEventListener("mousemove", (event) => {
  let x = (event.clientX - btnElement.offsetLeft);
  let y = (event.clientY - btnElement.offsetTop);

  btnElement.style.setProperty("--xPosition", `${x}px`);
  btnElement.style.setProperty("--yPosition", `${y}px`);
});
  