import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  name: string = 'Shailesh';

  parentMessage: string = '';

  receiveMessage(message: string): void {

    this.parentMessage = message;

  }

}