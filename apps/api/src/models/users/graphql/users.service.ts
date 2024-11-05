import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthProviderType } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { v4 as uuidv4 } from 'uuid'
import {
  LoginInput,
  LoginResponse,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { UpdateUserInput } from './dtos/update-user.input'

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerWithCredentials(
    registerWithCredentialsInput: RegisterWithCredentialsInput,
  ) {
    const user = await this.prisma.credentials.findUnique({
      where: {
        email: registerWithCredentialsInput.email,
      },
    })

    if (user) {
      throw new BadRequestException('User already exists')
    }

    const salt = await bcrypt.genSaltSync()
    const hashedPassword = await bcrypt.hashSync(
      registerWithCredentialsInput.password,
      salt,
    )

    const uid = uuidv4()

    return this.prisma.user.create({
      data: {
        uid,
        name: registerWithCredentialsInput.name,
        image: registerWithCredentialsInput.image,
        credentials: {
          create: {
            email: registerWithCredentialsInput.email,
            password: hashedPassword,
          },
        },
        authProvider: {
          create: {
            type: AuthProviderType.CREDENTIALS,
          },
        },
      },
      include: {
        credentials: true,
      },
    })
  }

  async registerWithProvider(
    registerWithProviderInput: RegisterWithProviderInput,
  ) {
    return this.prisma.user.create({
      data: {
        uid: registerWithProviderInput.uid,
        name: registerWithProviderInput.name,
        image: registerWithProviderInput.image,
        authProvider: {
          create: {
            type: registerWithProviderInput.type,
          },
        },
      },
    })
  }

  async login(loginInput: LoginInput): Promise<LoginResponse> {
    const user = await this.prisma.user.findFirst({
      where: {
        credentials: {
          email: loginInput.email,
        },
      },
      include: {
        credentials: true,
      },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare(
      loginInput.password,
      user.credentials.password,
    )

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const accessToken = await this.jwtService.signAsync(
      {
        uid: user.uid,
      },
      { algorithm: 'HS256' },
    )

    return {
      accessToken,
      user,
    }
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args)
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args)
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput
    return this.prisma.user.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args)
  }
}
