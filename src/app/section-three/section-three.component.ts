import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss'],
  animations: [
    trigger('PopUpRebote', [
      transition(':enter', [
        style({transform: 'translate(0, 0) scale(0)'}),
        animate('0.4s cubic-bezier(0.175, 0.285, 0.32, 1.1)',
          style({transform: 'translate(0, 0) scale(1)'}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0, 0) scale(1)'}),
        animate('0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
          style({transform: 'translate(0, 0) scale(0)'}))
      ]),
    ]),
    trigger('inOutFade', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('400ms', style({opacity: '1'}))
      ]),
      transition(':leave', [
        animate('400ms', style({opacity: '0'}))
      ])
    ])
  ]
})
export class SectionThreeComponent implements OnInit {

  popupContent: any = {
    'lope-vega': {
      title: 'Loren Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          services: [
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum'
          ],
        },
      ],
      buttonText: 'Loren Ipsum',
      buttonDateOne: 'Loren Ipsum',
      buttonDateTwo: 'Loren Ipsum'
    },
    'el-ardal': {
      title: 'Loren Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          services: [
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum'
          ],
        },
      ],
      buttonText: 'Loren Ipsum',
      buttonDateOne: 'Loren Ipsum',
      buttonDateTwo: 'Loren Ipsum'
    },
    'gimnasio-magali': {
      title: 'Loren Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          services: [
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum'
          ],
        },
      ],
      buttonText: 'Loren Ipsum',
      buttonDateOne: 'Loren Ipsum',
      buttonDateTwo: 'Loren Ipsum'
    },
    'vivienda-montecerrado': {
      title: 'Loren Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          services: [
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum',
            'Loren Ipsum'
          ],
        },
      ],
      buttonText: 'Loren Ipsum',
      buttonDateOne: 'Loren Ipsum',
      buttonDateTwo: 'Loren Ipsum'
    }
  };

  ourProductPopup = false;
  activePopupContent = {};

  constructor() { }

  ngOnInit() {
  }

  showModal(event) {
    this.activePopupContent = this.popupContent[event];
    this.ourProductPopup = true;
  }

  closeModal(event) {
    this.activePopupContent = {};
    this.ourProductPopup = false;
  }

}
