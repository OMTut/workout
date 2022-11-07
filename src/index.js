const express = require('express');
const loginRoute = require('./routes/login');

const app = express();

//listen to port to hear requests coming in
const PORT = 3001;

//middleware
app.use(express.json()); //parses as json
app.use(express.urlencoded()); //parses as urlencoded
app.use((req,res,next)=> {
    console.log(`${req.method}:${req.url}`);
    next();
})

app.use('/api/login', loginRoute);

app.listen(PORT, () => console.log(`running express server on port ${PORT}`));