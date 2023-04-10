import { AppDataSource } from './data-source';

import { User } from './entity/User';

AppDataSource.initialize()
    .then(async () => {
        const savedUsers = await AppDataSource.manager.find(User);
        console.log('All Users from the db: ', savedUsers);
    })
    .catch((error) => console.log(error));
