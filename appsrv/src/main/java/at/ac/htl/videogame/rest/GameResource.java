package at.ac.htl.videogame.rest;

import at.ac.htl.videogame.dao.GameDao;
import at.ac.htl.videogame.model.Game;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("game")
@Produces(MediaType.APPLICATION_JSON)
public class GameResource {
    @Inject
    GameDao dao;
    @GET
    public List<Game> games() {
        return dao.games();
    }
}
