import { Component, DoCheck } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MyNumType } from './models/mynumtype.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Todo App';
  MyNums: MyNumType[] = [];
  numLengthStatus: boolean = true;

  ngDoCheck() {
    if(this.MyNums.length > 0)
    {
      this.numLengthStatus = false; 
    }
    else 
    {
      this.numLengthStatus = true; 
    }
    console.log('The length is {0}', this.MyNums.length);
    console
  }

  generateRandomNumber(num: string) {
    console.log(uuidv4() + ' ' + num);
    this.MyNums.push(new MyNumType(uuidv4(), parseInt(num)));
    console.log(this.MyNums);
  }
  deleteItem(itemID: string) {
    var items = this.MyNums;
    items = items.filter((item) => item.numid != itemID);
    this.MyNums = items;
  }
}
