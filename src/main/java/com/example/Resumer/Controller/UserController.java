package com.example.Resumer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*
;

import com.example.Resumer.*;
import com.example.Resumer.Dto.UserDto;
import com.example.Resumer.Service.UserService;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend to connect
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUser(@RequestBody UserDto userDTO) {
        userService.saveUser(userDTO);
        
        return ResponseEntity.ok("Resume saved successfully");
        
        
        
    }
    
}
