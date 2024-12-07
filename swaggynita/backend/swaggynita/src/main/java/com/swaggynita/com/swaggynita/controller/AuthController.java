//package com.swaggynita.com.swaggynita.controller;
//
//
//import com.swaggynita.com.swaggynita.model.JwtRequest;
//import com.swaggynita.com.swaggynita.model.JwtResponse;
//import com.swaggynita.com.swaggynita.security.JwtHelper;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//    private final UserDetailsService userDetailsService;
//    private final AuthenticationManager manager;
//    private final JwtHelper jwtHelper;
//
//
//    public AuthController(UserDetailsService userDetailsService, AuthenticationManager manager, JwtHelper jwtHelper) {
//        this.userDetailsService = userDetailsService;
//        this.manager = manager;
//        this.jwtHelper = jwtHelper;
//
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request){
//        this.authenticate(request.getUsername(), request.getPassword());
//        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
//        String token = this.jwtHelper.generateToken(userDetails);
//        JwtResponse response = JwtResponse.builder()
//                .username(userDetails.getUsername())
//                .token(token)
//                .build();
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @GetMapping("/user")
//    public ResponseEntity<UserDetails> getUserDetails(@RequestHeader("Authorization") String tokenHeader){
//        String token = extractTokenFromHeader(tokenHeader);
//        if(token!=null){
//            String username = jwtHelper.getUserNameFromToken(token);
//            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//            return new ResponseEntity<>(userDetails, HttpStatus.OK);
//        }else{
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    private String extractTokenFromHeader(String tokenHeader) {
//        if(tokenHeader!=null && tokenHeader.startsWith("Bearer ")){
//            return tokenHeader.substring(7); // Removing Bearer
//        }
//        return null;
//    }
//
//    private void authenticate(String username, String password) {
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
//        try{
//            manager.authenticate(authenticationToken);
//        }
//        catch(BadCredentialsException ex){
//            throw new BadCredentialsException("Invalid UserName or Password");
//        }
//    }
//
//}
//
//
//











package com.swaggynita.com.swaggynita.controller;


import com.swaggynita.com.swaggynita.entity.User;
import com.swaggynita.com.swaggynita.model.JwtRequest;
import com.swaggynita.com.swaggynita.model.JwtResponse;
import com.swaggynita.com.swaggynita.security.JwtHelper;

import com.swaggynita.com.swaggynita.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager manager;
    private final JwtHelper jwtHelper;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;



    public AuthController(UserDetailsService userDetailsService, AuthenticationManager manager, JwtHelper jwtHelper,UserService userService,PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.manager = manager;
        this.jwtHelper = jwtHelper;
        this.userService=userService;
        this.passwordEncoder=passwordEncoder;

    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request){
        this.authenticate(request.getUsername(), request.getPassword());
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.jwtHelper.generateToken(userDetails);
        JwtResponse response = JwtResponse.builder()
                .username(userDetails.getUsername())
                .token(token)
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<UserDetails> getUserDetails(@RequestHeader("Authorization") String tokenHeader){
        String token = extractTokenFromHeader(tokenHeader);
        if(token!=null){
            String username = jwtHelper.getUserNameFromToken(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    private String extractTokenFromHeader(String tokenHeader) {
        if(tokenHeader!=null && tokenHeader.startsWith("Bearer ")){
            return tokenHeader.substring(7); // Removing Bearer
        }
        return null;
    }

    private void authenticate(String username, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try{
            manager.authenticate(authenticationToken);
        }
        catch(BadCredentialsException ex){
            throw new BadCredentialsException("Invalid UserName or Password");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User newUser) {
        // Check if username or email already exists
        if (userService.findByUsername(newUser.getUsername()).isPresent()) {
            return new ResponseEntity<>("Username already taken!", HttpStatus.BAD_REQUEST);
        }
        if (userService.findByEmail(newUser.getEmail()).isPresent()) {
            return new ResponseEntity<>("Email already registered!", HttpStatus.BAD_REQUEST);
        }

        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(hashedPassword);

        // Set a default role if none is provided
        if (newUser.getRole() == null || newUser.getRole().isEmpty()) {
            newUser.setRole("USER"); // Default role
        }

        // Save the new user
        userService.saveUser(newUser);

        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }


}




