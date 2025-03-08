package com.mru.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.entity.Mobiles;
import com.mru.repo.MRURepo;

@Service
public class MRUService {
	
	@Autowired
	
	private MRURepo repo;
	
	public List<Mobiles> getAllMobiles(){
		return repo.findAll();
	}

}
