import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";
import { User } from "./User";

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    balance: number;

    @OneToOne(() => User, user => user.account)
    user: User;

    @OneToMany(() => Transaction, transaction => transaction.debitedAccountId)
    debitedTransaction: Transaction[];

    @OneToMany(() => Transaction, transaction => transaction.creditedAccountId)
    creditedTransaction: Transaction[];
}