const newsRouter = require('./news');

const siteRouter = require('./site');
function route(app) {
    app.use('/news', newsRouter); // khi truy cập vào new ở đây thì newsRouter là cấp con sẽ trỏ vào router bên new.js
    app.use('/', siteRouter);

    /* app.get('/', (req, res) => {
        res.render('home');
      });
      
      //app.get('/news', (req, res) => { // req=request:gửi yêu cầu đi cho sever -- res=response xử lí trả về là gì (tự chỉnh )
      //  res.render('news');
     // });
      
      
      app.get('/search', (req, res) => { 
        res.render('search');
      });
      
      app.post('/search', (req, res) => { 
        res.send('');
      });*/
}

module.exports = route;
