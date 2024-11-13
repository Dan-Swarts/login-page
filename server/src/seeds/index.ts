import { sequelize } from "../models/index.js";
import { seedTickets } from "./seedTickets.js";
import { seedUsers } from "./seedUsers.js";

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');

        await seedTickets();
        console.log('\n----- TICKETS SEEDED -----\n');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedAll();