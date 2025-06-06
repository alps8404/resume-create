package com.example.Resumer.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Resumer.Dto.UserDto;
import com.example.Resumer.Repository.UserRepository;

@Service
public class UserService {
	
//	@Autowired
//	UserRepository userrepo;

	public void saveUser(UserDto userDTO) {
		// TODO Auto-generated method stub
		System.out.println("User dto:"+userDTO);
	}

}
