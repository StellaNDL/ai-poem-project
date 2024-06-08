function displayPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: ""
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "c2fa2f0a85c4ebtf3304fbofa4a162d0";
    let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
    let context = "You are a romantic Poem expert and love to write poems. Your mission is to generate a short four line poem in basic html, the poem should not be long and separate each line with a <br />. Make sure to follow the user instructions below. Do NOT include a title and sign the BOTTOM of the poem with 'SheCodes AI' in a <strong> element"
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiURL).then(displayPoem);

}


let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);

