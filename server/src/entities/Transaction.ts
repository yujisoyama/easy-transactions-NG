import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Account, account => account.debitedTransaction, { eager: true })
    @JoinColumn({ name: 'debitedAccountId' })
    debitedAccountId: Account;

    @ManyToOne(() => Account, account => account.creditedTransaction, { eager: true })
    @JoinColumn({ name: 'creditedAccountId' })
    creditedAccountId: Account;

    @Column({ type: 'float' })
    value: number;

    @CreateDateColumn()
    createdAt: Date;
}
