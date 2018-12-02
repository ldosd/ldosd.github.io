webpackJsonp([0],{

/***/ 1079:
/*!*********************************!*\
  !*** ./src/scenes/LoadScene.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LoadScene =
/** @class */
function (_super) {
  __extends(LoadScene, _super);

  function LoadScene() {
    return _super.call(this, {
      key: 'LoadScene'
    }) || this;
  }

  LoadScene.prototype.preload = function () {
    this.load.image('background_title', 'assets/gfx/title_screen.png');
    this.load.image('background_win', 'assets/gfx/win_screen.png');
    this.load.image('background_gameover', 'assets/gfx/gameover_screen.png');
    this.load.image('knife', '/assets/gfx/knife.png');
    this.load.image('cross', '/assets/gfx/cross.png');
    this.load.image('tilemap01', '/assets/gfx/tilemap01.png');
    this.load.image('background-tiles', '/assets/gfx/background-tiles.png');
    this.load.tilemapTiledJSON('map1', '/assets/maps/map1.json');
    this.load.tilemapTiledJSON('map2', '/assets/maps/map2.json'); // this.load.tilemapTiledJSON('map3', '/assets/maps/map3.json');

    this.load.spritesheet('player', '/assets/gfx/player.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('priest', '/assets/gfx/priest.png', {
      frameWidth: 16,
      frameHeight: 32
    });
    this.load.spritesheet('popehat', '/assets/gfx/popehat.png', {
      frameWidth: 16,
      frameHeight: 32
    });
    this.load.audio('titleaudio', 'assets/sfx/ambient_deep_bass.mp3', null);
    this.load.audio('gameoveraudio', 'assets/sfx/ambient_violin_scary.mp3', null);
    this.load.audio('winaudio', 'assets/sfx/ambient_deep_bass.mp3', null);
    this.load.audio('knife_hit', 'assets/sfx/knife_hit.mp3', null);
    this.load.audio('player_death', 'assets/sfx/player_death2.mp3', null);
    this.load.audio('player_fire_knife', 'assets/sfx/player_fire_knife.mp3', null);
    this.load.audio('player_hurt', 'assets/sfx/player_hurt.mp3', null);
    this.load.audio('player_jump', 'assets/sfx/player_jump2.mp3', null);
    this.load.audio('player_pickup', 'assets/sfx/player_pickup.mp3', null);
    this.load.audio('player_pickup_soul', 'assets/sfx/player_take_soul.mp3', null);
    this.load.audio('popehat_death', 'assets/sfx/popehat_death.mp3', null);
    this.load.audio('popehat_flying', 'assets/sfx/popehat_flying.mp3', null);
    this.load.audio('portal_activated', 'assets/sfx/portal_activated.mp3', null);
    this.load.audio('portal_use', 'assets/sfx/portal_use.mp3', null);
    this.load.audio('priest_death', 'assets/sfx/priest_death.mp3', null);
    this.load.audio('priest_fire', 'assets/sfx/priest_fire.mp3', null);
    this.load.audio('gameover_voice', 'assets/sfx/gameover.mp3', null);
    this.load.audio('player_laugh', 'assets/sfx/player_laugh.mp3', null);
    this.load.audio('priest_chant', 'assets/sfx/priest_chant.mp3', null);
    this.load.audio('win_voice', 'assets/sfx/win.mp3', null);
    this.load.audio('playing_audio', 'assets/sfx/ambient_ghosts.mp3', null);
  };

  LoadScene.prototype.create = function () {
    // needs to be in create not in preload
    this.initAnims();
  }; // animations are shared between screens, create them only once


  LoadScene.prototype.initAnims = function () {
    // player
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('player', {
        start: 8,
        end: 9
      }),
      frameRate: 3,
      repeat: 1
    });
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 0,
        end: 5
      }),
      frameRate: 8,
      repeat: 1
    });
    this.anims.create({
      key: 'turn',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [6]
      }),
      frameRate: 8,
      repeat: 1
    });
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [7]
      }),
      frameRate: 16,
      repeat: 1
    });
    this.anims.create({
      key: 'jumpup',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0]
      }),
      frameRate: 0,
      repeat: 0
    });
    this.anims.create({
      key: 'jumpdown',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [4]
      }),
      frameRate: 0,
      repeat: 0
    });
    this.anims.create({
      key: 'sacrefice',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 10, 11]
      }),
      frameRate: 4,
      repeat: 0
    }); // popehat

    this.anims.create({
      key: 'flying',
      frames: this.anims.generateFrameNumbers('popehat', {
        start: 0,
        end: 7
      }),
      frameRate: 10,
      repeat: -1
    }); // priest

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('priest', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 1
    });
    this.anims.create({
      key: 'crossfire',
      frames: this.anims.generateFrameNumbers('priest', {
        start: 2,
        end: 2
      }),
      frameRate: 4,
      repeat: 0
    });
    this.anims.create({
      key: 'sacreficepose',
      frames: this.anims.generateFrameNumbers('priest', {
        start: 3,
        end: 3
      }),
      frameRate: 4,
      repeat: 0
    });
  };

  LoadScene.prototype.update = function (time, delta) {
    this.scene.start('GameScene'); //this.scene.start('StartScene');
  };

  return LoadScene;
}(Phaser.Scene);

