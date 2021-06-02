"use strict"

var mongoose = require("mongoose"),
  Convidado = mongoose.model("Convidado")

exports.listarConvidados = function (req, res) {
  Convidado.find({}, function (err, convidado) {
    if (err) res.send(err)
    res.json(convidado)
  })
}

exports.adicionarConvidado = function (req, res) {
  var novoConvidado = new Convidado(req.body)
  novoConvidado.save(function (err, convidado) {
    if (err) res.send(err)
    res.json(convidado)
  })
}

exports.lerConvidado = function (req, res) {
  Convidado.findById(req.params.convidadoId, function (err, convidado) {
    if (err) res.send(err)
    res.json(convidado)
  })
}

exports.atualizarConvidado = function (req, res) {
  Convidado.findOneAndUpdate(
    {
      _id: req.params.convidadoId
    },
    req.body,
    {
      new: true
    },
    function (err, convidado) {
      if (err) res.send(err)
      res.json(convidado)
    }
  )
}

exports.deletarConvidado = function (req, res) {
  Convidado.remove(
    {
      _id: req.params.convidadoId
    },
    function (err, convidado) {
      if (err) res.send(err)
      res.json({
        message: "Convidado removido com sucesso!"
      })
    }
  )
}
