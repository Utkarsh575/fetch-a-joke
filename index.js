const jokecont = document.getElementById("joke");
const box = document.getElementById("box");
const btn = document.getElementById("btn");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokecont.textContent = `${item.joke}`;
    });
};

btn.addEventListener("click", getJoke);

