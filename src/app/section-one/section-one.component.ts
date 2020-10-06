import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
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
export class SectionOneComponent implements OnInit {

  popupContent: any = {
    'management-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
      description: 'Lorem Ipsum'
    },
    'efficiency-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
    },
    'solar-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
    },
    'fires-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
    },
    'resources-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
    },
    'security-container': {
      title: 'Lorem Ipsum',
      image: '/assets/images/section-image-1.jpg',
      sections: [
        {
          title: 'Lorem Ipsum',
          services: [
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum',
            'Lorem Ipsum'
          ],
        }
      ],
    },
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
