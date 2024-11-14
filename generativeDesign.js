"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, Utils.rgb(Utils.randomNumber(1, 255), Utils.randomNumber(1, 255), Utils.randomNumber(1, 255)));
gradient.addColorStop(0.5, Utils.rgb(Utils.randomNumber(1, 255), Utils.randomNumber(1, 255), Utils.randomNumber(1, 255)));
gradient.addColorStop(1, Utils.rgb(Utils.randomNumber(1, 255), Utils.randomNumber(1, 255), Utils.randomNumber(1, 255)));

backgroundColor();

function backgroundColor() {
   context.fillStyle = gradient;
   context.fillRect(0, 0, width, height);
   drawCircle();
}

function drawCircle() {
   for (let i = 0; i <= 20; i++){
      for (let j = 0; j <= 20; j++){
         let radius = 50;
         context.fillStyle = Utils.hsla(0, 0, 100, 40);
         Utils.fillCircle(i * 100, j * 100, 50);
         Utils.fillCircle(i * 100, j * 100, 45);
         Utils.fillCircle(i * 100, j * 100, 40);
         Utils.fillCircle(i * 100, j * 100, 35);
         Utils.fillCircle(i * 100, j * 100, 30);
         Utils.fillCircle(i * 100, j * 100, 25);
         Utils.fillCircle(i * 100, j * 100, 20);
         Utils.fillCircle(i * 100, j * 100, 10);
      }
   }
}