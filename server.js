const express = require('express');

const app = express();

app.use(express.json({
    extended: false
}));

app.get(
    '/',
    (req,res) =>  
        res.send(
            'Hello, Meet ya'
            )
    );

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));