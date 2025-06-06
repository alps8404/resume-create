package com.example.Resumer.Dto;

import java.util.List;

import lombok.Data;

@Data
public class UserDto {
    private String name;
    private String email;
    private String phone;
    private List<EducationDto> education;
    private List<ExperienceDto> experience;
    private List<String> skills;
}