exports.default = LoadScene;

/***/ }),

/***/ 1080:
/*!**********************************!*\
  !*** ./src/scenes/StartScene.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var StartScene =
/** @class */
function (_super) {
  __extends(StartScene, _super);

  function StartScene() {
    return _super.call(this, {
      key: 'StartScene'
    }) || this;
  }

  StartScene.prototype.preload = function () {
    this.music = this.sound.add('titleaudio', {
      loop: true
    });
  };

  StartScene.prototype.create = function () {
    var _this = this;

    this.add.image(0, 0, 'background_title').setOrigin(0, 0);
    this.music.play('', 0, 1, true);
    this.add.zone(450, 200, 568, 63).setName('StartGame').setInteractive();
    this.input.on('gameobjectdown', function (pointer, gameObject) {
      if (gameObject.name == 'StartGame') {
        document.getElementsByTagName('canvas')[0].style.cursor = "default";

        _this.music.stop();

        _this.scene.start('GameScene');
      }
    });
    this.input.on('pointerover', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "crosshair";
    });
    this.input.on('pointerout', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "default";
    });
  };

  StartScene.prototype.update = function (time, delta) {//this.music.stop();
    //this.scene.start('GameScene');
  };

  return StartScene;
}(Phaser.Scene);

exports.default = StartScene;

/***/ }),

/***/ 1081:
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var player_1 = __importDefault(__webpack_require__(/*! ../characters/player */ 1082));

var MapHandler_1 = __importDefault(__webpack_require__(/*! ../handlers/MapHandler */ 1083));

var EnemyHandler_1 = __importDefault(__webpack_require__(/*! ../handlers/EnemyHandler */ 1084));

var UIHandler_1 = __importDefault(__webpack_require__(/*! ../handlers/UIHandler */ 1087));

var GameScene =
/** @class */
function (_super) {
  __extends(GameScene, _super);

  function GameScene() {
    var _this = _super.call(this, {
      key: 'GameScene'
    }) || this;

    _this.map = new MapHandler_1.default({
      scene: _this,
      yOffset: 80
    });
    _this.enemyHandler = new EnemyHandler_1.default(_this);
    _this.uiHandler = new UIHandler_1.default(_this);
    console.log('constructing game');
    return _this;
  }

  GameScene.prototype.preload = function () {
    this.music = this.sound.add('playing_audio', {
      loop: true,
      volume: 0.4
    });
  };

  GameScene.prototype.create = function () {
    this.enemyHandler.create();
    this.uiHandler.create();
    this.initPlayer();
    this.map.create();
    this.initPhysics();
    this.music.volume = 0.4;
    this.music.play('', 0, 1, true);
  };

  GameScene.prototype.update = function (time, delta) {
    this.player.update(time, delta);
    this.enemyHandler.update(time, delta);
  };

  GameScene.prototype.initPlayer = function () {
    var cursors = this.input.keyboard.createCursorKeys();
    this.player = new player_1.default(100, 100, this, cursors);
  };

  GameScene.prototype.initPhysics = function () {
    this.map.init();
  };

  return GameScene;
}(Phaser.Scene);

exports.default = GameScene;

/***/ }),

/***/ 1082:
/*!**********************************!*\
  !*** ./src/characters/player.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BulletManager_1 = __importDefault(__webpack_require__(/*! ../handlers/BulletManager */ 435));

