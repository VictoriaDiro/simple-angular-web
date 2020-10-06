import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-one',
  templateUrl: './popup-one.component.html',
  styleUrls: ['./popup-one.component.scss']
})

export class PopupOneComponent implements OnInit {

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
