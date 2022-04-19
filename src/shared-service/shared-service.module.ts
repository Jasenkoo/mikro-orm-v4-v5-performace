import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { SharedServiceService } from './shared-service.service';
import { SharedServiceController } from './shared-service.controller';
import { Contact } from '../models/contact.entity';
import { Company } from '../models/company.entity';

@Module({
    imports: [MikroOrmModule.forFeature([Contact, Company])],
    providers: [SharedServiceService],
    controllers: [SharedServiceController],
})
export class SharedServiceModule {}
