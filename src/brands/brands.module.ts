import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}


//Comando para crear crud completo
//nest g res (nombre) --no-spec