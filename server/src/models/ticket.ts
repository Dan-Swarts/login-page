import { DataTypes, Sequelize, Model, InferCreationAttributes, CreationOptional, InferAttributes, DATE, } from "sequelize";
import { User } from './user.js';

export class Ticket extends Model<InferAttributes<Ticket>, InferCreationAttributes<Ticket>> {
    public declare id: number;
    public declare name: string;
    public declare status: string;
    public declare description: string;
    public declare assignedUserId: number;

    public readonly assignedUser?: User;

    public readonly declare createdAt: Date;
    public readonly declare updatedAt: Date;
}

export function initTicketSchema(sequelize: Sequelize): typeof Ticket {
    Ticket.init(
        {
            id: {
                type: DataTypes.NUMBER,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            assignedUserId: {
                type: DataTypes.NUMBER,
                allowNull: true
            },

            createdAt: {
                type: DataTypes.DATE,
            },

            updatedAt: {
                type: DataTypes.DATE,
            },
            
        },
        {
            tableName: 'tickets',
            sequelize,
        },
    );

    return Ticket;
}