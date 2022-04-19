import { NestFactory } from '@nestjs/core';
import { resolve } from 'path';

import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

require('dotenv').config({ path: resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`) });

(async (): Promise<void> => {
    const host = process.env.SERVER_HOST || 'localhost';
    const port = +process.env.SERVER_PORT || 3000;

    const server: ExpressAdapter = new ExpressAdapter();

    const app = await NestFactory.create(AppModule, server, {
        cors: true,
        bodyParser: true,
        logger: new Logger(),
    });

    app.enableShutdownHooks();
    await app.listen(port);

    console.log(`Server listening on ${host}:${port}`);
})();
