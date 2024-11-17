import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const enabledCorsUrls = [
    configService.get<string>('mobile.android.uri'),
    configService.get<string>('mobile.device.uri'),
  ];

  app.enableCors({
    origin: enabledCorsUrls,
    credentials: true,
  });

  await app.listen(8000);

  console.log('Server listen to 8000');
}
bootstrap();
