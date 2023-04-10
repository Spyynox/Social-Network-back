import { AppDataSource } from './data-source';
import { User } from './entity/User';
import * as dotenv from 'dotenv';
dotenv.config();

AppDataSource.initialize()
    .then(async () => {
        console.log('Inserting a new user into the database...');

        const user = new User();

        user.pseudo = 'Timber';
        user.email = 'test@test@gmail';
        user.password = process.env.USER_PASSWORDD;
        user.bio = 'test de la bio';
        user.followers = [''];
        user.following = [''];
        user.likes = [''];

        await AppDataSource.manager.save(user);

        console.log('Saved a new user with id: ' + user.id);
    })
    .catch((error) => console.log(error));
