import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() userName: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {

    this.messageEvent.emit(
      'Hello Parent! Message received from Child.'
    );

  }

}