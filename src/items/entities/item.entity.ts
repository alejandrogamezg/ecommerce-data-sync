import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('text')
  description: string;

  @Column('varchar', { length: 255 })
  image: string;

  @Column('int')
  stock: number;

  @OneToMany(() => Order, (order) => order.item)
  orders: Order[];
}