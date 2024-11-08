package com.swaggynita.com.swaggynita.repository;

import com.swaggynita.com.swaggynita.entity.Basket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketRepository extends CrudRepository<Basket, String> {
}