const fs = require("fs");
const path = require("path");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");
const router = express.Router();
const config = require("../config.js");
const send = require("send");
const filesDir = path.resolve(__dirname, "../", config.filesDir);

const swaggerDoc = YAML.parse(fs.readFileSync(path.join(__dirname, "../", "docs", "openapi.yml"), "utf8"));
router.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.use("/api", require("./api"))

router.get('/webupload', function (req, res) {
    res.status(200).send('HELLO')
})

router.use(express.static(path.join(__dirname, "../", "files")))

router.use("/static", express.static(path.join(__dirname, "../", "html")))


router.use((req, res, next) => {
    if (req.method != "GET") return next();
    res.send(fs.readFileSync(path.join(__dirname, "../", "html", "index.html"), "utf8"))
})

module.exports = router