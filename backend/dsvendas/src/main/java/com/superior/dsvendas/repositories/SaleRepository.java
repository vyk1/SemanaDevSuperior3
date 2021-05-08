package com.superior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.superior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
