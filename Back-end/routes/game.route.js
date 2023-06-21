const express = require("express");
const req = require("express/lib/request");
const {sendStatus} = require("express/lib/response");
const gameController = require("../controllers/game.controllers");

function routes(Game) {
    const gameRouter = express.Router();
    const controller = gameController(Game);
    gameRouter.route("/games").post(controller.post).get(controller.get);

    gameRouter.use("/games/:gameID", (req, res, next) => {
        Game.findById(req.params.gameID, (err, game) => {
            if (err) {
                return res.send(err);
            }
            if (game) {
                req.game = game;
                return next();
            }
            return res.sendStatus(404);
        });
    });
    gameRouter
        .route("/games/:gameID")
        .get((req, res) => res.json(req.game))
        .put((req, res) => {
            const {game} = req;
            console.log(game)
            game.title = req.body.title;
            game.genre = req.body.genre;
            game.developper = req.body.developper;
            game.isplay = req.body.isplay;
            game.img = req.body.img;
            req.game.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(game);
            });
        })
        .patch((req, res) => {
            const {game} = req;
            // eslint-disable-next-line no-underscore-dangle
            if (res.body._id) {
                // eslint-disable-next-line no-underscore-dangle
                delete req.body._id;
            }
            Object.entries(req.body).forEach((item) => {
                const Key = item[0];
                const value = item[1];
                game[Key] = value;
            });
            req.game.save((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(game);
            });
        })
        .delete((req, res) => {
            req.game.remove((err) => {
                if (err) {
                    return res.send(err);
                }
                return res.sendStatus(204);
            });
        });
    return gameRouter;
}

module.exports = routes;
