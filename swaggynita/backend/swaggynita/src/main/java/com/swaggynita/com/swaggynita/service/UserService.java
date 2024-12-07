package com.swaggynita.com.swaggynita.service;


import com.swaggynita.com.swaggynita.entity.User;
import org.springframework.stereotype.Service;

import java.util.Optional;


public interface UserService {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    void saveUser(User user);

}

