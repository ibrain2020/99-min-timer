input.onButtonPressed(Button.A, function () {
    if (Timer == Adjust) {
        if (Min_setting < 99) {
            Min_setting += 1
        }
    } else {
        if (Timer == Run) {
            Timer = Pause
        } else {
            Timer = Run
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Timer == Adjust) {
        Timer = Stop
        Minutes = Min_setting
        Seconds = 59
    } else {
        basic.clearScreen()
        basic.showString("A")
        Timer = Adjust
    }
})
input.onButtonPressed(Button.B, function () {
    if (Timer == Adjust) {
        if (Min_setting > 1) {
            Min_setting += -1
        }
    } else {
        Minutes = Min_setting
        Seconds = 59
        Timer = Stop
    }
})
let Timer = 0
let Stop = 0
let Run = 0
let Pause = 0
let Adjust = 0
let Seconds = 0
let Minutes = 0
let Min_setting = 0
Min_setting = 10
Minutes = Min_setting
Seconds = 0
let End = 4
Adjust = 3
Pause = 2
Run = 1
Stop = 0
Timer = Stop
basic.showString("Timer")
basic.showString("T")
basic.forever(function () {
    while (Timer == Run) {
        if (Minutes >= 10) {
            for (let index = 0; index < 20; index++) {
                if (Timer == Run) {
                    basic.showNumber(Minutes)
                } else {
                    break;
                }
            }
            if (Timer == Run) {
                Minutes += -1
            }
        } else if (Minutes > 1) {
            for (let index = 0; index < 52; index++) {
                if (Timer == Run) {
                    basic.showNumber(Minutes)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                } else {
                    break;
                }
            }
            if (Timer == Run) {
                Minutes += -1
            }
        } else {
            if (Seconds >= 10) {
                if (Timer == Run) {
                    basic.showNumber(Seconds)
                    Seconds += -3
                    basic.pause(280)
                } else {
                    break;
                }
            } else if (Seconds >= 0) {
                if (Timer == Run) {
                    basic.showNumber(Seconds)
                    basic.pause(350)
                } else {
                    break;
                }
                if (Timer == Run) {
                    Seconds += -1
                }
            } else {
                Timer = End
                Minutes = Min_setting
                Seconds = 59
                basic.clearScreen()
            }
        }
    }
    if (Timer == Adjust) {
        basic.showNumber(Min_setting)
    } else if (Timer == End) {
        basic.showString("End")
    } else if (Timer == Pause) {
        basic.showString("Pause")
    } else if (Timer == Stop) {
        basic.showString("T")
    }
})
