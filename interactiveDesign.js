"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let gradient = context.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, "#010131");
gradient.addColorStop(1, "#450085");

let stars = [];

background();
fillSky();
animate();

function background() {
   context.fillStyle = gradient;
   context.fillRect(0, 0, width, height);
}

function fillSky() {
   for (let i = 0; i < 150; i++) {
      let star = {
         x: Utils.randomNumber(0, width),
         y: Utils.randomNumber(0, height),
         r: Utils.randomNumber(2, 5),
         speed: Utils.randomNumber(0.001, 0.02)
      };
      stars.push(star);
   }
}

function drawStars() {
   context.fillStyle = "#F1F781";
   for (let i = 0; i < stars.length; i++) {
      let star2 = stars[i];
      Utils.fillCircle(star2.x, star2.y, star2.r);
   }
}

function updateStars(mouseX, mouseY) {
   for (let i = 0; i < stars.length; i++) {
      let star2 = stars[i];
      star2.x += (mouseX - star2.x) * star2.speed;
      star2.y += (mouseY - star2.y) * star2.speed;
   }
}

function animate() {
   context.clearRect(0, 0, width, height); // de canvas leegmaken
   background(); // de background opnieuw tekenen
   drawStars(); // de sterren tekenen
   requestAnimationFrame(animate); //animation herhalen
}

/**
 * 
 * @param {MouseEvent} eventData 
 */
function moveStars(eventData) {
   // This part of this project was developed using suggestions generated by ChatGPT (OpenAI)
   // 19/12/2024: https://chatgpt.com/c/67636955-57b8-800b-950d-02a4f66d849f
   // Modifications made by Bichiran Gondal
   let mouseX = eventData.pageX;
   let mouseY = eventData.pageY;
   updateStars(mouseX, mouseY);
}

context.canvas.addEventListener("mousemove", moveStars);