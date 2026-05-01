import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

     getUsers() {
        this.logger.log('Fetching users');
        return [
            {
                id: 1,
                name: 'John Doe',
                email:'john.doe@example.com'        

            }
        
        
        ]

    }
}
