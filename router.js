'use strict';
var { router, middlewares } = require('../core')
var controller = require("./controller")
var { bodyParser } = middlewares

router.get('/voucher-printer-settings', middlewares.auth, controller.getSettings);
router.post('/voucher-printer-settings', middlewares.auth, bodyParser.json(), controller.updateSettings);
router.post('/voucher-printer-reset', middlewares.auth, bodyParser.json(), controller.resetSettings);
router.post('/generate-printable-vouchers', middlewares.auth, bodyParser.json(), controller.generatePrintableVouchers);
module.exports = router