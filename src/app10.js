var INITIALIZED_10 = false;

var HelloWorldLayer10 = cc.Layer.extend({
    sprite:null,
    count:0,
    loadingBar: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var bg_sprite1 = new cc.Sprite.create(res.ctr_png);
        bg_sprite1.setAnchorPoint(cc.p(.5, .5));
        bg_sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(bg_sprite1, 0);

    function logo(){

        var size = cc.winSize;
        var logo = new cc.Sprite.create(res.logo_png);
        logo.setAnchorPoint(cc.p(.5, .3));
        logo.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(logo, 1);
        var btn_action = cc.ScaleTo.create(1, 1.1, 1.1);
        var btn_action2 = cc.ScaleTo.create(1, .9, .95);
        var btn_action3 = cc.ScaleTo.create(1, 1.1, 1.1);
        var btn_action4 = cc.ScaleTo.create(1, .9, .95);
        var btn_action5 = cc.ScaleTo.create(1, 1.1, 1.1);
        var btn_action6 = cc.ScaleTo.create(1, .9, .95);
        sequence_btn2=cc.Sequence.create(btn_action,btn_action2,btn_action3,btn_action4,btn_action5,btn_action6);
        logo.runAction(sequence_btn2);
        }
function playbtn(){

            var size = cc.winSize;
            var playbtn = new cc.Sprite.create(res.play_png);
            playbtn.setAnchorPoint(cc.p(.5, 3));
            playbtn.setPosition(cc.p(size.width / 2, size.height / 2));
           this.addChild(playbtn, 1);
           var btn_action = cc.ScaleTo.create(1.5, 1.2, 1.2);
           var btn_action2 = cc.ScaleTo.create(1.5, .9, .95);
           var btn_action3 = cc.ScaleTo.create(1.5, 1.2, 1.2);
           var btn_action4 = cc.ScaleTo.create(1.5, .9, .95);
           var btn_action5 = cc.ScaleTo.create(1.5, 1.2, 1.2);
           var btn_action6 = cc.ScaleTo.create(1.5, .9, .95);
           sequence_btn2=cc.Sequence.create(btn_action,btn_action2,btn_action3,btn_action4,btn_action5,btn_action6);
           playbtn.runAction(sequence_btn2);
            }   

      this.scheduleOnce(logo,0);
      this.scheduleOnce(playbtn,0);

    return true;
    },
    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
              

                break;              
        }
        
    }
});



var HelloWorldScene10 = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if (INITIALIZED_10 == false)
        {
            INITIALIZED_10 = true;

            var layer = new HelloWorldLayer10();
            this.addChild(layer);
        }
    }
});