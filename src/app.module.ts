import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';

import { SharedServiceModule } from './shared-service/shared-service.module';

import config from './db.config';
import { MikroORM } from '@mikro-orm/core';

@Module({
    imports: [MikroOrmModule.forRoot(config), SharedServiceModule],
})
export class AppModule implements NestModule {
    constructor(private readonly orm: MikroORM) {}
    async onModuleInit(): Promise<void> {
        const generator = this.orm.getSchemaGenerator();
        await generator.dropDatabase(process.env.DB_NAME);
        await generator.createDatabase(process.env.DB_NAME);
        await generator.createSchema();
    }
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(MikroOrmMiddleware).forRoutes('*');
    }
}
