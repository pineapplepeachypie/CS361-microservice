import 'dotenv/config';
import * as fabrics from './fabric_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());


/**
 * Retrive the fabric's pros and cons corresponding to the ID provided in the URL.
 */
app.get('/fabrics/:_id', (req, res) => {
    const fabricId = req.params._id;
    fabrics.findFabricById(fabricId)
        .then(fabric => {
            if (fabric !== null){ 
                res.json(fabric)
            } else {
                res.status(404).json({Error: 'Resource Not Found'})
            }
        })
        .catch (error => {
            console.error(error);
            res.status(404).json({Error: 'Request Failed'})
        })

});


/**
 * Retrieve fabric. 
 * If the query parameters include fabric type, then only the pros and cons for that specific fabric are returned.
 * Otherwise, all fabrics' pros and cons are returned are returned.
 */
app.get('/fabrics', (req, res) => {

    let filter = {};
    fabrics.findFabric(filter, '', 0)
        .then(fabrics => {
            res.send(fabrics);
        })
        .catch(error => {
            console.error(error);
            res.send({Error: 'Request Failed'})
        })

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});