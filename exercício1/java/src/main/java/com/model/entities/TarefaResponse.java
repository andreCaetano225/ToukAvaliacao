package com.model.entities;

import lombok.Data;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TarefaResponse {
    private Tarefa tarefa;
    private String message;

}
