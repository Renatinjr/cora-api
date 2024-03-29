require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: false }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

app.get("/", function (req, res) {
    res.send(
        "<h2>Cora api</h2>"
    );

});

app.use("/cora-api", routes());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});
