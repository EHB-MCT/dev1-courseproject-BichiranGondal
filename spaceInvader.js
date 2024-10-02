"use strict";

alert("Draw your space invader here");

signature(50);

function signature(size) {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext('2d');

   context.beginPath();
   context.rect(0, 0, size*6, size*6)
   context.fill();

   context.beginPath();
   context.fillStyle = "#C4CA54";
   context.rect((size * 6) / 12, (size * 6) / 12, size, size)
   context.rect(((size * 6) / 12) * 9, (size * 6) / 12, size, size)
   context.rect((size * 6) / 12, ((size * 6) / 12) * 9, size, size)
   context.rect(((size * 6) / 12) * 9, ((size * 6) / 12) * 9, size, size)
   context.rect(((size * 6) / 12) * 3, ((size * 6) / 12) * 3, size, size)
   context.rect(((size * 6) / 12) * 7, ((size * 6) / 12) * 3, size, size)
   context.rect((size * 6) / 12, ((size * 6) / 12) * 5, size * 2, size)
   context.rect(((size * 6) / 12) * 7, ((size * 6) / 12) * 5, size * 2, size)
   context.rect(((size * 6) / 12) * 5, ((size * 6) / 12) * 7, size, size*2)
   context.fill();


}