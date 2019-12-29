const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json({
    extended: false
}));

let view;

axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
    .then(response => {
        view = response.data.photos;
    })
    .catch(error => {
    console.log(error);
});



app.get('/', (req,res) => {
    let viewOfImgs = view.map(photo => photo = photo.img_src)
    res.send(viewOfImgs)
}); 

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));