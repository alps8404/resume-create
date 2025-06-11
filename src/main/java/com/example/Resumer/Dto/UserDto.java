package com.example.Resumer.Dto;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserDto {
    private String name;
    private String email;
    private String phone;
    private List<EducationDto> education;
    private List<ExperienceDto> experience;
    private List<String> skills;
    
    
    public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public List<EducationDto> getEducation() {
		return education;
	}
	public void setEducation(List<EducationDto> education) {
		this.education = education;
	}
	public List<ExperienceDto> getExperience() {
		return experience;
	}
	public void setExperience(List<ExperienceDto> experience) {
		this.experience = experience;
	}
	public List<String> getSkills() {
		return skills;
	}
	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
	
}

