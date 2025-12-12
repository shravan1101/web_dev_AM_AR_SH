let butt = document.getElementById("btn");

butt.addEventListener("click", () => {
  document.querySelector(".box").innerHTML = " <b> aaa yeee </b> ";
});

butt.addEventListener("contextmenu", () => {
  alert(" kay re hacker ki chodedhe");
});

butt.addEventListener("keydown", (e) => {
  console.log(e.key, e.keyCode);
});
