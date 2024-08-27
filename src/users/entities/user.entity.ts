import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column('text')
  email: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}