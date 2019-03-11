/*
 * 
 * This is the logic of our game. 
 */

/*jslint node: true, vars: true */
/*global gEngine, Scene, GameObjectset, TextureObject, Camera, vec2, Reticle,
  FontRenderable, SpriteRenderable, LineRenderable,
  GameObj, mGlobalSpeed ect */
/* find out more about jslint: http://www.jslint.com/help.html */
"use strict"

Level2.prototype.SpawnWorld2 = function () {
    this.Spawn2Init();
    //1 = regular wall
    //r = right slanted wall
    //t = left slanted wall
    //2 = destructable wall
    //3 = small closing door  
    //4 = large closing door   
    //5 = lazers! or falling rocks, TBD
                        //Start                                //450 units     
    var Row0 = "S111111161116111611161116111611161116111611161E";
    var Row1 = "S000000000x0000x0000000000000x000000x00000x000E";
    var Row2 = "S000000x000000000000x0000x0000000x000000x00000E";
    var Row3 = "S0000000000x0000x000000000000000000000x0000000E";
    var Row4 = "S00000000000000000000000000x000x000000000x0000E";
    var Row5 = "S000000000x00000x00000x000000000000x0000000000E";
    var Row6 = "S0000000000000000000x0000x0000000000000000x000E";
    var Row7 = "S000000000000000000x00000000x000x00000x00000x0E";
    var Row8 = "S000000x000000x000x000x00000000000x00000000x00E";
    var Row9 = "S000000000x0000000000000000000x0000000x000x000E";
    var Ro10 = "S111111111111111111111111111111111111111111111E"; 
    this.mWorldArray[0] = Row0.split("");
    this.mWorldArray[1] = Row1.split("");
    this.mWorldArray[2] = Row2.split("");
    this.mWorldArray[3] = Row3.split("");
    this.mWorldArray[4] = Row4.split("");
    this.mWorldArray[5] = Row5.split("");
    this.mWorldArray[6] = Row6.split("");
    this.mWorldArray[7] = Row7.split("");
    this.mWorldArray[8] = Row8.split("");
    this.mWorldArray[9] = Row9.split("");
    this.mWorldArray[10] = Ro10.split("");
    this.SpawnWorldFromArray();
};

Level2.prototype.Spawn2Init = function (){
    this.mCamera = new Camera(
        vec2.fromValues(30, 50), // position of the camera
        200,                     // width of camera
        [0, 0, mScreenX, mScreenY]         // viewport (orgX, orgY, width, height)
    );
    this.mCamera.setBackgroundColor([0.8, 0.8, 0.8, 1]);
            // sets the background to gray
    gEngine.DefaultResources.setGlobalAmbientIntensity(3);
           
    //Background
    this.mBg = new TextureRenderable(this.kBG);
    this.mBg.getXform().setSize(200,180);
    this.mBg.getXform().setPosition(30,20);
    
    this.mHero = new Hero(this.kShipSprite);
    this.mReticle = new Reticle(this.kReticleSprite);  
    this.mWorldObjects = new GameObjectSet();
    this.mDoorObjects = new GameObjectSet();
    this.mMissileSet = new GameObjectSet();
    this.mTargetSet = new GameObjectSet();
    this.mBreakableSet = new GameObjectSet();
    this.UITextLevel.setText("World 2-2");
       this.mAllFire = new GameObjectSet();
};