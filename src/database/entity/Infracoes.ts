import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Perguntas } from './Perguntas'

@Entity()
export class Infracoes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto_infracao: string;

    @OneToMany(() => Perguntas, pergunta => pergunta.infracao)
    perguntas: Perguntas[];
}