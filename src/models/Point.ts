import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid} from 'uuid';

@Entity('points')
class Point {

   @PrimaryColumn()
   readonly id: string;

   @Column()
   name: string;

   @Column()
   city: string;

   @Column()
   state: string;

   @Column()
   reference: string;

   @Column()
   description: string;

   @CreateDateColumn()
   created_at: Date;

   constructor() {
      if(!this.id) {
         this.id = uuid();
      }
   }
}

export { Point };