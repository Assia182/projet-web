import { Controller, Get, Post, Body, Param, Res, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response, Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService : JwtService,
  ) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto); 
  }


  @Post('sign-in')
  async signin(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response : Response){
    
    if(await this.userService.findOneByEmail(loginDto.emailUser) !== null){ 
      const user = await this.userService.findOneByEmail(loginDto.emailUser);

      if(user.passwordUser === loginDto.passwordUser){
        const jwt = await this.jwtService.signAsync({ emailUser : loginDto.emailUser });
        response.cookie('jwt', jwt, { httpOnly: false });

        return {
          message : 'success', user
        }
      }else {
        throw new Error("Error internal")
      }
    }
  }


  @Get('user/:email')
  findOne(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }
  

  @Get('current-user')
  async getCurrentUser(@Req() request: Request){
    try{
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
    
      if(!data){
          throw new UnauthorizedException(); 
      }

      const user = await this.userService.findOneByEmail(data['emailUser']);
    
      return user;

    }catch(e){
      throw new UnauthorizedException();   
    }  
  }


  @Post('logout')
  async logout(@Res({ passthrough : true }) response : Response){
    response.clearCookie('jwt');
    return {
        message : 'success'
    }
  }


  

}
