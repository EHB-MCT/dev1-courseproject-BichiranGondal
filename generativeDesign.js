"use strict";
import context from "../dev1-courseproject-BichiranGondal/scripts/context.js";
import * as Utils from "../dev1-courseproject-BichiranGondal/scripts/utils.js";
import * as Noise from "../dev1-courseproject-BichiranGondal/scripts/noise.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    while (i <= 300) {
        let gray = i / 300 * 255;
        context.strokeStyle = Utils.rgb(gray, gray, gray);
        Utils.drawLine(50 + i, 50, 50 + i, 350);
        i++;
    }
}