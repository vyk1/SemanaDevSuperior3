package com.superior.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.superior.dsvendas.dto.SaleDTO;
import com.superior.dsvendas.dto.SaleSuccessDTO;
import com.superior.dsvendas.dto.SaleSumDTO;
import com.superior.dsvendas.entities.Sale;
import com.superior.dsvendas.repositories.SaleRepository;
import com.superior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	@Autowired
	private SellerRepository sellerRepository;

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
//		Evita iterações repetidas ao BD
		sellerRepository.findAll();
		Page<Sale> res = repository.findAll(pageable);
		return res.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repository.successGroupedBySeller();
	}
}
