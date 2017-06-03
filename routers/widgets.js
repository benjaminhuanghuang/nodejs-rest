const express = require('express');
const widgetRouter = express.Router();
const path = require('path');
const db = require('../database').connect(path.join(__dirname, '..', 'widgets.json'));

widgetRouter.route('/widgets')
    .get(function (req, res) {
        db(con => con.get(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)))
    })
    .post(function (req, res) {
        db(con => con.insert(req.body)).then(widgets => res.json(widgets));
    });

widgetRouter.route('/widgets/:widgetId')
    .get(function (req, res) {  
        db(con => con.get(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)))
    })
    .put(function (req, res) {
        req.body.id = req.params.id;
        db(con => con.update(req.body).then(widgets => res.json(widgets)))
    })
    .delete(function (req, res) {
        db(con => con.delete(parseInt(req.params.widgetId)).then(widgets => res.json(widgets)))
    });

module.exports = widgetRouter;