var Player =
/** @class */
function () {
  function Player(x, y, scene, cursors) {
    var _this = this;

    this.scene = scene;
    this.cursors = cursors;
    this._ = this;
    this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.turnedRight = true;
    this.doublejump = true;
    this.jumpTimer = 0;
    this.hp = 5;
    this.animTimers = {
      turn: 0,
      jump: 0
    };
    this.haveFired = false;
    this.sceneLcl = scene;
    this.sprite = this.scene.physics.add.sprite(x, y, 'player');
    this.sprite.body.offset.x = 9;
    this.sprite.body.setSize(14, 32);
    this.sprite.setScale(2);
    this.sprite.setDepth(6);
    this.knifeManager = new BulletManager_1.default(this.scene, 'knife', 5, true, 500, {
      x: 12,
      y: 12,
      width: 10,
      height: 6
    }, this.onFire, this);
    this.pew = this.sceneLcl.sound.add('player_fire_knife', {
      loop: false
    });
    this.pew.volume = 0.4;
    this.jumpsound = this.sceneLcl.sound.add('player_jump', {
      loop: false,
      volume: 0.3
    });
    this.jumpsound.volume = 0.3;
    this.hurtsound = this.sceneLcl.sound.add('player_hurt', {
      loop: false,
      volume: 0.8
    });
    this.diesound = this.sceneLcl.sound.add('player_death', {
      loop: false,
      volume: 0.8
    }); //this.knifehitwall = this.sceneLcl.sound.add('knife_hit', { loop: false });
    //this.knifehitwall.volume = 0.3;

    this.sprite.on('animationcomplete', function (e) {
      if (e.key === 'jump') {
        _this.sprite.body.setVelocityY(-330);

        _this.jumpTimer = 330;
        _this.doublejump = true;

        _this.jumpsound.play();
      }
    }, scene);
  }

  Player.prototype.update = function (time, delta) {
    this.sceneLcl.physics.world.wrap(this.sprite, 8, 30);
    this.knifeManager.update(delta);

    if (this.jumpTimer > 0) {
      this.jumpTimer -= delta;
    }

    if (this.cursors.left.isDown) {
      if (this.sprite.flipX === false && this.animTimers.turn <= 0 && this.animTimers.jump <= 0) {
        this.sprite.anims.play('turn', true);
        this.animTimers.turn = 120;
      }

      this.sprite.body.setVelocityX(-160);
      this.turnedRight = false;
      this.sprite.flipX = true;
    } else if (this.cursors.right.isDown) {
      if (this.sprite.flipX === true && this.animTimers.turn <= 0 && this.animTimers.jump <= 0) {
        this.sprite.anims.play('turn', true);
        this.animTimers.turn = 120;
      }

      this.sprite.body.setVelocityX(160);
      this.turnedRight = true;
      this.sprite.flipX = false;
    } else {
      this.sprite.body.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.sprite.body.onFloor()) {
      // animationcomplete will trigger the actual jump
      this.sprite.anims.play('jump', true);
      this.animTimers.jump = 100;
    }

    if (this.cursors.up.isDown && this.jumpTimer <= 0 && this.doublejump === true && this.animTimers.jump <= 0) {
      this.sprite.body.setVelocityY(-330);
      this.doublejump = false;
      this.jumpsound.play();
    }

    if (this.space.isDown && !this.haveFired) {
      this.haveFired = true;

      if (this.turnedRight) {
        this.knifeManager.fire(this.sprite.x + 10, this.sprite.y - 6, this.turnedRight);
      } else {
        this.knifeManager.fire(this.sprite.x - 10, this.sprite.y - 6, this.turnedRight);
      }
    } else if (!this.space.isDown) {
      this.haveFired = false;
    }

    if (Math.abs(this.sprite.body.velocity.x) > 0 && this.animTimers.turn <= 0 && this.animTimers.jump <= 0) {
      this.sprite.anims.play('run', true);
    } else if (this.animTimers.turn <= 0 && this.animTimers.jump <= 0) {
      this.sprite.anims.play('idle', true);
    }

    this.animTimers.turn -= delta;
    this.animTimers.jump -= delta;

    if (this.sprite.body.velocity.y < 0 && this.animTimers.jump <= 0) {
      this.sprite.anims.play('jumpup', true);
    } else if (this.sprite.body.velocity.y > 0 && this.animTimers.jump <= 0) {
      this.sprite.anims.play('jumpdown', true);
    }
  };

  Player.prototype.stopKnife = function (knife, tile) {
    knife.setVelocityX(0);
    knife.setVelocityY(0);
    knife.setAccelerationY(600); //let duns = knife.scene.sound.add('knife_hit', { loop: false });
    //duns.play();
  };

  Player.prototype.sacrefice = function (player, sacrefice) {
    console.log("sacrefice"); // this.sprite.anims.play('sacrefice');
  };

  Player.prototype.takeDamage = function () {
    this.hp--;
    this.hurtsound.play();
  };

  Player.prototype.died = function () {
    this.diesound.play();
  };

  Player.prototype.onFire = function (context) {
    context.pew.play();
  };

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ 1083:
/*!************************************!*\
  !*** ./src/handlers/MapHandler.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var MapHandler =
/** @class */
function () {
  function MapHandler(_a) {
    var scene = _a.scene,
        yOffset = _a.yOffset;
    this.currentMap = 1; // Current level

    this.maxMap = 2; // Maximum level, when this map is beaten we will see the winscreen

    this.layerYOffset = 0;
    this.colliders = [];
    this.spawnpoint = {
      x: 100,
      y: 100
    };
    this.sceneRef = scene;
    this.layerYOffset = yOffset;
  }

  MapHandler.prototype.create = function () {
    var _this = this;

    console.log('create map');
    this.map = this.sceneRef.make.tilemap({
      key: 'map' + this.currentMap
    });
    this.tiles = this.map.addTilesetImage('tilemap01', 'tilemap01');
    this.bgtiles = this.map.addTilesetImage('background-tiles', 'background-tiles');
    this.deadlyGroup = this.sceneRef.physics.add.staticGroup();
    this.backgroundLayer = this.map.createDynamicLayer('Background', this.bgtiles).setScale(2);
    this.backgroundLayer.setDepth(0);
    this.tileLayer = this.map.createDynamicLayer('Tiles', this.tiles).setScale(2); // this.tileLayer.setDepth(8); // above bullets or no?

    this.sceneRef.physics.world.bounds.width = this.tileLayer.width * 2;
    this.sceneRef.physics.world.bounds.height = this.tileLayer.height * 2;
    this.sceneRef.enemyHandler.removeAll();
    this.findObjectsByType('Priest', 0).forEach(function (element) {
      _this.sceneRef.enemyHandler.add(element.x * 2, element.y * 2, 0);
    });
    this.findObjectsByType('PopeHat', 0).forEach(function (element) {
      _this.sceneRef.enemyHandler.add(element.x * 2, element.y * 2, 1);
    });
    this.tileLayer.forEachTile(function (tile) {
      if (tile.index === 66) {
        // const x = tile.getCenterX();
        // const y = tile.getCenterY();
        var x = tile.x * 32; // times 16 times 2

        var y = tile.y * 32; // console.log(x, y);

        var rect = _this.sceneRef.add.zone(x + 12, y - 2, 10, 10);

        _this.deadlyGroup.add(rect);
      }
    });
    this.tileLayer.setCollisionByExclusion([-1]); // map.setCollisionBetween(1, 999, true, 'collisionLayer');
  };

  MapHandler.prototype.init = function () {
    console.log('init map'); // player collide with level

    this.colliders.push(this.sceneRef.physics.add.collider(this.tileLayer, this.sceneRef.player.sprite, null, null, null)); // level collide with player bullets

    this.colliders.push(this.sceneRef.physics.add.collider(this.tileLayer, this.sceneRef.player.knifeManager.bullets, this.sceneRef.player.stopKnife, null)); // player collide with level harmful

    this.colliders.push(this.sceneRef.physics.add.collider(this.deadlyGroup, this.sceneRef.player.sprite, this.playerDeadlyCollide.bind(this), null, null)); // enemies collide with level

    this.colliders.push(this.sceneRef.physics.add.collider(this.tileLayer, this.sceneRef.enemyHandler.enemyCollideLevelGroup, null, null));
    this.colliders.push(this.sceneRef.physics.add.collider(this.tileLayer, this.sceneRef.enemyHandler.sacreficeGroup, null, null)); // enemies collides with player bullets

    this.colliders.push(this.sceneRef.physics.add.collider(this.sceneRef.enemyHandler.enemyGroup, this.sceneRef.player.knifeManager.bullets, this.sceneRef.enemyHandler.onHit, null)); // enemies collides with player

    this.colliders.push(this.sceneRef.physics.add.collider(this.sceneRef.enemyHandler.enemyCollidePlayerGroup, this.sceneRef.player.sprite, this.playerDeadlyCollide.bind(this), null, null));
    this.colliders.push(this.sceneRef.physics.add.collider(this.sceneRef.player.knifeManager.bullets, this.sceneRef.player.sprite, function (player, bullet) {
      bullet.destroy();
    }, null));
    this.colliders.push(this.sceneRef.physics.add.overlap(this.sceneRef.player.sprite, this.sceneRef.enemyHandler.sacreficeGroup, this.sceneRef.player.sacrefice, null));

    for (var _i = 0, _a = this.sceneRef.enemyHandler.enemys; _i < _a.length; _i++) {
      var enemy = _a[_i];

      if (enemy.fireManager) {
        this.sceneRef.physics.add.collider(this.tileLayer, enemy.fireManager.bullets, function (bullet, tile) {
          bullet.destroy();
        }, null);
        this.sceneRef.physics.add.collider(this.sceneRef.player.sprite, enemy.fireManager.bullets, function (playerSprite, bullet) {
          bullet.destroy();
          playerSprite.scene.player.takeDamage();
        }, null);
      }
    }

    this.reload();
  }; // is point on a solid tile


  MapHandler.prototype.collideAtPoint = function (x, y) {
    var possibleTile = this.map.getTileAt(Math.floor(x / 32), Math.floor(y / 32), 1);
    return possibleTile ? possibleTile.index > -1 : true;
  };

  MapHandler.prototype.reload = function () {
    var sp = this.findObjectsByType('SpawnPoint', 0)[0];
    this.spawnpoint.x = sp.x * 2;
    this.spawnpoint.y = sp.y * 2; // map is saved in 1x scale

    console.log('setting player to spawnpoint: ', this.spawnpoint);
    this.sceneRef.player.sprite.setX(this.spawnpoint.x);
    this.sceneRef.player.sprite.setY(this.spawnpoint.y);
  };

  MapHandler.prototype.nextMap = function () {
    this.currentMap++;

    if (this.currentMap > this.maxMap) {
      this.currentMap = 1;
      this.sceneRef.scene.start('WinScene');
      return;
    }

    this.create();
    this.removeColliders();
    this.init();
  };

  MapHandler.prototype.playerDeadlyCollide = function (player, object) {
    this.nextMap();
    console.log('playerDeadlyCollide', player, object);
    this.reload();
    player.body.setVelocityX(0);
    player.body.setVelocityY(0); // player.anims.play('hurt');

    this.sceneRef.player.died();
  }; // find objects in a Tiled objectlayer of a "type"


  MapHandler.prototype.findObjectsByType = function (type, layer) {
    var result = new Array();
    this.map.objects[layer].objects.forEach(function (element) {
      if (element.type === type) {
        // element.y -= this.map.tileHeight;
        result.push(element);
      }
    });
    return result;
  };

  MapHandler.prototype.removeColliders = function () {
    for (var _i = 0, _a = this.colliders; _i < _a.length; _i++) {
      var collider = _a[_i];
      this.sceneRef.physics.world.removeCollider(collider);
    }
  };

  return MapHandler;
}();

exports.default = MapHandler;

/***/ }),

