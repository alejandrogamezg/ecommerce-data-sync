import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService  = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUsersService,
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
//La anotación (también denominada caso de prueba) se utiliza para definir un caso de prueba individual
  //it
  it('create => Creando un usuario', async () =>{
    //Organizar (Arrange)
    const createUserDto = {
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    } as CreateUserDto;

    const user = {
      id: 11,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    } as User;

    jest.spyOn(mockUsersService, 'save').mockReturnValue(user);

    //Actuar (Act)
    const result = await controller.create(createUserDto);

    //Aserción (Assert)
    expect(mockUsersService.save).toHaveBeenCalled();
    expect(mockUsersService.save).toHaveBeenCalledWith(createUserDto);

    expect(result).toEqual(user);
  });
  it('findAll => Buscar todos los usuarios', async () => {
    //Organizar (Arrange)
    const user = {
      id: Date.now(),
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };
    const users = [user];
    jest.spyOn(mockUsersService, 'find').mockReturnValue(users);

    //Actuar (Act)
    const result = await controller.findAll();

    //Aserción (Assert)
    expect(result).toEqual(users);
    expect(mockUsersService.find).toHaveBeenCalled();
  });
  it('findOne => Buscar usuario mediante ID ', async () => {
    //Organizar (Arrange)
    const id = 1;
    const user = {
      id: 1,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };

    jest.spyOn(mockUsersService, 'findOne').mockReturnValue(user);

    //Actuar (Act)
    const result = await controller.findOne(id);

    //Aserción (Assert)
    expect(result).toEqual(user);
    expect(mockUsersService.findOne).toHaveBeenCalled();
    expect(mockUsersService.findOne).toHaveBeenCalledWith({ where: { id } });
  });
  it('remove => Eliminar usuario mediante ID', async () => {
    //Organizar (Arrange)
    const id = 1;
    const user = {
      id: 1,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };

    jest.spyOn(mockUsersService, 'delete').mockReturnValue(user);

    //Actuar (Act)
    const result = await controller.remove(id);

    //Aserción (Assert)
    expect(result).toEqual(user);
    expect(mockUsersService.delete).toHaveBeenCalled();
    expect(mockUsersService.delete).toHaveBeenCalledWith(+id);
  });
  
});
