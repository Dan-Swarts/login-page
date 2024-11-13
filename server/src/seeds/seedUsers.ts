import { User } from "../../src/models/user.js";

export const seedUsers = async () => {
    await User.bulkCreate([
        { username: 'JollyGuru', email: 'something@example.com', password: 'password' },
        { username: 'SunnyScribe', email: 'something@example.com', password: 'password' },
        { username: 'RadiantComet', email: 'something@example.com', password: 'password' },
    ],

    { individualHooks: true }

    );
};