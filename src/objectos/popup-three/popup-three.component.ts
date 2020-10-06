import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-three',
  templateUrl: './popup-three.component.html',
  styleUrls: ['./popup-three.component.scss']
})

export class PopupThreeComponent implements OnInit {

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