/***/ 1084:
/*!**************************************!*\
  !*** ./src/handlers/EnemyHandler.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var popehat_1 = __importDefault(__webpack_require__(/*! ../characters/popehat */ 1085));

var priest_1 = __importDefault(__webpack_require__(/*! ../characters/priest */ 1086));

var EnemyHandler =
/** @class */
function () {
  function EnemyHandler(scene) {
    this.scene = scene;
    this.enemys = [];
    this.sceneRef = scene;
  }

  EnemyHandler.prototype.create = function () {
    this.sacreficeGroup = this.scene.physics.add.group();
    this.enemyGroup = this.scene.physics.add.group();
    this.enemyCollideLevelGroup = this.scene.physics.add.group();
    this.enemyCollidePlayerGroup = this.scene.physics.add.group();
  };

  EnemyHandler.prototype.update = function (time, delta) {
    this.sceneRef.physics.world.wrap(this.enemys, 0);

    for (var _i = 0, _a = this.enemys; _i < _a.length; _i++) {
      var enemy = _a[_i];
      enemy.update(time, delta);
    }
  };

  EnemyHandler.prototype.addSacrefice = function (x, y, right) {
    var sprite = this.scene.physics.add.sprite(x, y, 'priest');
    ;
    sprite.setScale(2);
    sprite.setDepth(5);
    sprite.flipX = right;
    sprite.anims.play('sacreficepose', true);
    this.sacreficeGroup.add(sprite);
  };

  EnemyHandler.prototype.add = function (x, y, type) {
    var enemy;

    switch (type) {
      case 0:
        {
          enemy = new priest_1.default(x, y, this.scene);
          this.enemyCollideLevelGroup.add(enemy.sprite);
          break;
        }

      case 1:
        {
          enemy = new popehat_1.default(x, y, this.scene);
          this.enemyCollidePlayerGroup.add(enemy.sprite);
          break;
        }

      default:
        {
          console.log('NO ENEMY WITH TYPE ', type);
        }
    }

    this.enemyGroup.add(enemy.sprite);
    this.enemys.push(enemy);
  };

  EnemyHandler.prototype.remove = function (enemy) {
    this.enemys.splice(this.enemys.indexOf(enemy), 1);
  };

  EnemyHandler.prototype.removeAll = function () {
    // clear groups aswell or
    this.enemys.forEach(function (enemy) {
      enemy.sprite.destroy();
    });
    console.log(this.enemyGroup);
    this.enemys = [];
  };

  EnemyHandler.prototype.onTurn = function (enemyCollider, tile) {
    var enemyToTurn;

    for (var _i = 0, _a = enemyCollider.scene.enemyHandler.enemys; _i < _a.length; _i++) {
      var enemy = _a[_i];

      if (enemy.collider === enemyCollider) {
        enemyToTurn = enemy;
      }
    }

    if (enemyToTurn.checkTurn) {
      enemyToTurn.checkTurn();
    }
  };

  EnemyHandler.prototype.onHit = function (enemySprite, knife) {
    var enemyToHit;

    for (var _i = 0, _a = enemySprite.scene.enemyHandler.enemys; _i < _a.length; _i++) {
      var enemy = _a[_i];

      if (enemy.sprite === enemySprite) {
        enemyToHit = enemy;
      }
    }

    enemyToHit.takeDamage();
    knife.setAccelerationY(600);
  };

  return EnemyHandler;
}();

