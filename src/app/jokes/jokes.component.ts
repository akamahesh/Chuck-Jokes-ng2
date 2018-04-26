import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JOKES } from '../mock_data';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})

export class JokesComponent implements OnInit {
  jokes = JOKES;
  chuckJoke : Joke = {
    iconUrl : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id : "v04aFGwkRvyDfL65MsYSaQ",
    url: "https://api.chucknorris.io/jokes/v04aFGwkRvyDfL65MsYSaQ",
    value : "When Chuck Norris kills you, the government fully covers all funeral expenses, as ordered by the  UN. It is the only truly good thing they have ever done."
  }
  constructor() { }

  ngOnInit() {
  }
  counter=0;
  onRefresh(){
    if(this.counter>=JOKES.length )
      this.counter = 0;
    this.chuckJoke = this.jokes[this.counter++];
  }

}
