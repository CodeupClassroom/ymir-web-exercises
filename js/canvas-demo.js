"use strict";

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const canvas = document.querySelector("#my-canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);

        ctx.strokeStyle = "#0000FF";

        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();

        ctx.fillStyle = "#0000FF";
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

        // Create gradient
        const grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

// Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(100, 100, 150, 80);

        ctx.fillStyle = "#00FF00";
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 10, 50);

        ctx.font = "30px Arial";
        ctx.strokeText("Hello World", 100, 150);
    });

})();