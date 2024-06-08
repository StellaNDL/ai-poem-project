function generatePoem(event) {
    event.preventDefault();


new Typewriter("#poem", {
  strings: "The life you lead conceals the light you are",
  autoStart: true,
  delay: 5,
  cursor: ""
});
}


let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);

