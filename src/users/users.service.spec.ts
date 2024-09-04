import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  //dependencias esternas
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        }
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

    jest.spyOn(mockUserRepository, 'save').mockReturnValue(user);

    //Actuar (Act)
    const result = await service.create(createUserDto);

    //Aserción (Assert)
    expect(mockUserRepository.save).toHaveBeenCalled();
    expect(mockUserRepository.save).toHaveBeenCalledWith(createUserDto);

    expect(result).toEqual(user);
  });
  it('find => Buscar todos los usuarios', async () => {
    //Organizar (Arrange)
    const user = {
      id: 11,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };
    const users = [user];
    jest.spyOn(mockUserRepository, 'find').mockReturnValue(users);

    //Actuar (Act)
    const result = await service.findAll();

    //Aserción (Assert)
    expect(result).toEqual(users);
    expect(mockUserRepository.find).toHaveBeenCalled();
  });
  it('findOne => Buscar usuario mediante ID ', async () => {
    //Organizar (Arrange)
    const id = 11;
    const user = {
      id: 11,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };

    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(user);

    //Actuar (Act)
    const result = await service.findOne(id);

    //Aserción (Assert)
    expect(result).toEqual(user);
    expect(mockUserRepository.findOne).toHaveBeenCalled();
    expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { id } });
  });
  it('remove => Eliminar usuario mediante ID', async () => {
    //Organizar (Arrange)
    const id = 11;
    const user = {
      id: 11,
      firstname: 'Andres',
      lastname: 'Gordillo',
      email: 'alexgamzg2@gmail.com',
    };

    jest.spyOn(mockUserRepository, 'delete').mockReturnValue(user);

    //Actuar (Act)
    const result = await service.remove(id);

    //Aserción (Assert)
    expect(result).toEqual(user);
    expect(mockUserRepository.delete).toHaveBeenCalled();
    expect(mockUserRepository.delete).toHaveBeenCalledWith(id);
  });
});