exports.default = EnemyHandler;

/***/ }),

/***/ 1085:
/*!***********************************!*\
  !*** ./src/characters/popehat.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var enemy_1 = __importDefault(__webpack_require__(/*! ./enemy */ 436));

var Popehat =
/** @class */
function (_super) {
  __extends(Popehat, _super);

  function Popehat(x, y, scene) {
    var _this = _super.call(this, x, y, 'popehat', scene) || this;

    _this.sprite.anims.play('flying', true);

    _this.sprite.body.setAllowGravity(false);

    _this.flyingsound = _this.scene.sound.add('popehat_flying', {
      loop: true,
      volume: 0.2
    });

    _this.flyingsound.play('', 0, 1, true);

    var particles = scene.add.particles('cross');
    _this.emitter = particles.createEmitter({
      speed: 300,
      scale: {
        start: 1,
        end: 0
      },
      blendMode: 'ADD',
      follow: _this.sprite
    }); // this.emitter.setDepth(1000);

    _this.emitter.startFollow(_this.sprite);

    return _this;
  }

  Popehat.prototype.update = function (time, delta) {
    // console.log( this.scene.player.sprite.body.center);
    // this.scene.physics.accelerateToObject(this.sprite, this.scene.player.sprite, 11, 100);
    this.scene.physics.moveToObject(this.sprite, this.scene.player.sprite.body.center, 48);
  };

  Popehat.prototype.onDeath = function () {};

  return Popehat;
}(enemy_1.default);

