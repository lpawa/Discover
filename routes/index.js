/**
 * Created by lakshya on 15/7/16.
 */
const express = require('express');
var router = express.Router();

//app.set('port',5000);

// app.get('/hello',function (req,res) {
//     if(req.query.name!='' && req.query.name!='undefined') {
//         res.send("Hello " + req.query.name)
//     }else{
//         res.send("Who the hell are you?")
//     }
// });

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.use('/' , express.static('./public_html'));
});

module.exports = router;



// app.listen(app.get('port'),function () {
//     console.log('server started on port : ' + app.get('port'))
// });
