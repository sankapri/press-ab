input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        basic.clearScreen()
        mode = 0
    }
})
let mode = 0
mode = 0
basic.forever(function () {
    while (mode == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    while (mode == 1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
