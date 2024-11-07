package com.swaggynita.com.swaggynita.repository;

import com.swaggynita.com.swaggynita.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Type,Integer> {

}
