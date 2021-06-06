package com.model.repositories;

import com.model.entities.Tarefa;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TarefaRepository extends CrudRepository<Tarefa, Integer> {
    @Query("select * from tarefa ")
    Iterable<Tarefa> findAll();

}
