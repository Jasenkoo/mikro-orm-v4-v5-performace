import { Controller, Get } from '@nestjs/common';

import { SharedServiceService } from './shared-service.service';

@Controller()
export class SharedServiceController {
    constructor(private readonly sharedServiceService: SharedServiceService) {}

    @Get()
    async handlePCMImport(): Promise<void> {
        return this.sharedServiceService.pcmSync();
    }
}
