import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepository.save(createOrderDto);
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const toUpdate = await this.orderRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateOrderDto);

    return await this.orderRepository.save(updated);
  }

  async remove(id: number) {
    return await this.orderRepository.delete(id);
  }
}