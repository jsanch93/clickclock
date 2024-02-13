 // Dark Mode
  // GET STUFF
  const switcher = document.querySelector("#switcher");
  const body = document.querySelector("body");
  
  // SET STUFF
  switcher.addEventListener("click", () => {
    body.classList.toggle("dark");
  });