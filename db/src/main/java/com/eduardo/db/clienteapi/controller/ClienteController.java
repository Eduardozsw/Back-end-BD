package com.eduardo.db.clienteapi.controller;

import com.eduardo.db.clienteapi.model.Cliente;
import com.eduardo.db.clienteapi.repository.ClienteRepository;
import com.eduardo.db.clienteapi.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private ClienteRepository clienteRepository;

    //aqui tá o endpoint pra listar os clientes
    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    //aqui eu adiciono um novo cliente
    @PostMapping
    public Cliente criaCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @PutMapping("/clientes/{id}")
    public Cliente atualizarCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        return clienteRepository.findById(id).map(existingCliente -> {
            existingCliente.setNome(cliente.getNome());
            existingCliente.setEmail(cliente.getEmail());
            return clienteRepository.save(existingCliente);
        }).orElseThrow();
    }

    @DeleteMapping("/clientes/{id}")
    public void deletarCliente(@PathVariable Long id) {
        clienteRepository.deleteById(id);
    }
}
