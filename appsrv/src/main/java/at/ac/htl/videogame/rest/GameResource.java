package at.ac.htl.videogame.rest;

import at.ac.htl.videogame.dao.GameDao;
import at.ac.htl.videogame.model.Game;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("game")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Transactional
public class GameResource {
    @Inject
    GameDao dao;
    @GET
    public List<Game> games() {
        List<Game> games = dao.games();
        return games;
    }
    @PUT
    public Game update(Game game) {
        /*
        Game existingGame = dao.get(game.getGameId());
        existingGame.setName(game.getName());
        existingGame.setDescription(game.getDescription());

         */
        dao.update(game);
        return game;
    }
}
