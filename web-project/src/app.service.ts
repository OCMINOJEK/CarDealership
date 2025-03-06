import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTableCars() {
    return [
      { name: 'Panamera', year: 2022, price: '$120,000' },
      { name: '911', year: 2023, price: '$150,000' },
      { name: 'Taycan', year: 2024, price: '$180,000' }
    ];
  }
  getCars() {
    return [
      { id: 'panamera', name: 'Panamera', image: '/photo/panamera.jpg' },
      { id: '911', name: '911', image: '/photo/911.jpg' },
      { id: 'taycan', name: 'Taycan', image: '/photo/taycan.jpg' },
      { id: '718', name: '718', image: '/photo/718.jpg' },
      { id: 'carrera', name: 'Carrera', image: '/photo/carrera.jpg' },
      { id: 'cayenne', name: 'Cayenne', image: '/photo/cayenne.jpg' },
      { id: 'gt3', name: 'GT3', image: '/photo/gt3.jpg' }
    ]
  }
}
