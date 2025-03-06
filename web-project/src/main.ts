import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  app.engine('hbs', hbs.__express);
  app.set('view engine', 'hbs');
  app.set('views', join(__dirname, '..', 'views'));

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  app.use((req, res, next) => {
    res.locals.layout = 'layout/main';
    next();
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
});
