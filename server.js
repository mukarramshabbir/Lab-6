const express=require('express');
const bodyparser=require('body-parser');
const productRouter=require('./routes/productRoute');
const cors=require('cors');
const app = express();
const PORT=3005;
require('./utils/db')

app.use(bodyparser.json());
app.use(cors());
app.use('/api', productRouter);

app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.get('/welcome',(req,res) => {
    res.send('Welcome MUkarram');
})

app.listen(PORT,() =>{
    console.log(`Server is running on the port ${PORT}`);
})