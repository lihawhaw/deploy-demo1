import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from '../adp.config.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('app-port', port);
  await app.listen(7777);
}
bootstrap();
