import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-two',
  templateUrl: './popup-two.component.html',
  styleUrls: ['./popup-two.component.scss']
})

export class PopupTwoComponent implements OnInit {

  @Input() visible: boolean;

  @Input() popupContent: any;

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eventCloseModal() {
    this.close.emit(false);
  }

}
