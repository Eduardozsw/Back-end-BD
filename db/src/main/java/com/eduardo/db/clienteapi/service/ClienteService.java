package com.eduardo.db.clienteapi.service;

import org.springframework.stereotype.Service;
import com.eduardo.db.clienteapi.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
}
