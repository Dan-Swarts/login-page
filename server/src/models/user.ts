import { DataTypes, Sequelize, Model, InferAttributes, InferCreationAttributes, CreationOptional, } from "sequelize";
import bcrypt from 'bcrypt';


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    public declare id: CreationOptional<number>;
    public declare username: string;
    public declare email: string;
    public declare password: string;

    public declare readonly createdAt: Date;
    public declare readonly updatedAt: Date;

    public async setPassword(password: string) {
        const salt = 10;
        this.password = await bcrypt.hash(password,salt);
    }
}

export function InitUserSchema(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            },

            username: {
            type: DataTypes.STRING,
            allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            password: {
            type: DataTypes.STRING,
            allowNull: false,
            },

            createdAt: {
                type: DataTypes.DATE,
            },

            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        
        {
            tableName: 'users',
            sequelize,
            hooks: {
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                },

                beforeUpdate: async (user: User) => {
                    await user.setPassword(user.password);
                },
            }
        }
    );
  
    return User;
  }
