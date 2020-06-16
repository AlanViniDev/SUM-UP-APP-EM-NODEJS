// Constantes e rotas e requisições
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// requisição do controller
const view_controller =  require("../control/view.controller.js");
const style_controller =  require("../control/style.controller.js");
const operacoes_controller =  require("../control/operacoes.controller.js");

//rota
router.post('/index', view_controller.view);
router.get('/index', view_controller.view);
router.get('/styleCSS', style_controller.style);
router.get('/operacoesJS', operacoes_controller.operacoes);
module.exports = router;  