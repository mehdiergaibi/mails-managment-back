import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { authDTO } from './dto/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}

  async loginUser(loginUserDto: authDTO) {
    const user = await this.userModel.findOne({
      username: loginUserDto.username,
    });
    if (!user) {
      throw new HttpException(
        'mot dutiisateur n existe pas',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const isPasswordCorrect = loginUserDto.password.localeCompare(
      user.password,
    );

    console.log(isPasswordCorrect);
    if (isPasswordCorrect) {
      throw new HttpException(  
        'mot de passe incorrecte',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return user;
  }
  async findByUserName(username: string) {
    return this.userModel.findOne({ username });
  }
}
