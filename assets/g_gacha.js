(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"g_gacha_atlas_1", frames: [[0,0,1000,1600],[1002,0,900,1600]]},
		{name:"g_gacha_atlas_2", frames: [[258,1602,148,148],[408,1602,148,148],[558,1602,148,148],[708,1602,148,148],[1451,1019,148,148],[1451,1169,148,148],[1451,1319,148,148],[1451,1469,148,148],[858,1606,148,148],[0,0,900,1600],[0,1602,256,186],[1119,1606,154,48],[902,0,581,1017],[902,1019,547,585],[1275,1606,64,81],[1008,1606,109,109]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(ss["g_gacha_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ｃ1 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ｃ3 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ｃ4 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ｃ5 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ｃ6 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ｃ7 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ｃ8 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ｃ9 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ｃg = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eff1 = function() {
	this.initialize(ss["g_gacha_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eff2 = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.gacha_base_out = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.kage = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.kb = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.kf = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.kr = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.lever = function() {
	this.initialize(ss["g_gacha_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.シンボル9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.kr();
	this.instance.setTransform(-32,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-40.5,64,81);


(lib.シンボル8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDBBoMAAAiDPMBOHAAAMAAACDPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-420,500,840);


(lib.シンボル7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.eff2();
	this.instance.setTransform(-225,-400,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-400,450,800);


(lib.シンボル6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.eff1();
	this.instance.setTransform(-225,-399.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-399.5,450,800);


(lib.シンボル5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃg();
	this.instance.setTransform(-73.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-73.5,148,148);


(lib.シンボル4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.lever();
	this.instance.setTransform(-54.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-54.5,109,109);


(lib.シンボル3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.kage();
	this.instance.setTransform(-77,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-24,154,48);


(lib.c9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ9();
	this.instance.setTransform(-73.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-73.5,148,148);


(lib.c7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ1();
	this.instance.setTransform(-73.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-74,148,148);


(lib.c6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ4();
	this.instance.setTransform(-74,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-74,148,148);


(lib.c5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ3();
	this.instance.setTransform(-74,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-74,148,148);


(lib.c4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ7();
	this.instance.setTransform(-74,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-73.5,148,148);


(lib.c3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ5();
	this.instance.setTransform(-74.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-73.5,148,148);


(lib.c2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ6();
	this.instance.setTransform(-74,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-74,148,148);


(lib.c1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ｃ8();
	this.instance.setTransform(-73.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-73.5,148,148);


(lib.シンボル11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レバー
	this.instance = new lib.シンボル4("synched",0);
	this.instance.setTransform(77.05,77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},19).wait(5).to({startPosition:0},0).to({rotation:360},20).wait(136));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.1,154.2);


(lib.シンボル10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.シンボル9("synched",0);
	this.instance.setTransform(0,0,0.0781,0.0704);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},8,cjs.Ease.quadInOut).to({scaleX:0.0781,scaleY:0.0617},6,cjs.Ease.quadInOut).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-40.5,64,81);


(lib.シンボル2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// レイヤー_4
	this.instance = new lib.シンボル8("synched",0);
	this.instance.setTransform(0,390.05);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).wait(16));

	// レイヤー_2
	this.instance_1 = new lib.シンボル6("synched",0);
	this.instance_1.setTransform(16,459);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({alpha:1},16).wait(28));

	// 筐体
	this.instance_2 = new lib.kf();
	this.instance_2.setTransform(-254,-383);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// レイヤー_31 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_116 = new cjs.Graphics().p("AwctvMAhJAAAIBkbfMgkhAABg");
	var mask_graphics_117 = new cjs.Graphics().p("Awcu1MAhJAAAIBldqMgkiAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_graphics_116,x:17.55,y:491.15}).wait(1).to({graphics:mask_graphics_117,x:11.8,y:494.95}).wait(63));

	// レイヤー_30
	this.instance_3 = new lib.c1("synched",0);
	this.instance_3.setTransform(14,320);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({_off:false},0).to({y:490},3).to({rotation:-4.7062,x:11},2).to({rotation:6.451,x:17},5,cjs.Ease.cubicInOut).to({rotation:-1.0002,x:12.5},6,cjs.Ease.cubicInOut).to({rotation:0,x:14},4,cjs.Ease.cubicInOut).wait(44));

	// レイヤー_3
	this.instance_4 = new lib.シンボル7("synched",0);
	this.instance_4.setTransform(25,450);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).to({alpha:1},15).wait(18));

	// c2
	this.instance_5 = new lib.c2("synched",0);
	this.instance_5.setTransform(-90,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({startPosition:0},0).to({x:-130,y:-180},3).to({x:-30,y:-190},3).to({x:-130,y:-180},3).to({x:-30,y:-190},3).to({x:-90,y:-170},3).wait(3).to({startPosition:0},0).to({x:-130,y:-180},3).to({x:-30,y:-190},3).to({x:-130,y:-180},3).to({x:-30,y:-190},3).to({x:-90,y:-170},3).wait(16).to({startPosition:0},0).to({y:-180},5,cjs.Ease.get(1)).wait(1).to({x:-89.72,y:-178.402},0).wait(1).to({x:-88.88,y:-173.608},0).wait(1).to({x:-87.48,y:-165.618},0).wait(1).to({x:-85.52,y:-154.432},0).wait(1).to({x:-83,y:-140.05},0).wait(1).to({x:-85.1919,y:-149.4283},0).wait(1).to({x:-87.5253,y:-159.4116},0).wait(1).to({x:-90,y:-170},0).wait(67));

	// c3
	this.instance_6 = new lib.c3("synched",0);
	this.instance_6.setTransform(60,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51).to({startPosition:0},0).to({x:20,y:63.5},3).to({x:80,y:70},3).to({x:20,y:63.5},3).to({x:80,y:70},3).to({x:60,y:66.5},3).wait(3).to({startPosition:0},0).to({x:20,y:63.5},3).to({x:80,y:70},3).to({x:20,y:63.5},3).to({x:80,y:70},3).to({x:60,y:66.5},3).wait(16).to({startPosition:0},0).to({y:56.5},5,cjs.Ease.get(1)).wait(1).to({regX:-0.5,regY:0.5,x:58.7,y:57.9},0).wait(1).to({x:56.3,y:60.75},0).wait(1).to({x:52.3,y:65.45},0).wait(1).to({x:46.7,y:72},0).wait(1).to({regX:0,regY:0,x:40,y:80},0).wait(1).to({regX:-0.5,regY:0.5,x:45.75,y:76.25},0).wait(1).to({x:52.4,y:71.75},0).wait(1).to({regX:0,regY:0,x:60,y:66.5},0).wait(67));

	// c4
	this.instance_7 = new lib.c4("synched",0);
	this.instance_7.setTransform(160,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({startPosition:0},0).to({x:140,y:30},3).to({x:176,y:-20},3).to({x:140,y:30},3).to({x:176,y:-20},3).to({x:160,y:-10},3).wait(3).to({startPosition:0},0).to({x:140,y:30},3).to({x:176,y:-20},3).to({x:140,y:30},3).to({x:176,y:-20},3).to({x:160,y:-10},3).wait(16).to({startPosition:0},0).to({y:-20},5,cjs.Ease.get(1)).wait(1).to({regY:0.5,x:159.6,y:-18.3},0).wait(1).to({x:158.4,y:-14.7},0).wait(1).to({x:156.4,y:-8.7},0).wait(1).to({x:153.6,y:-0.3},0).wait(1).to({regY:0,x:150,y:10},0).wait(1).to({regY:0.5,x:153.1,y:4.2},0).wait(1).to({x:156.45,y:-2.4},0).wait(1).to({regY:0,x:160,y:-10},0).wait(67));

	// レイヤー_32
	this.instance_8 = new lib.シンボル5("synched",0);
	this.instance_8.setTransform(9.4,-60.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({startPosition:0},0).to({x:-56.5,y:-63.5},3).to({x:59,y:-80.5},3).to({x:-56.5,y:-63.5},3).to({x:59,y:-80.5},3).to({x:9.4,y:-60.85},3).wait(3).to({startPosition:0},0).to({x:-56.5,y:-63.5},3).to({x:59,y:-80.5},3).to({x:-56.5,y:-63.5},3).to({x:59,y:-80.5},3).to({x:9.4,y:-60.85},3).wait(16).to({startPosition:0},0).to({y:-70.85},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:9.9,y:-69.55},0).wait(1).to({y:-67.15},0).wait(1).to({y:-63.15},0).wait(1).to({y:-57.55},0).wait(1).to({regX:0,regY:0,x:9.4,y:-50.85},0).wait(1).to({regX:0.5,regY:0.5,x:9.9,y:-53.45},0).wait(1).to({y:-56.8},0).wait(1).to({regX:0,regY:0,x:9.4,y:-60.85},0).wait(67));

	// c6
	this.instance_9 = new lib.c6("synched",0);
	this.instance_9.setTransform(138,-138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({startPosition:0},0).to({x:88},3).to({x:168,y:-148.8},3).to({x:88,y:-138.8},3).to({x:168,y:-148.8},3).to({x:138,y:-138.8},3).wait(3).to({startPosition:0},0).to({x:88},3).to({x:168,y:-148.8},3).to({x:88,y:-138.8},3).to({x:168,y:-148.8},3).to({x:138,y:-138.8},3).wait(16).to({startPosition:0},0).to({y:-148.8},5,cjs.Ease.get(1)).wait(1).to({y:-147.6},0).wait(1).to({y:-144},0).wait(1).to({y:-138},0).wait(1).to({y:-129.6},0).wait(1).to({y:-118.8},0).wait(1).to({y:-125.0626},0).wait(1).to({y:-131.7293},0).wait(1).to({y:-138.8},0).wait(67));

	// c1
	this.instance_10 = new lib.c1("synched",0);
	this.instance_10.setTransform(40,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({startPosition:0},0).to({x:10,y:-218},3).to({x:70,y:-228},3).to({x:10,y:-218},3).to({x:70,y:-228},3).to({x:40,y:-208},3).wait(3).to({startPosition:0},0).to({x:10,y:-218},3).to({x:70,y:-228},3).to({x:10,y:-218},3).to({x:70,y:-228},3).to({x:40,y:-208},3).wait(16).to({startPosition:0},0).to({y:-218},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:40.75,y:-216.7},0).wait(1).to({x:41.5,y:-214.3},0).wait(1).to({x:42.8,y:-210.3},0).wait(1).to({x:44.65,y:-204.7},0).wait(1).to({regX:0,regY:0,x:46.5,y:-198},0).wait(1).to({regX:0.5,regY:0.5,x:44.95,y:-200.6},0).wait(1).to({x:42.75,y:-203.95},0).wait(1).to({regX:0,regY:0,x:40,y:-208},0).wait(67));

	// c5
	this.instance_11 = new lib.c5("synched",0);
	this.instance_11.setTransform(-96.8,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({startPosition:0},0).to({x:-106.8,y:40},3).to({x:-66.8},3).to({x:-106.8},3).to({x:-66.8},3).to({x:-96.8,y:50},3).wait(3).to({startPosition:0},0).to({x:-106.8,y:40},3).to({x:-66.8},3).to({x:-106.8},3).to({x:-66.8},3).to({x:-96.8,y:50},3).wait(16).to({startPosition:0},0).to({y:40},5,cjs.Ease.get(1)).wait(1).to({x:-96.4,y:40.8},0).wait(1).to({x:-95.2,y:43.2},0).wait(1).to({x:-93.2,y:47.2},0).wait(1).to({x:-90.4,y:52.8},0).wait(1).to({x:-86.8,y:60},0).wait(1).to({x:-89.9313,y:56.8687},0).wait(1).to({x:-93.2646,y:53.5354},0).wait(1).to({x:-96.8,y:50},0).wait(67));

	// c7
	this.instance_12 = new lib.c7("synched",0);
	this.instance_12.setTransform(-156.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({startPosition:0},0).to({x:-170},3).to({x:-88,y:-80.5},3).to({x:-170,y:-63},3).to({x:-88,y:-80.5},3).to({x:-156.5,y:-63},3).wait(3).to({startPosition:0},0).to({x:-170},3).to({x:-88,y:-80.5},3).to({x:-170,y:-63},3).to({x:-88,y:-80.5},3).to({x:-156.5,y:-63},3).wait(16).to({startPosition:0},0).to({y:-73},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,y:-71.65},0).wait(1).to({x:-158.15,y:-67.7},0).wait(1).to({x:-160.85,y:-61.1},0).wait(1).to({x:-164.6,y:-51.85},0).wait(1).to({regX:0,x:-170,y:-40},0).wait(1).to({regX:0.5,x:-165.25,y:-47.2},0).wait(1).to({x:-160.75,y:-54.85},0).wait(1).to({regX:0,x:-156.5,y:-63},0).wait(67));

	// c9
	this.instance_13 = new lib.c9("synched",0);
	this.instance_13.setTransform(131.45,-183.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({startPosition:0},0).to({x:100,y:-160},3).to({x:160,y:-150},3).to({x:100,y:-160},3).to({x:160,y:-150},3).to({x:131.45,y:-183.95},3).wait(3).to({startPosition:0},0).to({x:100,y:-160},3).to({x:160,y:-150},3).to({x:100,y:-160},3).to({x:160,y:-150},3).to({x:131.45,y:-183.95},3).wait(16).to({startPosition:0},0).to({y:-193.95},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:131.85,y:-192.25},0).wait(1).to({x:131.7,y:-188.65},0).wait(1).to({x:131.4,y:-182.65},0).wait(1).to({x:131,y:-174.25},0).wait(1).to({regX:0,regY:0,x:130,y:-164},0).wait(1).to({regX:0.5,regY:0.5,x:130.95,y:-169.7},0).wait(1).to({x:131.4,y:-176.35},0).wait(1).to({regX:0,regY:0,x:131.45,y:-183.95},0).wait(67));

	// c9
	this.instance_14 = new lib.c9("synched",0);
	this.instance_14.setTransform(-30,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({startPosition:0},0).to({x:-54,y:-211.45},3).to({x:50,y:-230},3).to({x:-54,y:-211.45},3).to({x:50,y:-230},3).to({x:-30,y:-206.5},3).wait(3).to({startPosition:0},0).to({x:-54,y:-211.45},3).to({x:50,y:-230},3).to({x:-54,y:-211.45},3).to({x:50,y:-230},3).to({x:-30,y:-206.5},3).wait(16).to({startPosition:0},0).to({y:-216.5},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:-29.5,y:-215.2},0).wait(1).to({y:-212.8},0).wait(1).to({y:-208.8},0).wait(1).to({y:-203.2},0).wait(1).to({regX:0,regY:0,x:-30,y:-196.5},0).wait(1).to({regX:0.5,regY:0.5,x:-29.5,y:-199.1},0).wait(1).to({y:-202.45},0).wait(1).to({regX:0,regY:0,x:-30,y:-206.5},0).wait(67));

	// c9
	this.instance_15 = new lib.c9("synched",0);
	this.instance_15.setTransform(-156.5,-136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(51).to({startPosition:0},0).to({x:-166.5,y:-130},3).to({x:-90,y:-176.5},3).to({x:-166.5,y:-130},3).to({x:-90,y:-176.5},3).to({x:-156.5,y:-136.5},3).wait(3).to({startPosition:0},0).to({x:-166.5,y:-130},3).to({x:-90,y:-176.5},3).to({x:-166.5,y:-130},3).to({x:-90,y:-176.5},3).to({x:-156.5,y:-136.5},3).wait(16).to({startPosition:0},0).to({y:-146.5},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:-155.9,y:-144.7},0).wait(1).to({x:-155.65,y:-140.95},0).wait(1).to({x:-155.25,y:-134.65},0).wait(1).to({x:-154.7,y:-125.85},0).wait(1).to({regX:0,regY:0,x:-154.5,y:-115.05},0).wait(1).to({regX:0.5,regY:0.5,x:-154.6,y:-121.25},0).wait(1).to({x:-155.25,y:-128.4},0).wait(1).to({regX:0,regY:0,x:-156.5,y:-136.5},0).wait(67));

	// c9
	this.instance_16 = new lib.c9("synched",0);
	this.instance_16.setTransform(-53.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(51).to({startPosition:0},0).to({x:-130,y:10},3).to({x:-14.5,y:-7},3).to({x:-130,y:10},3).to({x:-14.5,y:-7},3).to({x:-53.5,y:-10},3).wait(3).to({startPosition:0},0).to({x:-130,y:10},3).to({x:-14.5,y:-7},3).to({x:-130,y:10},3).to({x:-14.5,y:-7},3).to({x:-53.5,y:-10},3).wait(16).to({startPosition:0},0).to({y:-20},5,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:0.5,x:-52.85,y:-18.7},0).wait(1).to({x:-52.4,y:-16.3},0).wait(1).to({x:-51.7,y:-12.3},0).wait(1).to({x:-50.75,y:-6.7},0).wait(1).to({regX:0,regY:0,x:-50,y:0},0).wait(1).to({regX:0.5,regY:0.5,x:-50.55,y:-2.6},0).wait(1).to({x:-51.75,y:-5.95},0).wait(1).to({regX:0,regY:0,x:-53.5,y:-10},0).wait(67));

	// シンボル_11
	this.instance_17 = new lib.シンボル11("synched",0);
	this.instance_17.setTransform(13.4,325.9,1,1,0,0,0,77,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(180));

	// かげ
	this.instance_18 = new lib.シンボル3("synched",0);
	this.instance_18.setTransform(0,486);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(119).to({_off:false},0).wait(61));

	// 筐体
	this.instance_19 = new lib.kb();
	this.instance_19.setTransform(-276,-345.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(180));

	// レイヤー_6
	this.instance_20 = new lib.gacha_base_out();
	this.instance_20.setTransform(-126,400,1.0937,1.0935);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-383,581,1242.5);


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// レイヤー_5
	this.instance = new lib.シンボル10();
	this.instance.setTransform(-238.75,28.3,0.5,0.5,0,0,0,0.1,-0.1);

	this.instance_1 = new lib.シンボル10();
	this.instance_1.setTransform(-125.35,-414,0.5,0.5);

	this.instance_2 = new lib.シンボル10();
	this.instance_2.setTransform(295,-4.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},12).to({state:[]},16).wait(152));

	// レイヤー_4
	this.instance_3 = new lib.シンボル10();
	this.instance_3.setTransform(-250,120,1,1,0,0,0,0.1,-0.1);

	this.instance_4 = new lib.シンボル10();
	this.instance_4.setTransform(-210,-390);

	this.instance_5 = new lib.シンボル10();
	this.instance_5.setTransform(240,-370,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},6).to({state:[]},16).wait(158));

	// レイヤー_2
	this.instance_6 = new lib.シンボル10();
	this.instance_6.setTransform(-310,40,0.4938,0.5,0,0,0,0.1,-0.1);

	this.instance_7 = new lib.シンボル10();
	this.instance_7.setTransform(260,110);

	this.instance_8 = new lib.シンボル10();
	this.instance_8.setTransform(160,-430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[]},16).wait(164));

	// ガチャ
	this.instance_9 = new lib.シンボル2();
	this.instance_9.setTransform(0,488.95,1,1,0,0,0,0,540.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({regX:-0.1,rotation:-1.9509,y:483},3).to({regX:0,rotation:2.2606,x:0.05,y:483.05},3).to({regX:-0.1,rotation:-1.9509,x:0,y:483},3).to({regX:0,rotation:2.2606,x:0.05,y:483.05},3).to({rotation:0,x:0,y:488.95},2).wait(4).to({regX:-0.1,rotation:-1.9509,y:483},3).to({regX:0,rotation:2.2606,x:0.05,y:483.05},3).to({regX:-0.1,rotation:-1.9509,x:0,y:483},3).to({regX:0,rotation:2.2606,x:0.05,y:483.05},3).to({rotation:0,x:0,y:488.95},2).wait(20).to({scaleY:0.9682},0).to({regY:540.1,scaleY:1.0005,y:428.4},5,cjs.Ease.get(1)).to({regY:540.2,scaleY:1,y:488.95},4,cjs.Ease.get(-1)).to({scaleY:0.9575,y:489.05},2).to({scaleY:1,y:488.95},3).wait(65));

	// ｂｇ
	this.instance_10 = new lib.bg();
	this.instance_10.setTransform(-497,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-497,-800,1000,1600);


// stage content:
(lib.g_gacha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [179];
	// timeline functions:
	this.frame_179 = function() {
		// -----
		// 消さない //
		this.stop ( ) ;
		this.dispatchEvent ( 'end' ) ;
		// -----
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// layer1
	this.instance = new lib.シンボル1();
	this.instance.setTransform(360.1,640.1,0.8,0.8,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({regX:0,regY:0,x:360,y:640},0).to({scaleX:2.1249,scaleY:2.125,x:325.85,y:-36.55},40,cjs.Ease.quadInOut).wait(71));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-370.2,-1096.5,1764.9,2760);
// library properties:
lib.properties = {
	id: '12D697AEE233DA45AAF0664AD4E7A8AA',
	width: 720,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/g_gacha_atlas_1.png?1768578831626", id:"g_gacha_atlas_1"},
		{src:"images/g_gacha_atlas_2.png?1768578831627", id:"g_gacha_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['12D697AEE233DA45AAF0664AD4E7A8AA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;