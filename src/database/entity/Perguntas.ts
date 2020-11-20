import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Infracoes } from './Infracoes'
import { Alternativa } from './Alternativa'

@Entity()
export class Perguntas{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto_pergunta: string;

    @ManyToOne(() => Infracoes, infracao => infracao.perguntas)
    infracao: Infracoes;

    @OneToMany(() => Alternativa, alternativa => alternativa.pergunta)
    alternativa: Alternativa[];
} 