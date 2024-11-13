"use strict";
import context from "./context.js"

/**
 * fills an ellipse
 * @param {number} x x-coordinate of the center of the ellipse
 * @param {number} y y-coordinate of the center of the ellipse
 * @param {number} rX horizontal radius of the ellipse (half of the width)
 * @param {number} rY vertical radius of the ellipse (half of the height)
 */

export function fillEllipse(x, y, rX, rY) {
context.beginPath();
context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
context.fill();
}

/**
 * fills a circle
 * @param {number} x x-coordinate of the center of the circle
 * @param {number} y y-coordinate of the center of the circle
 * @param {number} r radius of the circle
 */

export function fillCircle(x, y, r) {

   context.beginPath();
   context.arc(x, y, r, 0, Math.PI * 2);
   context.fill();
}

/**
 * Draws a line between 2 coordinates
 * @param {number} x1 the x coordinate of the start of the line
 * @param {number} y1 the y coordinate of the start of the line
 * @param {number} x2 the x coordinate of the end of the line
 * @param {number} y2 the y coordinate of the end of the line
 */

export function drawLine(x1, y1, x2, y2) {
   context.beginPath();
   context.moveTo(x1, y1);
   context.lineTo(x2, y2);
   context.stroke();
}
/**
 * Draws a full circle
 * @param {number} x the x-coordinate of the centre of the circle
 * @param {number} y the y-coordinate of the centre of the circle
 * @param {number} r the radius of the circle
 */
export function strokeCircle(x, y, r) {
   context.beginPath();
   context.arc(x, y, r, 0, Math.PI * 2);
   context.stroke();
}

/** function that formats an rgb value based on parameters
 * @param {number} r red (8bits, number between 0-255)
 * @param {number} g green (8bits, number between 0-255)
 * @param {number} b blue (8bits, number between 0-255)
 */
export function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}
/**
 * Draws and fills a circle
 * @param {number} x the x-coordinate of the centre of the circle
 * @param {number} y the y-coordinate of the centre of the circle
 * @param {number} r the radius of the circle
 */
export function fillAndStrokeCircle(x, y, r) {
   context.beginPath();
   context.arc(x, y, r, 0, Math.PI * 2);
   context.fill();
   context.stroke();
}

/**
 * Draws and fills an ellipse
 * @param {*} x x-coordinate of the ellipse
 * @param {*} y y-coordinate of the ellipse
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillAndStrokeEllipse(x, y, rX, rY) {
   context.beginPath();
   context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
   context.fill();
   context.stroke();
}

/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
export function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
}

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 * @param {number} a the alpha value (opacity) in percentage
 */
export function hsla(h, s, l, a) {
    return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";
}

/**
 * function that returns a random whole number between a minimum and a maximumm value
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}