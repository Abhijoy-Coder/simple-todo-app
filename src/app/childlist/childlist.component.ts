import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyNumType } from '../models/mynumtype.model';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent {
  @Input() numLengthStatus!: boolean;
  @Input() MyNumsCollection: MyNumType[] = [];
  @Output() itemNumId: EventEmitter<string> = new EventEmitter<string>();

  SendNumIDToParent(numID: string) {
    this.itemNumId.emit(numID);
  }
}
