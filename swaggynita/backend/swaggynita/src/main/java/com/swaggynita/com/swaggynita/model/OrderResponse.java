package com.swaggynita.com.swaggynita.model;


import com.swaggynita.com.swaggynita.entity.OrderAggregate.OrderItem;
import com.swaggynita.com.swaggynita.entity.OrderAggregate.OrderStatus;
import com.swaggynita.com.swaggynita.entity.OrderAggregate.ShippingAddress;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private Integer id;
    private String basketId;
    private ShippingAddress shippingAddress;
    private Long subTotal;
    private Long deliveryFee;
    private Double total;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;
    private List<OrderItem> orderItems;



}