import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded} from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Algunas configuraciones para la API (No sobre Swagger
  app.use(json({limit: '50mb'}));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

   // Setting API Path
   const apiPath = 'api';
   app.setGlobalPrefix(apiPath);

  // Swagger Options
  const options = new DocumentBuilder()
  .setTitle('Documentación API Nest-js con Swagger')
  .setDescription('Esta es la documentación de la API Rest Full usando Swagger')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  //SwaggerModule.setup('api', app, document)

  // Swagger path: http://localhost:3200/api/docs
  SwaggerModule.setup(`${apiPath}/docs`, app, document)

  await app.listen(3000);
}
bootstrap();
