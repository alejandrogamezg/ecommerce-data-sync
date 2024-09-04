import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';

describe('ItemsService', () => {
  let service: ItemsService;

   //dependencias esternas
   const mockItemRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: mockItemRepository,
        }
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //La anotación (también denominada caso de prueba) se utiliza para definir un caso de prueba individual
  //it
  it('create => Creando un nuevo articulo', async () =>{
    //Organizar (Arrange)
    const createItemDto = {
      name: 'Tablet',
      price: 200,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    } as CreateItemDto;

    const item = {
      id:11,
      name: 'Tablet',
      price: 200,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    } as Item;

    jest.spyOn(mockItemRepository, 'save').mockReturnValue(item);

    //Actuar (Act)
    const result = await service.create(createItemDto);

    //Aserción (Assert)
    expect(mockItemRepository.save).toHaveBeenCalled();
    expect(mockItemRepository.save).toHaveBeenCalledWith(createItemDto);

    expect(result).toEqual(item);
  });
  it('find => Buscar todos los articulos', async () => {
    //Organizar (Arrange)
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };
    const items = [item];
    jest.spyOn(mockItemRepository, 'find').mockReturnValue(item);

    //Actuar (Act)
    const result = await service.findAll();

    //Aserción (Assert)
    expect(result).toEqual(item);
    expect(mockItemRepository.find).toHaveBeenCalled();
  });
  it('findOne => Buscar articulo mediante ID ', async () => {
    //Organizar (Arrange)
    const id = 1;
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };

    jest.spyOn(mockItemRepository, 'findOne').mockReturnValue(item);

    //Actuar (Act)
    const result = await service.findOne(id);

    //Aserción (Assert)
    expect(result).toEqual(item);
    expect(mockItemRepository.findOne).toHaveBeenCalled();
    expect(mockItemRepository.findOne).toHaveBeenCalledWith({ where: { id } });
  });
  it('remove => Eliminar articulo mediante ID', async () => {
    //Organizar (Arrange)
    const id = 1;
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };

    jest.spyOn(mockItemRepository, 'delete').mockReturnValue(item);

    //Actuar (Act)
    const result = await service.remove(id);

    //Aserción (Assert)
    expect(result).toEqual(item);
    expect(mockItemRepository.delete).toHaveBeenCalled();
    expect(mockItemRepository.delete).toHaveBeenCalledWith(id);
  });
});
