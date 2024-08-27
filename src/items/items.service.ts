import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    return await this.itemRepository.save(createItemDto);
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: number) {
    return await this.itemRepository.findOne({ where: { id } });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const toUpdate = await this.itemRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateItemDto);

    return await this.itemRepository.save(updated);
  }

  async remove(id: number) {
    return await this.itemRepository.delete(id);
  }
}