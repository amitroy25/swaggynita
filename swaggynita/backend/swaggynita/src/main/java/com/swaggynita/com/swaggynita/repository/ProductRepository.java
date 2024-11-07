package com.swaggynita.com.swaggynita.repository;

import com.swaggynita.com.swaggynita.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Page<Product> findAll(Specification spec , Pageable pageable);
    Specification<Product> searchByNameContaining(String keyword);
    Specification<Product> findByTypeId(Integer typeId);




}