exports.default = Popehat;

/***/ }),

/***/ 1086:
/*!**********************************!*\
  !*** ./src/characters/priest.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var enemy_1 = __importDefault(__webpack_require__(/*! ./enemy */ 436));

var BulletManager_1 = __importDefault(__webpack_require__(/*! ../handlers/BulletManager */ 435));

var Priest =
/** @class */
function (_super) {
  __extends(Priest, _super);

  function Priest(x, y, scene) {
    var _this = _super.call(this, x, y, 'priest', scene) || this;

    _this.turnRight = Math.round(Math.random()) == 0 ? false : true;
    _this.doTurn = false;
    _this.turnCd = 100;
    _this.fireCd = 1500;
    _this.fireing = 0;
    _this.paralyzed = false;
    _this.fireManager = new BulletManager_1.default(_this.scene, 'cross', 5, false, 3000, {
      x: 12,
      y: 12,
      width: 10,
      height: 6
    }, _this.onFire, _this);
    _this.pew = _this.scene.sound.add('priest_fire', {
      loop: false,
      volume: 0.4
    });
    _this.pew.volume = 0.4;
    return _this;
  }

  Priest.prototype.update = function (time, delta) {
    this.fireing -= delta;
    this.turnCd -= delta;
    var colliderPoint;
    var colliderPointDir;

    if (this.doTurn && this.turnCd <= 0) {
      this.turnRight = !this.turnRight;
      this.turnCd = 100;
    }

    if (this.fireing < 0) {
      if (this.turnRight) {
        this.sprite.anims.play('walk', true);
        this.sprite.body.setVelocityX(50);
        colliderPoint = [this.sprite.x + 15, this.sprite.y + 32];
        colliderPointDir = [this.sprite.x + 18, this.sprite.y];
        this.sprite.flipX = true;
      } else {
        this.sprite.anims.play('walk', true);
        this.sprite.body.setVelocityX(-50);
        colliderPoint = [this.sprite.x - 15, this.sprite.y + 32];
        colliderPointDir = [this.sprite.x - 18, this.sprite.y];
        this.sprite.flipX = false;
      }

      if (!this.scene.map.collideAtPoint(colliderPoint[0], colliderPoint[1]) || this.scene.map.collideAtPoint(colliderPointDir[0], colliderPointDir[1])) {
        this.doTurn = true;
      } else {
        this.doTurn = false;
      }
    } else {
      this.sprite.body.setVelocityX(0);
    }

    this.fireManager.update(delta);
    var firecd = this.fireManager.fire(this.sprite.x + 10, this.sprite.y - 6, this.turnRight);

    if (firecd < 300) {
      this.fireing = 600;
      this.sprite.anims.play('crossfire', true);
    }
  };

  Priest.prototype.onDeath = function () {
    this.scene.enemyHandler.addSacrefice(this.sprite.x, this.sprite.y, this.turnRight);
    this.sprite.destroy();
    this.scene.enemyHandler.remove(this);
  };

  Priest.prototype.onFire = function (context) {
    context.pew.play();
  };

  return Priest;
}(enemy_1.default);

exports.default = Priest;

/***/ }),

/***/ 1087:
/*!***********************************!*\
  !*** ./src/handlers/UIHandler.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var uisword_1 = __importDefault(__webpack_require__(/*! ../characters/uisword */ 1088));

var uisoul_1 = __importDefault(__webpack_require__(/*! ../characters/uisoul */ 1089));

var uiheart_1 = __importDefault(__webpack_require__(/*! ../characters/uiheart */ 1090));

