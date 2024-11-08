package com.swaggynita.com.swaggynita.service;



import com.swaggynita.com.swaggynita.entity.Basket;
import com.swaggynita.com.swaggynita.model.BasketResponse;

import java.util.List;

public interface BasketService {
    List<BasketResponse> getAllBaskets();
    BasketResponse getBasketById(String basketId);
    void deleteBasketById(String basketId);
    BasketResponse createBasket(Basket basket);
}