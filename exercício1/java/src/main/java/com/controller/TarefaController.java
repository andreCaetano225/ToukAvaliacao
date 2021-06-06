package com.controller;

import com.model.entities.Tarefa;
import com.model.repositories.TarefaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/tarefas")

public class TarefaController {
    @Autowired
    private TarefaRepository tarefaRepository;

    @GetMapping
    public ResponseEntity<Iterable<Tarefa>> getClients() {
        var data = tarefaRepository.findAll();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}
