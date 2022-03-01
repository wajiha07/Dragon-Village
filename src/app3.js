var INITIALIZED_3 = false;

var HelloWorldLayer3 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var bg_sprite1 = new cc.Sprite.create(res.blar_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, .5));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);
function work(){
        var buyDrag0 = new cc.Sprite.create(res.demo_png);
        buyDrag0.setAnchorPoint(cc.p(-.7, .5));
        buyDrag0.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag0, 0);   
}
this.scheduleOnce(work,2); 

function work2()
{   var button = new ccui.Button();
    button.loadTextures(res.buyDrag1_png, res.buyDrag1_png);
    button.setAnchorPoint(cc.p(-.8,.5));
    button.x = size.width / 2;
    button.y = size.height / 2;
    button.addTouchEventListener(this.touchEvent, this);
    this.addChild(button);
    button.setScale(1.18);
    var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
    var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
     var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
  //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
     var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
     var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
     button.runAction(sequence_dragon1);
}
this.scheduleOnce(work2,0);

function work3()
{        var buyDrag1 = new cc.Sprite.create(res.buyDrag3_png);
        buyDrag1.setAnchorPoint(cc.p(-.8, .5));
        buyDrag1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(buyDrag1, 1);
        buyDrag1.setScale(1.18);
       var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
       var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
        var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
      //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
        var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
        var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
        buyDrag1.runAction(sequence_dragon1);
}
//this.scheduleOnce(work3,3);


function btn(){
      
        var button = new ccui.Button();
        button.loadTextures(res.buyDrag2_png, res.buyDrag2_png);
        button.setAnchorPoint(cc.p(-.8,.5));
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);
        button.setScale(1.18);
        var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
        var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
         var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
       //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
         var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
         var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
         button.runAction(sequence_dragon1);
 }
 this.scheduleOnce(btn,2);

 function btn2(){
      
    var button = new ccui.Button();
    button.loadTextures(res.buyDrag3_png, res.buyDrag3_png);
    button.setAnchorPoint(cc.p(-.8,.5));
    button.x = size.width / 2;
    button.y = size.height / 2;
    button.addTouchEventListener(this.touchEvent, this);
    this.addChild(button);
    button.setScale(1.18);
    var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
    var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
     var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
   //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
     var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
     var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2,buyDrag1_action5);
     button.runAction(sequence_dragon1);
}
this.scheduleOnce(btn2,4);


function btn3(){
      
    var button = new ccui.Button();
    button.loadTextures(res.buyDrag2_png, res.buyDrag2_png);
    button.setAnchorPoint(cc.p(-.8,.5));
    button.x = size.width / 2;
    button.y = size.height / 2;
    button.addTouchEventListener(this.touchEvent, this);
    this.addChild(button);
    button.setScale(1.18);
    var buyDrag1_action1 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),63);
    var buyDrag1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
     var buyDrag1_action2 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(0, 0)),25);
   //  var buyDrag1_action4 = cc.ScaleBy.create(0.4,1.15,1.15);
    // var buyDrag1_action5 = cc.Repeat.create(cc.MoveBy.create(.02, cc.p(-5, 0)),55);
     var sequence_dragon1= cc.Sequence.create(buyDrag1_action1,buyDrag1_action3,buyDrag1_action2);//,buyDrag1_action5);
     button.runAction(sequence_dragon1);
}
this.scheduleOnce(btn3,6);
        
   

  

        return true;
    },
    touchEventnext: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:        ///NEXT
                cc.log("Touch Down next");
                next();
                

                break;              
        }
        
    },


    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                play3();
                

                break;              
        }
        
    }
});

var play3 = function()
{
    var scene = new HelloWorldScene4();
    cc.director.pushScene(scene);
}

var next = function()
{
    var scene = new HelloWorldScene3next();
    cc.director.pushScene(scene);
}



var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_3 == false)
        {
            INITIALIZED_3 = true;

            var layer = new HelloWorldLayer3();
            this.addChild(layer);
        }
    }
});