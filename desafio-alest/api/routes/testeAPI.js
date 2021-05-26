express = require('express');
router = express.Router();

router.get('/',function(req, res, next){
    res.send('API está funcionando');
});

module.exports = router;