var UIHandler =
/** @class */
function () {
  function UIHandler(scene) {
    this.scene = scene;
    this.numSoulsToGet = 7;
    this.numBulletsPlayerHas = 5;
    this.numHealth = 3;
    this.sceneRef = scene;
  }

  UIHandler.prototype.create = function () {
    this.uiHudGroup = this.scene.physics.add.staticGroup();

    for (var i = 0; i < this.numBulletsPlayerHas; i++) {
      var hudSword = new uisword_1.default(i * 30 + 100, 650, this.scene);
      this.uiHudGroup.add(hudSword.sprite);
    }

    for (var i = 0; i < this.numSoulsToGet; i++) {
      var hudSoul = new uisoul_1.default(i * 30 + 300, 650, this.scene);
      this.uiHudGroup.add(hudSoul.sprite);
    }

    for (var i = 0; i < this.numHealth; i++) {
      var hudHeart = new uiheart_1.default(i * 30 + 500, 650, this.scene);
      this.uiHudGroup.add(hudHeart.sprite);
    }
  };

  UIHandler.prototype.update = function (time, delta) {
    /*this.sceneRef.physics.world.wrap(this.enemys, 0);
          for (let enemy of this.enemys) {
      enemy.update(time, delta);
    }*/
  };

  return UIHandler;
}();

exports.default = UIHandler;

/***/ }),

/***/ 1088:
/*!***********************************!*\
  !*** ./src/characters/uisword.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var uigadget_1 = __importDefault(__webpack_require__(/*! ./uigadget */ 210));

var UISword =
/** @class */
function (_super) {
  __extends(UISword, _super);

  function UISword(x, y, scene) {
    return _super.call(this, x, y, 'knife', scene) || this;
  }

  UISword.prototype.update = function (time, delta) {};

  return UISword;
}(uigadget_1.default);

exports.default = UISword;

/***/ }),

/***/ 1089:
/*!**********************************!*\
  !*** ./src/characters/uisoul.ts ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var uigadget_1 = __importDefault(__webpack_require__(/*! ./uigadget */ 210));

var UISoul =
/** @class */
function (_super) {
  __extends(UISoul, _super);

  function UISoul(x, y, scene) {
    return _super.call(this, x, y, 'cross', scene) || this;
  }

  UISoul.prototype.update = function (time, delta) {};

  return UISoul;
}(uigadget_1.default);

exports.default = UISoul;

/***/ }),

/***/ 1090:
/*!***********************************!*\
  !*** ./src/characters/uiheart.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var uigadget_1 = __importDefault(__webpack_require__(/*! ./uigadget */ 210));

var UIHeart =
/** @class */
function (_super) {
  __extends(UIHeart, _super);

  function UIHeart(x, y, scene) {
    return _super.call(this, x, y, 'knife', scene) || this;
  }

  UIHeart.prototype.update = function (time, delta) {};

  return UIHeart;
}(uigadget_1.default);

exports.default = UIHeart;

/***/ }),

/***/ 1091:
/*!*************************************!*\
  !*** ./src/scenes/GameOverScene.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameOverScene =
/** @class */
function (_super) {
  __extends(GameOverScene, _super);

  function GameOverScene() {
    return _super.call(this, {
      key: 'GameOverScene'
    }) || this;
  }

  GameOverScene.prototype.preload = function () {
    this.music = this.sound.add('gameoveraudio', {
      loop: true
    });
    this.gameoveraudio = this.sound.add('gameover_voice', {
      loop: false
    });
  };

  GameOverScene.prototype.create = function () {
    var _this = this;

    this.add.image(0, 0, 'background_gameover').setOrigin(0, 0);
    this.gameoveraudio.on('ended', function (sound) {
      this.music.play('', 0, 1, true);
    }, this);
    this.gameoveraudio.play('', 0, 1, true);
    this.add.zone(0, 0, 960, 720).setName('StartGame').setInteractive();
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.input.on('gameobjectdown', function (pointer, gameObject) {
      if (gameObject.name == 'StartGame') {
        document.getElementsByTagName('canvas')[0].style.cursor = "default";

        _this.music.stop();

        _this.scene.start('GameScene');
      }
    });
    this.input.on('pointerover', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "crosshair";
    });
    this.input.on('pointerout', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "default";
    });
  };

  GameOverScene.prototype.playMusic = function (sound) {
    this.music.play('', 0, 1, true);
  };

  GameOverScene.prototype.update = function (time, delta) {
    if (this.space.isDown) {
      this.music.stop();
      this.scene.start('GameScene');
    }
  };

  return GameOverScene;
}(Phaser.Scene);

exports.default = GameOverScene;

/***/ }),

/***/ 1092:
/*!********************************!*\
  !*** ./src/scenes/WinScene.ts ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WinScene =
/** @class */
function (_super) {
  __extends(WinScene, _super);

  function WinScene() {
    return _super.call(this, {
      key: 'WinScene'
    }) || this;
  }

  WinScene.prototype.preload = function () {
    this.music = this.sound.add('winaudio', {
      loop: true
    });
    this.winaudio = this.sound.add('win_voice', {
      loop: false
    });
  };

  WinScene.prototype.create = function () {
    var _this = this;

    this.add.image(0, 0, 'background_win').setOrigin(0, 0);
    this.winaudio.on('ended', function (sound) {
      this.music.play('', 0, 1, true);
    }, this);
    this.winaudio.play('', 0, 1, true);
    this.add.zone(0, 0, 960, 720).setName('StartGame').setInteractive();
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.input.on('gameobjectdown', function (pointer, gameObject) {
      if (gameObject.name == 'StartGame') {
        document.getElementsByTagName('canvas')[0].style.cursor = "default";

        _this.music.stop();

        _this.scene.start('GameScene');
      }
    });
    this.input.on('pointerover', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "crosshair";
    });
    this.input.on('pointerout', function (event) {
      document.getElementsByTagName('canvas')[0].style.cursor = "default";
    });
  };

  WinScene.prototype.update = function (time, delta) {
    if (this.space.isDown) {
      this.music.stop();
      this.scene.start('GameScene');
    }
  };

  return WinScene;
}(Phaser.Scene);

