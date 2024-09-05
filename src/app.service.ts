import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API REST FULL!  -  Utilizar REST para conectar sistemas basados en HTTP para obtener y generar datos, y devolverlos en formato JSON. ';
  }
}
