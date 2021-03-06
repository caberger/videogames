package at.ac.htl.videogame.dao;

import at.ac.htl.videogame.model.Game;
import at.ac.htl.videogame.model.Publisher;

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
    public Game get(int id) {
        return em.find(Game.class, id);
    }
    public void update(Game game) {
        Publisher publisher = em.find(Publisher.class, game.getPublisher().getPublisherId());
        game.setPublisher(publisher);
        em.merge(game);
    }
}
