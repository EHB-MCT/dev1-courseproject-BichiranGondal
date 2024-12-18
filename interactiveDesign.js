"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let gradient = context.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, "#010131");
gradient.addColorStop(1, "#450085");

background();
drawStars();


function background() {
   context.fillStyle = gradient;
   context.fillRect(0, 0, width, height);
}


function drawStars() {
   for (let i = 1; i < 150; i++) {
      context.fillStyle = "#F1F781";
      Utils.fillCircle(Utils.randomNumber(0, width), Utils.randomNumber(0, height), Utils.randomNumber(2, 5));
   }
}