import mongoose from "mongoose";

export const Db_connection = async () => {

            await mongoose.connect(process.env.MONGO_URI, {
                dbName: 'ecommerce'
            });
            console.log(`Connected to ${process.env.MONGO_URI}`);
        }
 