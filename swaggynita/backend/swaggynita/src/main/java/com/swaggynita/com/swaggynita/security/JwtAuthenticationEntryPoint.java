package com.swaggynita.com.swaggynita.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.PrintWriter;





//This code defines a custom entry point for handling unauthorized access in a Spring Security application. It’s specifically designed to handle cases when a user attempts to access a secured resource without being authenticated. This is often used in applications that rely on JWT (JSON Web Token) authentication, where unauthorized access responses are managed directly, often returning a 401 Unauthorized status code.
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        PrintWriter writer = response.getWriter();
        writer.println("Access Denied:" + authException.getMessage());
    }
}
