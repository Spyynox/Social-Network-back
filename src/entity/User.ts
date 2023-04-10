import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Min, Max } from 'class-validator';
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Min(6)
    @Max(55)
    @Column({ nullable: false, unique: true })
    pseudo: string;

    @IsEmail()
    @Column({ nullable: false, unique: true })
    email: string;

    @Min(6)
    @Max(1024)
    @Column({ nullable: false })
    password: string;

    @Column({ default: './uploads/profil/random-user.png' })
    picture: string;

    @Max(1024)
    @Column()
    bio: string;

    @Column('text', { array: true })
    followers: string[];

    @Column('text', { array: true })
    following: string[];

    @Column('text', { array: true })
    likes: string[];

    @Column({ default: true })
    timestamps: boolean;
}
