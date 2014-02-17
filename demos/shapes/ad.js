AJS.setClearColor(0, 153, 204);

AJS.createPolygonActor(540, 960, 250, 5)
.rotate(-10000, 99999, 0).enablePsyx(0, 0.5, 0.5);
AJS.createRectangleActor(540, 960, 350, 175)
.setTexture("adefy").setLayer(4);

AJS.createPolygonActor(200, 1660, 200, 6)
.rotate(10000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createPolygonActor(200, 1660, 60, 5, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(880, 1660, 200, 6)
.rotate(-10000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createPolygonActor(880, 1660, 60, 5, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(270, 1320, 125, 8)
.rotate(-20000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createCircleActor(270, 1320, 30, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(810, 1320, 125, 8)
.rotate(20000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createCircleActor(810, 1320, 30, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(200, 200, 200, 6)
.rotate(10000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createPolygonActor(200, 200, 60, 5, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(880, 200, 200, 6)
.rotate(-10000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createPolygonActor(880, 200, 60, 5, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(100, 760, 125, 8)
.rotate(-20000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createCircleActor(100, 760, 30, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(980, 760, 125, 8)
.rotate(20000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createCircleActor(980, 760, 30, 10, 36, 46).setLayer(3);

AJS.createPolygonActor(540, 450, 165, 7)
.rotate(25000, 99999, 0).enablePsyx(0, 0.5, 1);
AJS.createRectangleActor(540, 450, 70, 70, 10, 36, 46).setLayer(3);

// Drop shapes!
var time = 0, shape;
for(var x = 0; x < 50; x++) {

  time += 200;
  setTimeout(function() {
    shape = Math.floor(Math.random() * 9) + 3;
    AJS.createPolygonActor(540, 1960, 20, shape, 10, 36, 46)
    .enablePsyx(1, 0.5, 1);
  }, time);
}
