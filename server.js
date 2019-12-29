const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json({
    extended: false
}));




app.get('/', async (req,res) => {
    let viewOfImgs;
    await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY')
    .then(response => {
        let view = response.data.photos;
        viewOfImgs = view.map(photo => photo = photo.img_src);
    })
    .catch(error => {
    console.log(error);
    });
    res.send(viewOfImgs)
});

app.get('/rovers', async (req,res) => {
    let message = 'this is a page with all rovers'
    res.send(message)
}); 

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));