sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile35`)
    while (GameStarted) {
        timer.background(function () {
            if (mySprite.x - sprite.x <= 20) {
                sprite.follow(mySprite)
            }
        })
    }
})
function SetDirection () {
    if (mySprite.vx > 0 && mySprite.vy == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f f f . . 
            . . . . . f 1 1 1 1 1 f 1 f . . 
            . . . . f 1 f f f f f f f f . . 
            . . . f 1 f . . . . . . . . . . 
            . . . f 1 f . . . . . . . . . . 
            . . . f 1 f . . . . . . . . . . 
            . . . . f 1 f f f f f f f f . . 
            . . . . . f 1 1 1 1 1 f 1 f . . 
            . . . . . . f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "r"
    } else if (mySprite.vx == 0 && mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f . . . f f f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f f f . . . f f f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . . f 1 1 1 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "u"
    } else if (mySprite.vx < 0 && mySprite.vy == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f . . . . . . 
            . . f 1 f 1 1 1 1 1 f . . . . . 
            . . f f f f f f f f 1 f . . . . 
            . . . . . . . . . . f 1 f . . . 
            . . . . . . . . . . f 1 f . . . 
            . . . . . . . . . . f 1 f . . . 
            . . f f f f f f f f 1 f . . . . 
            . . f 1 f 1 1 1 1 1 f . . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "l"
    } else if (mySprite.vx == 0 && mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 1 1 1 f . . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f f f . . . f f f . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . f f f . . . f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "d"
    } else if (mySprite.vx > 0 && mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . f 1 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 1 f . . . f f . . 
            . . . . . f 1 f . . . f 1 f . . 
            . . . . f 1 f . . . f f f . . . 
            . . . f 1 f . . . f 1 f . . . . 
            . . f 1 f . . . f 1 f . . . . . 
            . . . f 1 f . f 1 f . . . . . . 
            . . . . f 1 f 1 f . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "ru"
    } else if (mySprite.vx > 0 && mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . f 1 f 1 f . . . . . . . 
            . . . f 1 f . f 1 f . . . . . . 
            . . f 1 f . . . f 1 f . . . . . 
            . . . f 1 f . . . f 1 f . . . . 
            . . . . f 1 f . . . f f f . . . 
            . . . . . f 1 f . . . f 1 f . . 
            . . . . . . f 1 f . . . f f . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . f 1 f . . . . . 
            . . . . . . . . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "rd"
    } else if (mySprite.vx < 0 && mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . f f . . . f 1 f . . . . . . 
            . . f 1 f . . . f 1 f . . . . . 
            . . . f f f . . . f 1 f . . . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . . . f 1 f . . . f 1 f . . 
            . . . . . . f 1 f . f 1 f . . . 
            . . . . . . . f 1 f 1 f . . . . 
            . . . . . . . . f 1 f . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "lu"
    } else if (mySprite.vx < 0 && mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . f 1 f . . . . . 
            . . . . . . . f 1 f 1 f . . . . 
            . . . . . . f 1 f . f 1 f . . . 
            . . . . . f 1 f . . . f 1 f . . 
            . . . . f 1 f . . . f 1 f . . . 
            . . . f f f . . . f 1 f . . . . 
            . . f 1 f . . . f 1 f . . . . . 
            . . f f . . . f 1 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        direction = "ld"
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStarted) {
        if (direction == "r") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . f 1 f . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 120, 0)
        } else if (direction == "u") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . f 1 f . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -120)
        } else if (direction == "l") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . f 1 f . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -120, 0)
        } else if (direction == "d") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . . f 1 f . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 120)
        } else if (direction == "ru") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . f 1 f . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 120, -120)
        } else if (direction == "rd") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . f 1 f . . . 
                . . . . . . . . . . f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 120, 120)
        } else if (direction == "lu") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . f 1 f . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -95, -95)
        } else if (direction == "ld") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . f 1 f . . . . . . . . . . 
                . . . f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -120, 120)
        }
    }
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile35`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scene.cameraShake(4, 200)
    timer.background(function () {
        otherSprite.destroy()
    })
    timer.background(function () {
        sprites.changeDataNumberBy(sprite, "Damage", 1)
    })
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Controls") {
        game.setDialogFrame(img`
            b b b b b b b b b b b b b b b 
            b c c c c c c c c c c c c c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            2 1 1 1 1 1 1 1 1 1 1 1 1 c 8 
            2 1 1 1 1 1 1 1 1 1 1 1 1 c 8 
            2 1 1 1 1 1 1 1 1 1 1 1 1 c 8 
            2 1 1 1 1 1 1 1 1 1 1 1 1 c 8 
            2 1 1 1 1 1 1 1 1 1 1 1 1 c 8 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b 1 1 1 1 1 1 1 1 1 1 1 1 c b 
            b b b b b b b b b b b b b b b 
            `)
        game.showLongText("Move with WASD. Shoot with Z or SPACE. Collect red magnets to become stronger. Reach the end of the level to continue. Touching or falling into the black void, ends the game. ", DialogLayout.Center)
    } else if (option == "Play") {
        color.FadeToWhite.startScreenEffect(700)
        timer.after(1000, function () {
            textSprite.destroy()
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f f f . . 
                . . . . . f 1 1 1 1 1 f 1 f . . 
                . . . . f 1 f f f f f f f f . . 
                . . . f 1 f . . . . . . . . . . 
                . . . f 1 f . . . . . . . . . . 
                . . . f 1 f . . . . . . . . . . 
                . . . . f 1 f f f f f f f f . . 
                . . . . . f 1 1 1 1 1 f 1 f . . 
                . . . . . . f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            sprites.setDataNumber(mySprite, "Damage", 1)
            statusbar = statusbars.create(40, 8, StatusBarKind.Health)
            statusbar.positionDirection(CollisionDirection.Top)
            statusbar.setColor(1, 15)
            statusbar.value = 100
            statusbar.max = 100
            statusbar.setBarBorder(2, 12)
            tiles.setTilemap(tilemap`level5`)
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile36`)
            scene.cameraFollowSprite(mySprite)
            for (let index2 = 0; index2 < 4; index2++) {
                MagnetReward = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . f 1 1 f 1 f . . . . . . 
                    . . . f 1 f f f f f . . . . . . 
                    . . . f 1 f . . . . . . . . . . 
                    . . . f 1 f f f f f . . . . . . 
                    . . . . f 1 1 f 1 f . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Food)
            }
            for (let index2 = 0; index2 < 4; index2++) {
                MagnetEnemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f f f f . . 
                    . . . . . f f f f f f f 1 f . . 
                    . . . . f f f f f f f f f f . . 
                    . . . f f f . . . . . . . . . . 
                    . . . f f f . . . . . . . . . . 
                    . . . f f f . . . . . . . . . . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . f f f f f f f 1 f . . 
                    . . . . . . f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
            }
            controller.moveSprite(mySprite, 80, 80)
            color.clearFadeEffect()
            GameStarted = true
        })
    }
})
let MagnetEnemy: Sprite = null
let MagnetReward: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let direction = ""
let mySprite: Sprite = null
let textSprite: TextSprite = null
let GameStarted = false
GameStarted = false
textSprite = textsprite.create("MAGNETIC KNIGHT", 0, 1)
textSprite.setPosition(70, 16)
blockMenu.showMenu(["Play", "Controls"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
scene.setBackgroundColor(15)
game.onUpdate(function () {
    if (GameStarted) {
        SetDirection()
    }
})
