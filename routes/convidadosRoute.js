'use strict';
module.exports = function(app) {
  var convidadosController = require('../controllers/convidadosController');

  // rotas para convidados
  app.route('/convidados')
    .get(convidadosController.listarConvidados)
    .post(convidadosController.adicionarConvidado);


  app.route('/convidados/:convidadoId')
    .get(convidadosController.lerConvidado)
    .put(convidadosController.atualizarConvidado)
    .delete(convidadosController.deletarConvidado);
};