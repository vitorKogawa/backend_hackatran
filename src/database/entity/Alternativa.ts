import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Perguntas } from './Perguntas'

@Entity()
export class Alternativa{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto_alternativa:string;

    @Column()
    isCorrect: boolean;

    @ManyToOne(() => Perguntas, pergunta => pergunta.alternativa)
    pergunta: Perguntas
}