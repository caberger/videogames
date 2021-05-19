package at.ac.htl.videogame.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Game {
    @Id
    @GeneratedValue
    int gameId;
    String name;
    String description;
}
