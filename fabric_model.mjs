import mongoose from 'mongoose';
import 'dotenv/config';
import { query } from 'express';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens

/**
 * Define the schema
 */
const fabricsSchema = mongoose.Schema({
    fabric: { type: String, required: true },
    pros: { type: String, required: true },
    cons: { type: String, required: true },

});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Fabrics = mongoose.model("Fabrics", fabricsSchema);

const findFabric = async (filter, projection, limit) => {
    const query = Fabrics.find(filter)
        .select(projection)
        .limit(limit);
    
    return query.exec();
};

const findFabricById = async (_id) => {
    const query = Fabrics.findById(_id);
    return query.exec();
}

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export{findFabric, findFabricById};