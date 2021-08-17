const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
//newsController.index;
router.use('/', siteController.index); // = (req, res){res.render('news');}
//tuyến đường sẽ đọc từ trên xuống

module.exports = router;
