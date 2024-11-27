import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

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

  const port = configService.get<number>('port');
  await app.listen(port);

  console.log(`Server listen to ${port}`);
}
bootstrap();
