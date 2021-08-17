const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');

router.use('/:slug', newsController.show);
//newsController.index;
router.use('/', newsController.index); // = (req, res){res.render('news');}
//tuyến đường sẽ đọc từ trên xuống
// nếu nó đọc ko có đường dẫn slug ở trên thì nó sẽ trỏ để chạy câu code dưới

module.exports = router;
