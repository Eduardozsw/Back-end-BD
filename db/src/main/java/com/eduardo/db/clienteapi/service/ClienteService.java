package com.eduardo.db.clienteapi.service;

import com.eduardo.db.clienteapi.model.Cliente;
import org.springframework.stereotype.Service;
import com.eduardo.db.clienteapi.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Cliente criarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Optional<Cliente> atualizarCliente(Long id,Cliente cliente) {
        return clienteRepository.findById(id).map(existingCliente -> {
            existingCliente.setNome(cliente.getNome());
            existingCliente.setEmail(cliente.getEmail());
            existingCliente.setTelefone(cliente.getTelefone());
            return clienteRepository.save(existingCliente);
        });
    }

    public boolean deletarCliente(Long id) {
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
