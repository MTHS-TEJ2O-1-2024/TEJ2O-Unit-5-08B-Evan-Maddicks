/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Nov 2024
 * This program will essentially act like a roomba
*/

//variables
let distanceToObject = PingUnit.Centimeters

//setup
basic.showIcon(IconNames.Happy)

// loop
input.onButtonPressed(Button.A, function () { 
    distanceToObject = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters)
    if (distanceToObject > 10) {
        //move car forward
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(5,48)
        basic.pause(250)
        sonar.ping
    } else {
        //move car back and turn
        robotbit.StpCarMove(-10, 48)
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)}
    })
