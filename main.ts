let count = 0
input.onButtonPressed(Button.A, function () {
    while (count >= 0) {
        basic.showNumber(count)
        count += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        count = 3
        while (count > -1) {
            basic.showNumber(count)
            count += -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (count >= 0) {
        basic.showNumber(count)
        count += 10
    }
})
