//API 1
let language = document.body.getAttribute("id");

let text = document.querySelector("#search");
let translation = "";

let update = document.querySelector("#update");
let history = document.querySelector("#history");

// code start

async function updateTranslation() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "e32a20ce54mshbcd3c708490a900p176f58jsn9ebd6553653a",
      "X-RapidAPI-Host": "cheap-translate.p.rapidapi.com",
    },
    body: `{"fromLang":"auto-detect","text":"${text.value}","to":"${language}"}`,
  };

  let response = await fetch(
    "https://cheap-translate.p.rapidapi.com/translate",
    options
  );

  let data = await response.json();
  translation = data.translatedText;

  update.innerText = translation;
  let line = document.createElement("br");
  let moreResults = document.createElement("div");
  moreResults.setAttribute("class", "board-item");
  let notTranslated = document.createElement("div");
  let translated = document.createElement("div");
  notTranslated.setAttribute("class", "board-item-content");
  notTranslated.setAttribute("class", "has-text-weight-bold");

  translated.setAttribute("class", "board-item-content");

  notTranslated.innerHTML =
    "<span>" + language.toUpperCase() + ": " + translation + "</span>";
  translated.innerHTML = "<span>Word: " + text.value + "</span>";

  moreResults.append(notTranslated);
  moreResults.append(translated);
  // moreResults.setAttribute("alt", topic);
  history.append(line);
  history.append(moreResults);
}

// End Code

//Translate

let translateButton = document.querySelector("#submit1");
//let input = document.querySelector("#text1");

translateButton.addEventListener("click", () => {
  updateTranslation();
});
