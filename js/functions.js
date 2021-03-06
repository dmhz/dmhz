﻿var garden,size=Math.min($(window).height(), $(window).width());

$(function () {
    var gardenCtx, gardenCanvas;

    $("#garden").css("margin-top", ($(window).height() - size) / 2);
    
    gardenCanvas = $("#garden")[0];
    gardenCanvas.width = size;
    gardenCanvas.height = size;
    gardenCtx = gardenCanvas.getContext("2d");
    gardenCtx.globalCompositeOperation = "lighter";
    garden = new Garden(gardenCtx, gardenCanvas);

    // renderLoop
    setInterval(function () {
        garden.render();
    }, Garden.options.growSpeed);
});

function getHeartPoint(angle) {
	var t = angle / Math.PI;
	var x = 16 * Math.pow(Math.sin(t), 3);
	var y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(size / 2 + (size/40) * x, size / 2 +  (size/40) * (y-2.5));
}

function startHeartAnimation() {
	var interval = 50;
	var angle = 10;
	var heart = new Array();
	var animationTimer = setInterval(function () {
		var bloom = getHeartPoint(angle);
		var draw = true;
		for (var i = 0; i < heart.length; i++) {
			var p = heart[i];
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				draw = false;
				break;
			}
		}
		if (draw) {
			heart.push(bloom);
			garden.createRandomBloom(bloom[0], bloom[1]);
		}
		if (angle >= 30) {
			clearInterval(animationTimer);
            setTimeout(function() {
                $(".third").show();
                $("#code").typewriter();
            }, 1000);
		} else {
			angle += 0.2;
		}
	}, interval);
}

function start() {
    document.getElementById("player").play();
    $(".first").fadeOut(5000);$(".sencond").show();
    setTimeout(startHeartAnimation, 8000);
}
