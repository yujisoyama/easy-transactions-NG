import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Account, account => account.debitedTransaction)
    @JoinColumn({name: 'debitedAccountId'})
    debitedAccountId: Account;

    @ManyToOne(() => Account, account => account.creditedTransaction)
    @JoinColumn({name: 'creditedAccountId'})
    creditedAccountId: Account;

    @Column({type: 'float'})
    value: number;

    @CreateDateColumn()
    createdAt: Date;
}
