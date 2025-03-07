import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT ?? 5050;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Fintness_app')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('fitness_app')
    .build();

    // Включение CORS
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
