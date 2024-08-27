import { Column, Entity, PrimaryGeneratedColumn, ManyToOne,JoinColumn, CreateDateColumn, ManyToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Item } from 'src/items/entities/item.entity';


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, {eager:true})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Item, (item) => item.orders, {eager:true})
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @Column('int')
  quantity: number;

  @Column('datetime')
  order_date: Date;
 
}