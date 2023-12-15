import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  answer="Your answer will appear here"

  handleClick(option?: string){
    console.log(option)
    if(option=="No")
      this.answer="Learn basics of angular and typescript"
    else
      this.answer="Lets build a project!"
  }
  constructor() {}

}
