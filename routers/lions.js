const express = require('express');
const lionsRouter = express.Router();
var _ = require('lodash');

// data storage 
var lions = [];
var id = 0;
/*  
    GET  /lions
    Return all items
    200, application/json
 */

lionsRouter.get("/lions", function () {
    res.json(lions);
});

/* 
    GET /lions/:id
    return one item represented by id
*/
lionsRouter.get("/lions/:id", function () {
    var lion = _.find(lions, {
        id: req.params.id
    });

    res.json(lion || {});
});

/*
    POST /lions
    Create and return new item using the posted object
 */
lionsRouter.post("/lions", function () {
    var lion = req.body;
    id++;
    lion.id = id + "";
    lions.push(lion);
    res.json(lion);
});


/*
    PUT /lions/:id
    Update and return the matching item with the posted update object.
 */
lionsRouter.put("/lions/:id", function () {
    var update = req.body;
    if (update.id) {
        delete update.id;
    }
    var lionIndex = _.findIndex(lions, {
        id: req.params.id
    });
    if (!lions[lionIndex]) {
        res.send();
    } else {
        var updatedLion = _.assign(lions[lionIndex], update);
        res.json(updatedLion);
    }
});


/*
    DELETE /lions/:id
    Delete and return the matching item
 */
lionsRouter.delete("/lions/:id", function () {
    var lionIndex = _.findIndex(lions, {
        id: req.params.id
    });
    if (!lions[lionIndex]) {
        res.send();
    } else {
        var deletedLion = _.assign(lions[lionIndex], update);
        lions.splice(lionIndex, 1);
        res.json(deletedLion);
    }
});


module.exports = lionsRouter;