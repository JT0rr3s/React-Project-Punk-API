import express from 'express';
import cors from 'cors';
import router from './routes/beers.js';
import bodyParser from 'body-parser';


const app = express();

const port = process.env.PORT || 3010;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})

app.use(bodyParser.json());

app.use(cors(
    {origin: "*"}
));

app.use("/images", express.static('images'));
app.use("/api/beers", router);