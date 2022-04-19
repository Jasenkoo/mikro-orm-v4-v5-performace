import { resolve } from 'path';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs/typings';
import { EntityCaseNamingStrategy } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Contact } from './models/contact.entity';
import { Company } from './models/company.entity';

require('dotenv').config({ path: resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`) });
const config: MikroOrmModuleSyncOptions = {
    entities: [Contact, Company],
    namingStrategy: EntityCaseNamingStrategy,
    type: 'postgresql',
    driver: PostgreSqlDriver,
    dbName: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    debug: false,
    metadataProvider: TsMorphMetadataProvider,
    registerRequestContext: false,
};

export default config;
