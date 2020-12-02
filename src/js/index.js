/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "../style/index.scss";

// window.onload = function() {};
const excuseGenerator = () => {
  let who = ["My parrot ", "My grandma ", "My dog ", "My neighbor "];
  let did_what = [
    " ate my shoes ",
    " crashed my car ",
    "made a big mess in his cage ",
    "was chasing squirrels"
  ];
  let when = [
    " yesterday.",
    " the day before.",
    "when I was trying to leave.",
    "when you called."
  ];

  let outcome =
    who[Math.floor(Math.random() * who.length)] +
    did_what[Math.floor(Math.random() * did_what.length)] +
    when[Math.floor(Math.random() * when.length)];

  return outcome;
};

document.querySelector("#the-excuse").innerHTML = excuseGenerator();
