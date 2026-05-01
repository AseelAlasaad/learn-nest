import { Controller, Get, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { HttpExceptionFilter } from '../utilits/http-exception.filter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
    constructor(private userService: UserService) { }
    @Get()

    getUsers() {

        const users = this.userService.getUsers();
        if (!users) {
            throw new HttpException('Service error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!users.length) {
            throw new HttpException('No users found', HttpStatus.NOT_FOUND);
        }
        return users;
    }
}