exports.default = WinScene;

/***/ }),

/***/ 210:
/*!************************************!*\
  !*** ./src/characters/uigadget.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var UiGadget =
/** @class */
function () {
  function UiGadget(x, y, texture, scene) {
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.sprite = this.scene.add.sprite(x, y, texture);
    this.sprite.setScale(2);
    this.sprite.setDepth(5);
  }

  return UiGadget;
}();

exports.UiGadget = UiGadget;
exports.default = UiGadget;

/***/ }),

/***/ 435:
/*!***************************************!*\
  !*** ./src/handlers/BulletManager.ts ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var BulletManager =
/** @class */
function () {
  function BulletManager(scene, texture, maxSize, angle, cd, collisionbox, onFire, context) {
    this.scene = scene;
    this.texture = texture;
    this.angle = angle;
    this.onFire = onFire;
    this.context = context;
    this.cd = 100;
    this.firecd = 0;
    this.bullets = scene.physics.add.group({
      maxSize: maxSize,
      runChildUpdate: true
    });

    if (cd) {
      this.cd = cd;
      this.firecd = Math.floor(Math.random() * cd);
    }

    if (collisionbox) {
      this.collisionbox = collisionbox;
    }

    this.sceneRef = scene;
  }

  BulletManager.prototype.update = function (delta) {
    this.sceneRef.physics.world.wrap(this.bullets, 0);

    if (this.firecd > 0) {
      this.firecd -= delta;
    }
  };

  BulletManager.prototype.fire = function (x, y, right) {
    if (this.firecd <= 0) {
      var bullet = this.bullets.get();

      if (bullet) {
        bullet.x = x;
        bullet.y = y;
        bullet.setTexture(this.texture);
        bullet.body.setAllowGravity(false);
        bullet.setScale(2);
        bullet.setDepth(10);
        bullet.setBounceX(0);
        bullet.setBounceY(0);

        if (right) {
          bullet.setVelocityX(400);

          if (this.angle) {
            bullet.angle = 90;
          }
        } else {
          bullet.setVelocityX(-400);

          if (this.angle) {
            bullet.angle = 270;
          }
        }

        if (this.collisionbox) {
          bullet.setSize(this.collisionbox.width, this.collisionbox.height, true);
          bullet.setOffset(this.collisionbox.x, this.collisionbox.y);
        }

        if (this.onFire) {
          this.onFire(this.context);
        }

        this.firecd = this.cd;
      }
    }

    return this.firecd;
  };

  return BulletManager;
}();

exports.default = BulletManager;

/***/ }),

/***/ 436:
/*!*********************************!*\
  !*** ./src/characters/enemy.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Enemy =
/** @class */
function () {
  function Enemy(x, y, texture, scene) {
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.hp = 1;
    this.sprite = this.scene.physics.add.sprite(x, y, texture);
    this.sprite.setScale(2);
    this.sprite.setDepth(5);
  }

  Enemy.prototype.takeDamage = function () {
    this.hp--;

    if (this.hp <= 0) {
      this.onDeath();
    }
  };

  return Enemy;
}();

exports.default = Enemy;

/***/ }),

/***/ 437:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Project\LudumDare\ld43\src\main.ts */438);


/***/ }),

/***/ 438:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! phaser */ 211);

var LoadScene_1 = __importDefault(__webpack_require__(/*! ./scenes/LoadScene */ 1079));

var StartScene_1 = __importDefault(__webpack_require__(/*! ./scenes/StartScene */ 1080));

var GameScene_1 = __importDefault(__webpack_require__(/*! ./scenes/GameScene */ 1081));

var GameOverScene_1 = __importDefault(__webpack_require__(/*! ./scenes/GameOverScene */ 1091));

var WinScene_1 = __importDefault(__webpack_require__(/*! ./scenes/WinScene */ 1092));

var config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 960,
  height: 720,
  resolution: 1,
  pixelArt: true,
  backgroundColor: "#333",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 700
      },
      // debug: true
      debug: false
    }
  },
  scene: [LoadScene_1.default, StartScene_1.default, GameScene_1.default, GameOverScene_1.default, WinScene_1.default]
};
new Phaser.Game(config);

/***/ })

},[437]);
//# sourceMappingURL=bundle.js.map