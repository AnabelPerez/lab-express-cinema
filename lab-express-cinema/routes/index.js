const express = require('express');
const router  = express.Router();
const movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res)=>{
  movie.find()
    .then(movie => {
      res.render('movies',{movie});
    })
    .catch(error=>{
      console.log(error);
    })
});

//:id me trae el id de la petición
router.get('/movies/:id',(req,res)=>{
  let movieId = req.params.id;
  movie.findOne({'_id':movieId})
    .then(movie => {
      res.render('movie-details',{movie})
    })
    .catch(error=>{
      console.log(error);
    })
});



module.exports = router;
