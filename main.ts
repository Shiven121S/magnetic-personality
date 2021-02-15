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
        color.FadeToWhite.startScreenEffect(700)
        timer.after(1000, function () {
            tiles.setTilemap(tilemap`level1`)
            color.clearFadeEffect()
        })
    }
})
let textSprite = textsprite.create("MAGNETIC PERSONALITY", 0, 1)
textSprite.setPosition(70, 16)
blockMenu.showMenu(["Play", "Controls"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
scene.setBackgroundColor(15)
