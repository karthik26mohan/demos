import { Component, OnInit } from '@angular/core';
import { ThrowingAvenger, UnarmedAvenger, ShootingAvenger } from './avengers.model';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.scss']
})
export class AvengersComponent implements OnInit {
  captainAmerica: ThrowingAvenger;
  blackWidow: UnarmedAvenger;
  ironMan: ShootingAvenger;
  fightList: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.captainAmerica = new ThrowingAvenger('Captain America', 'Shield');
    this.fightList.push(this.captainAmerica.fight());

    this.blackWidow = new UnarmedAvenger('Black Widow');
    this.fightList.push(this.blackWidow.fight());

    this.ironMan = new ShootingAvenger('Ironman', 'Repulsor Rays');
    this.fightList.push(this.ironMan.fight());

  }

}
