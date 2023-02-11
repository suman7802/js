document.querySelector(".button1").addEventListener("click", () => {
  console.log(`working`);
  fetch("https://wttr.in/Kathmandu?T")
    .then((e) => e.text())
    .then((e) => {
        document.querySelector('.container2').innerHTML = e;
    });
});
