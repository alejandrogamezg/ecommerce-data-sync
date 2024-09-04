import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';

describe('ItemsController', () => {
  let controller: ItemsController;

  const mockItemService  = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: mockItemService,
        }
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
      id:1,
      name: 'Tablet',
      price: 200.00,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    } as Item;

    jest.spyOn(mockItemService, 'save').mockReturnValue(item);

    //Actuar (Act)
    const result = await controller.create(createItemDto);

    //Aserción (Assert)
    expect(mockItemService.save).toHaveBeenCalled();
    expect(mockItemService.save).toHaveBeenCalledWith(createItemDto);

    expect(result).toEqual(item);
  });

  it('findAll => Buscar todos los articulos', async () => {
    //Organizar (Arrange)
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200.00,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };
    const items = [item];
    jest.spyOn(mockItemService, 'find').mockReturnValue(items);

    //Actuar (Act)
    const result = await controller.findAll();

    //Aserción (Assert)
    expect(result).toEqual(items);
    expect(mockItemService.find).toHaveBeenCalled();
  });
  it('findOne => Buscar articulo mediante ID ', async () => {
    //Organizar (Arrange)
    const id = 1;
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200.00,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };

    jest.spyOn(mockItemService, 'findOne').mockReturnValue(item);

    //Actuar (Act)
    const result = await controller.findOne(id);

    //Aserción (Assert)
    expect(result).toEqual(item);
    expect(mockItemService.findOne).toHaveBeenCalled();
    expect(mockItemService.findOne).toHaveBeenCalledWith({ where: { id } });
  });
  it('remove => Eliminar articulo mediante ID', async () => {
    //Organizar (Arrange)
    const id = 1;
    const item = {
      id: 1,
      name: 'Tablet',
      price: 200.00,
      description: 'Tablet color gris, 128GB',
      image: 'tablet_image.png',
      stock: 25,
    };

    jest.spyOn(mockItemService, 'delete').mockReturnValue(item);

    //Actuar (Act)
    const result = await controller.remove(id);

    //Aserción (Assert)
    expect(result).toEqual(item);
    expect(mockItemService.delete).toHaveBeenCalled();
    expect(mockItemService.delete).toHaveBeenCalledWith(+id);
  });
});
