package com.superior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.superior.dsvendas.dto.SellerDTO;
import com.superior.dsvendas.entities.Seller;
import com.superior.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;
	
	public List <SellerDTO> findAll(){
		List<Seller> res = repository.findAll();
		return res.stream().map(x-> new SellerDTO(x)).collect(Collectors.toList());
	}
}
