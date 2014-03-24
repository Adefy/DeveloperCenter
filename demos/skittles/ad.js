var skittles, guider, anger, taste, red, blue, black, yellow;

AJS.setAutoScale(width / 720, height / 1280);

AJS.setClearColor(173, 216, 230);
guiderColor = new AJSColor3 (255, 216, 230);

guider = AJS.createRectangleActor(215, 1000, 500, 10)
.setRotation(102).setColor(guiderColor).setLayer(0)
.enablePsyx(0, 0.5, 0.8);

AJS.createRectangleActor(0, 810, 10, 1280).setLayer(0)
.enablePsyx(0, 0.5, 0.5);

AJS.createRectangleActor(720, 810, 10, 1180).setLayer(0)
.enablePsyx(0, 0.5, 0.5);

AJS.createRectangleActor(360, 1280, 700, 10).setLayer(0)
.enablePsyx(0, 0.5, 0.5);

AJS.createRectangleActor(360, 10, 720, 50)
.setRotation(0).setTexture("ground").setLayer(3)
.enablePsyx(0, 0.1, 1);

AJS.createRectangleActor(360, 640, 720, 1280)
.setTexture("bg").setLayer(1);

AJS.createRectangleActor(30, 55, 48, 72)
.setRotation(90).setTexture("stone").enablePsyx(0, 0, 1).setLayer(2);
AJS.createRectangleActor(20, 112, 48, 100)
.setTexture("stone").enablePsyx(0, 0, 1).setLayer(2);

AJS.createRectangleActor(700, 58, 64, 64)
.setTexture("metal").setLayer(2)
.enablePsyx(0, 0, 1);
AJS.createRectangleActor(640, 58, 64, 64)
.setTexture("metal").setLayer(2)
.enablePsyx(0, 0, 1);
AJS.createRectangleActor(680, 105, 64, 120)
.setRotation(90).setTexture("stone").setLayer(2)
.enablePsyx(0, 0, 1);
AJS.createRectangleActor(710, 175, 48, 100)
.setTexture("stone").setLayer(2)
.enablePsyx(0, 0, 1);
AJS.createRectangleActor(665, 160, 64, 64)
.setTexture("metal").setLayer(2)
.enablePsyx(0, 0, 1);

function emptyBag()  {
  skittles.rotate(0, 1000, 0);
  skittles.move(360, 900, 1000, 0);
}

function angryBirds() {

  yellow = AJS.createRectangleActor(120, 64, 64, 64)
  .setRotation(0).setTexture("angry_yellow").setLayer(3);
  blue = AJS.createRectangleActor(264, 64, 64, 64)
  .setRotation(0).setTexture("angry_blue").setLayer(3);
  red = AJS.createRectangleActor(408, 64, 64, 64)
  .setRotation(0).setTexture("angry_red").setLayer(3);
  black = AJS.createRectangleActor(572, 64, 64, 64)
  .setRotation(0).setTexture("angry_black").setLayer(3);

  setTimeout(function() {
    yellow.move(null, Math.floor(Math.random() * 20 ) + 200, 400, 0);
    blue.move(null, Math.floor(Math.random() * 20 ) + 200, 400, 0);
    red.move(null, Math.floor(Math.random() * 20 ) + 200, 400, 0);
    black.move(null, Math.floor(Math.random() * 20 ) + 200, 400, 0);

  }, 1000)

  setTimeout(function() {
    yellow.enablePsyx(100000, 0, 1.01);
    blue.enablePsyx(100000, 0, 1.01);
    red.enablePsyx(100000, 0, 1.01);
    black.enablePsyx(100000, 0, 1.01);
  }, 1500)
}

function makeItRainbow()  {

  rainbow2 = AJS.createRectangleActor(365, 900, 512, 172)
  .setTexture("rainbow2").setLayer(2);
  rainbow = AJS.createRectangleActor(365, 900, 512, 172)
  .setTexture("rainbow").setLayer(2);

  rainbow.move(null, 1098, 500, 0);

  setTimeout(function(){
    anger = AJS.createRectangleActor(360, 1180, 512, 128)
                .setTexture("anger").setLayer(3);
  }, 505);

  setTimeout(function(){
    rainbow2.move(null, 700, 500, 0);
  }, 1005)

  setTimeout(function() {
    var taste = AJS.createRectangleActor(360, 630, 512, 64)
                .setTexture("taste").setLayer(3);
  }, 1505);
}

function makeItSkittle()  {
  var time = 0, rotation;

  for(var y = 0; y < 14; y++) {
    for(var x = 0; x < 8; x++) {

      time += 24;

      setTimeout(function() {

        var skittleColour = Math.floor(Math.random() * 5);
        var px = Math.floor(Math.random() * 50) + 200;
        var py = Math.floor(Math.random() * 100) + 1100;

        if(skittleColour == 0)  {
          rotation = Math.floor(Math.random() * 6) + 120
          skittles.rotate(rotation, 100, 0);
          AJS.createCircleActor(px, py, 10)
          .setPhysicsLayer(Math.floor(Math.random() * 2) + 1)
          .setLayer(3).enablePsyx(1, 0.5, 0.6).attachTexture("red", 20, 20);
        }
        if(skittleColour == 1)  {
          rotation = Math.floor(Math.random() * 6) + 120
          skittles.rotate(rotation, 100, 0);
          AJS.createCircleActor(px, py, 10)
          .setPhysicsLayer(Math.floor(Math.random() * 2) + 1)
          .setLayer(3).enablePsyx(1, 0.5, 0.6).attachTexture("orange", 20, 20);
        }
        if(skittleColour == 2)  {
          rotation = Math.floor(Math.random() * 6) + 120
          skittles.rotate(rotation, 100, 0);
          AJS.createCircleActor(px, py, 10)
          .setPhysicsLayer(Math.floor(Math.random() * 2) + 1)
          .setLayer(3).enablePsyx(1, 0.5, 0.6).attachTexture("purple", 20, 20);
        }
        if(skittleColour == 3)  {
          rotation = Math.floor(Math.random() * 6) + 120
          skittles.rotate(rotation, 100, 0);
          AJS.createCircleActor(px, py, 10)
          .setPhysicsLayer(Math.floor(Math.random() * 2) + 1)
         .setLayer(3).enablePsyx(1, 0.5, 0.6) .attachTexture("green", 20, 20);
        }
        if(skittleColour == 4)  {
          rotation = Math.floor(Math.random() * 6) + 120
          skittles.rotate(rotation, 100, 0);
          AJS.createCircleActor(px, py, 10)
          .setPhysicsLayer(Math.floor(Math.random() * 2) + 1)
          .setLayer(3).enablePsyx(1, 0.5, 0.6).attachTexture("yellow", 20, 20);
        }
      }, time);
    }
  }
}

angryBirds();

skittles = AJS.createRectangleActor(-100, 1500, 567, 264)
.setRotation(0).setTexture("skittles").setLayer(3);

skittles.move(205, 1240, 800, 0)
skittles.rotate(120, 800, 0)

setTimeout(function() {
  makeItSkittle();
}, 805);

setTimeout(function() {
  emptyBag();
  guider.disablePsyx();
}, 4100);

setTimeout(function() {
  makeItRainbow();
}, 5180);
