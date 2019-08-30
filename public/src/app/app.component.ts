import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ninja Gold';
  gameOn: Boolean;
  gold: number;
  turn: number;
  end: Boolean;
  activity: Array<String>;
  constructor(private _httpService: HttpService){};
  ngOnInit(){
    this.gameOn = false;
    this.end = false;
  };
  startNew(){
    this.gameOn = true;
    this.end = false;
    this.gold = 0;
    this.turn = 0;
    this.activity = [];
  }
  farmGold(){
    let rand = Math.floor(Math.random() * 20);
    this.gold += rand;
    this.turn += 1;
    this.activity.push(`You earned ${rand} from the farm`);
    if(this.turn > 20){
      this.gameOn = false;
      this.end = true;
    }
  }
  caveGold(){
    let rand = Math.floor(Math.random() * 6)+ 5;
    this.gold += rand;
    this.turn += 1;
    this.activity.push(`You earned ${rand} from the cave`);
    if(this.turn > 20){
      this.gameOn = false;
      this.end = true;
    }
  }
  houseGold(){
    let rand = Math.floor(Math.random() * 4)+ 2;
    this.gold += rand;
    this.turn += 1;
    this.activity.push(`You earned ${rand} from the house`);
    if(this.turn > 20){
      this.gameOn = false;
      this.end = true;
    }
  }
  casinoGold(){
    let rand = Math.floor(Math.random() * 100)-50;
    this.gold += rand;
    this.turn += 1;
    this.activity.push(`You earned ${rand} from the casino`);
    if(this.turn > 20){
      this.gameOn = false;
      this.end = true;
    }
  }
}
