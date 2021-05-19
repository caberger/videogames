package at.ac.htl.videogame.dao;

import at.ac.htl.videogame.model.Publisher;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class PublisherDao {
    @PersistenceContext
    EntityManager em;

    public Publisher get(int id) {
        return em.find(Publisher.class, id);
    }
}
