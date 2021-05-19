package at.ac.htl.videogame.dao;

import at.ac.htl.videogame.model.Game;

import javax.enterprise.context.Dependent;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Dependent
public class GameDao {
    @PersistenceContext
    EntityManager em;

    public List<Game> games() {
        return em.createQuery("select g from Game g order by g.name", Game.class).getResultList();
    }
}
