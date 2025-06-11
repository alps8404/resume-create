package com.example.Resumer.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*
;

import com.example.Resumer.*;
import com.example.Resumer.Dto.UserDto;
import com.example.Resumer.Exceptions.ResumeExceptions;
import com.example.Resumer.Service.UserService;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend to connect
public class UserController {

	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUser(@RequestBody UserDto userDTO) throws ResumeExceptions {
    	if(userDTO.getName()!=null || !userDTO.getName().isEmpty()) {
			userService.saveUser(userDTO);
		    logger.info("Inside saveUser controller"+userDTO);
		    
		}
		return ResponseEntity.ok("Resume saved successfully");
    }
    
}
