var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//variables
var player;
var orbR;
var gems;
var bombs;
var platforms;
var movingPlatform;
var cursors;
var space;
var score = 0;
var maxLives = 3;
var lives = 3;
var aid;
var hearts = [];
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
//assets
{
    this.load.image('sky', 'assets/images/background.png');
    this.load.image('ground', 'assets/sprites/platform.png');
    this.load.image('orbR', 'assets/sprites/orb-red.png');
    this.load.image('gem', 'assets/sprites/orb-blue.png');
    this.load.image('life', 'assets/sprites/heart.png');
    this.load.image('health', 'assets/sprites/firstaid.png');
    this.load.image('bomb', 'assets/sprites/mine.png');
    this.load.spritesheet('dude', 'assets/sprites/mummy37X45.png', { frameWidth: 37, frameHeight: 45 });
}

function create ()
{
    //background
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    //base
    platforms.create(400, 568, 'ground')
        .setScale(2)
        .refreshBody();
    //platforms and moving platforms
    platforms.create(500, 400, 'ground')
        .setScale(0.4)
        .refreshBody();
    platforms.create(150, 250, 'ground')
        .setScale(0.7)
        .refreshBody();

    movingPlatform1 = this.physics.add.image(500, 100, 'ground')
        .setScale(0.7);
    movingPlatform1.setImmovable(true);
    movingPlatform1.body.allowGravity = false;
    movingPlatform1.setCollideWorldBounds(true);
    movingPlatform1.setBounce(1, 0);
    movingPlatform1.setVelocityX(75);

    movingPlatform2 = this.physics.add.image(450, 300, 'ground')
        .setScale(0.5);
    movingPlatform2.setImmovable(true);
    movingPlatform2.body.allowGravity = false;
    movingPlatform2.setCollideWorldBounds(true);
    movingPlatform2.setBounce(1, 0);
    movingPlatform2.setVelocityX(50);

    //intructions text
    this.add.text(250, 20, 'GET AS MANY POINTS AS YOU CAN', {
        fontSize: '24px',
        fill: '#000000',
    });

    //player character
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setScale(1.5);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 10
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    //movement
    cursors = this.input.keyboard.createCursorKeys();
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //collectible red orb
    orbR = this.physics.add.group({
        key: 'orbR',
        repeat: 5,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    orbR.children.iterate(function (child) {
        child.setX(Phaser.Math.Between(50,750));
        child.setY(Phaser.Math.Between(0,400));
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.9));
        child.setCollideWorldBounds(true);
        child.setScale(2);
    });

    //collectible blue orb
    gems = this.physics.add.group({
        key: 'gem',
        repeat: 2,
        setXY: { x: 12, y: 0, stepX: 70}
    });

    gems.children.iterate(function (child){
        child.setX(Phaser.Math.Between(50,750));
        child.setY(Phaser.Math.Between(0,400));
        child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.5));
        child.setCollideWorldBounds(true);
    });

    //enemy
    bombs = this.physics.add.group();

    //scoring and lives system
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize:'32px', fill: '#000'});
    for (let i = 0; i < lives; i++)
    {
        let heart = this.add.image(700 + (i * 30), 30, 'life');
        heart.setScale(2);
        hearts.push(heart);
    }

    spawnAid.call(this);

    //collisions
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(orbR, platforms);
    this.physics.add.collider(gems, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, movingPlatform1);
    this.physics.add.collider(orbR, movingPlatform1);
    this.physics.add.collider(gems, movingPlatform1);
    this.physics.add.collider(bombs, movingPlatform1);
    this.physics.add.collider(player, movingPlatform2);
    this.physics.add.collider(orbR, movingPlatform2);
    this.physics.add.collider(gems, movingPlatform2);
    this.physics.add.collider(bombs, movingPlatform2);

    this.physics.add.overlap(player, orbR, collectOrbs, null, this);
    this.physics.add.overlap(player, gems, collectGems, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
}

function update ()
{
    //character movement
    if (cursors.left.isDown)
    {
        player.setFlipX(true);
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setFlipX(false);
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);    
        player.anims.play('turn');
    }
    if (space.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

function collectOrbs (player, orb)
{
    //red orb interactions
    orb.disableBody(true, true);
    score += 5;
    scoreText.setText('Score: ' + score);

    if (orbR.countActive(true) === 0)
    {
        orbR.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

function collectGems (player, gem)
{
    //blue orb interactions
    gem.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    if(gems.countActive(true) === 0)
    {
        gems.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

function hitBomb (player, bomb)
{
    //bomb interactions/decreasing lives
    bomb.disableBody(true, true);
    lives--;

    let lostHeart = hearts.pop();
    if (lostHeart)
    {
        lostHeart.destroy();
    }

    player.setTint(0xff0000);
    setTimeout(() => {
        player.clearTint();
    }, 200);
    
    if (lives <= 0)
    {
        this.physics.pause();
        player.anims.play('turn');
        gameOver = true;

        this.add.text(250, 250, 'GAME OVER', {
            fontSize: '64px',
            fill: '#ff0000'
        });
    }
}

function spawnAid ()
{
    //first aid kit appear
    if (Phaser.Math.Between(1, 100) > 20)
    {
        this.time.delayedCall(
            Phaser.Math.Between(7000, 10000),
            spawnAid,
            [],
            this
        );
        return;
    }
    if (aid)
    {
        aid.destroy();
    }

    var x = Phaser.Math.Between(50, 750);
    var y = Phaser.Math.Between(50, 300);

    aid = this.physics.add.image(x, y, 'health');
    aid.setBounce(0.3);
    aid.setCollideWorldBounds(true);

    this.physics.add.collider(aid, platforms);
    this.physics.add.collider(aid, movingPlatform);
    
    this.physics.add.overlap(player, aid, collectAid, null, this);

    this.time.delayedCall(
        Phaser.Math.Between(7000, 10000),
        spawnAid,
        [],
        this
    );
}

function collectAid (player, aid)
{
    //first aid kid
    aid.destroy();

    if (lives < maxLives)
    {
        lives++;
        let heart = this.add.image(700 + ((lives - 1) * 30), 30, 'life');
        heart.setScale(2);
        hearts.push(heart);
    }

    this.time.delayedCall(
        Phaser.Math.Between(5000, 12000),
        spawnAid,
        [],
        this
    );
}
