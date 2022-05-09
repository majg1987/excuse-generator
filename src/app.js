/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuse() {
    const who = ["The dog", "My grandma", "His turtle", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "the keys", "the car"];
    const when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    return (
      who[aleatorio(who)] +
      " " +
      action[aleatorio(action)] +
      " " +
      what[aleatorio(what)] +
      " " +
      when[aleatorio(when)]
    );
  }

  function aleatorio(array) {
    return Math.floor(Math.random() * array.length);
  }
  document.querySelector("#generate").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });
};
