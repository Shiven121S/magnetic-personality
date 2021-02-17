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
        game.showLongText("Move with WASD. Shoot with Z or SPACE. Collect red magnets to become stronger. Destroy all enemies in the level to continue.", DialogLayout.Center)
    } else if (option == "Play") {
        color.setColor(11, color.rgb(211, 211, 211))
        color.setColor(6, color.rgb(169, 169, 169))
        color.FadeToWhite.startScreenEffect(700)
        timer.after(1000, function () {
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            mySprite = sprites.create(img`
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            tiles.setTilemap(tilemap`level1`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
            scene.cameraFollowSprite(mySprite)
            controller.moveSprite(mySprite)
            color.clearFadeEffect()
        })
    }
})
let mySprite: Sprite = null
let textSprite = textsprite.create("MAGNETIC KNIGHT", 0, 1)
textSprite.setPosition(70, 16)
blockMenu.showMenu(["Play", "Controls"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
scene.setBackgroundColor(15)
