radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Loud, function () {
    if (100 < input.soundLevel()) {
        basic.showIcon(IconNames.EigthNote)
        music.playMelody("D A G F E D A C5 ", 120)
        music.playMelody("B C5 - A B - C5 C5 ", 120)
        basic.clearScreen()
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
