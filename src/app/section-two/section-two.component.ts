import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
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

export class SectionTwoComponent implements OnInit {

  popupContent: any = {
    'high-standing': {
      sections: [
        {
          title: 'Loren Ipsum',
          services: [
            {
              subtitle: 'Loren Ipsum',
              place: 'Loren Ipsum',
              image: '/assets/images/section-image-1.jpg',
              caption: 'Loren Ipsum',
              contractorImage: '/assets/images/section-image-1.jpg'
            }
          ]
        }
      ]
    },
    'hotel-services': {
      sections: [
        {
          title: 'Loren Ipsum',
          services: [
            {
              subtitle: 'Loren Ipsum',
              place: 'Loren Ipsum',
              image: '/assets/images/section-image-1.jpg',
              caption: 'Loren Ipsum',
              contractorImage: '/assets/images/section-image-1.jpg'
            }
          ]
        }
      ]
    },
    'industry-commerce': {
      sections: [
        {
          title: 'Loren Ipsum',
          services: [
            {
              subtitle: 'Loren Ipsum',
              place: 'Loren Ipsum',
              image: '/assets/images/section-image-1.jpg',
              caption: 'Loren Ipsum',
              contractorImage: '/assets/images/section-image-1.jpg'
            }
          ]
        }
      ]
    },
    'sports-facilities': {
      sections: [
        {
          title: 'Loren Ipsum',
          services: [
            {
              subtitle: 'Loren Ipsum',
              place: 'Loren Ipsum',
              image: '/assets/images/section-image-1.jpg',
              caption: 'Loren Ipsum',
              contractorImage: '/assets/images/section-image-1.jpg'
            }
          ]
        }
      ]
    },
  };

  ourProductPopup = false;
  activePopupContent = {};

  constructor() { }

  ngOnInit() {
    console.log('Actividad Empresarial', this.popupContent);
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
