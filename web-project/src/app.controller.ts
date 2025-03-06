import { Get, Controller, Render} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly carService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return {
      layout: 'layout/main',
      headerPartial: 'header_index',
      cars: this.carService.getCars(),
      news: [
        { title: 'Новая серия автомобилей Taycan', content: 'Новая серия автомобилей Taycan была представлена.' },
        { title: 'Усовершенствован ЭБУ серии автомобилей 911', content: 'Теперь ездить по дорогам стало еще безопаснее.' }
      ],
      table_cars: this.carService.getTableCars(),
    };
  }
  @Get('/models')
  @Render('models')
  models() {
    return {
      headerPartial: 'header',
      table_cars: this.carService.getTableCars(),
      cars: this.carService.getCars()
    };
  }
  @Get('/comments')
  @Render('comments')
  comments() {
    return {
      headerPartial: 'header_comments',
    }
  }

  @Get('/configurator')
  @Render('configurator')
  configurator() {
    return {
      headerPartial: 'header_configurator',
      models: ['Panamera', '911', 'Taycan'],
      colors: ['Чёрный', 'Белый', 'Красный', 'Синий'],
      engines: ['Бензиновый', 'Дизельный', 'Электрический'],
      options: ['Кожаный салон', 'Панорамная крыша', 'Премиальная аудиосистема']
    };
  }

  @Get('/contacts')
  @Render('contacts')
  contacts(){
    return{
      headerPartial: 'header',
      contactInfo : [
        { label: "Адрес", value: "ул. Бассейн" },
        { label: "Телефон", value: "+7 (123) 456-78-90" },
        { label: "Email", value: "Porsche@google.com" },
        { label: "Часы работы", value: "9:00 - 20:00" }
      ]
    }
  }

  @Get('/news')
  @Render('news')
  news() {
    return {
      headerPartial: 'header',
      news: [
        { title: 'Новая серия автомобилей Taycan', content: 'Новая серия автомобилей Taycan была представлена, что является важным событием в автомобильной индустрии.' },
        { title: 'Усовершенствован ЭБУ серии автомобилей 911', content: 'Теперь ездить по дорогам стало еще безопаснее благодаря новым технологиям.' }
      ]
    }
  }
}