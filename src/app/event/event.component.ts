const events = require("../events.js")
const cargo = require("../cargo")
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any[]
  event: any;
  carogs: any[];
  cargo: any;
  burstRoll: number
  damage: number
  spray: number
  cargoRoll: number
  cargoRolls: any[]
  constructor() { }

  ngOnInit(): void {
    this.events = events
    this.event = {
      number: 0,
      text: "roll an event"
    }
    this.burstRoll = 0

  }
  getRandomEvent() {
    let roll = Math.floor(Math.random() * 100);
    this.event = {
      number: events[roll].index,
      text: events[roll].text,
    }
  }
  calculateBurst(str, caliber, ammo) {
    let negative = false;
    console.log(str)
    console.log(caliber)
    if (str < 0) {
      negative = true;
      str = str * -1
    }
    this.burstRoll = ((.5 + (.1 * (str - caliber))) * 10) / 10

    this.damage = (ammo * this.burstRoll)
    this.spray = (1 / this.burstRoll);



  }
  roll(number, sides) {
    let roll = 0
    for (let i = 0; i < number; i++) {
      roll = roll + Math.floor(Math.random()*sides)
    }
    return roll
  }
  getCargo( numRolls ) {
    this.cargoRolls = [];
    for (let i = 0; i < numRolls; i++) {
      let roll = this.roll(1, 100)
      console.log(roll)
      roll = cargo[roll]
      console.log(roll)
      this.cargoRolls.push(roll)
    }
  }
}
