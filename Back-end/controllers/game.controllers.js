function gameController(Game) {
  function post(req, res) {
    const game = new Game(req.body);
    // if (!req.title) {
    //   res.status(400);
    //   return res.send("Title is required!");
    // }
    game.save();
    res.status(201);
    return res.json(game);
  }
  function get(req, res) {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Game.find(query, (err, games) => {
      if (err) {
        return res.send(err);
      }
      const returnGames = games.map((game) => {
        const newGame = game.toJSON();
        newGame.links = {};
        newGame.links.self = `http://${req.headers.host}/api/games/${game._id}`;
        return newGame;
      });
      return res.json(returnGames);
    });
  }
  return { post, get };
}

module.exports = gameController;
