/**
 * Arquivo de configuração do Servidor
 */
const Cors = require("cors")

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Convidado = require("./models/convidados") //created model loading here

app.use(Cors())
app.use(express.json())

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect(
  "mongodb+srv://hightech:hightech2021@cluster0.zikiu.mongodb.net/fabrica-de-programador?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

var routes = require("./routes/convidadosRoute") //importing route
routes(app) //register the route

app.listen(port)

console.log("Servidor iniciado na porta: " + port)
