package com.swaggynita.com.swaggynita.service;

import com.swaggynita.com.swaggynita.entity.User;
import com.swaggynita.com.swaggynita.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImpl implements UserService{

   private final UserRepository userRepository;

    UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;

    }
    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
}
