package com.swaggynita.com.swaggynita.service;

import com.swaggynita.com.swaggynita.model.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {


    ProductResponse getProductById(Integer productId);
    //Page<ProductResponse> getProducts(Pageable pageable, Integer typeId, String keyword);
    Page<ProductResponse> getProducts(Pageable pageable, Integer typeId, String keyword);
}
