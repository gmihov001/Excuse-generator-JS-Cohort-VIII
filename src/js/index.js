/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

window.onload = function() {
  let who = ["My parrot ", "My grandma "];
  let did_what = [" ate my shoes ", " crashed my car "];
  let when = [" yesterday.", " the day before."];

  let outcome =
    who[Math.floor(Math.random() * who.length)] +
    did_what[Math.floor(Math.random() * did_what.length)] +
    when[Math.floor(Math.random() * when.length)];

  document.querySelector("#the-excuse").innerHTML = outcome;
};
