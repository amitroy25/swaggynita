package com.swaggynita.com.swaggynita.entity.OrderAggregate;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer id;
    @Column(name="Basket_Id")
    private String basketId;
    @Embedded
    private ShippingAddress shippingAddress;
    @Column(name="Order_Date")
    private LocalDateTime orderDate = LocalDateTime.now();

    @Column(name="Sub_Total")
    private Double subTotal;
    @Column(name="Delivery_Fee")
    private Long deliveryFee;
    @Enumerated(EnumType.STRING)
    @Column(name="Order_Status")
    private OrderStatus orderStatus = OrderStatus.Pending;
    @OneToMany( mappedBy = "order",cascade = CascadeType.ALL, orphanRemoval = true )
    @JsonManagedReference
    private List<OrderItem> orderItems = new ArrayList<>() ;

    public void addOrderItem(OrderItem orderItem) {
        if (this.orderItems == null) {
            this.orderItems = new ArrayList<>();
        }
        this.orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    public Double getTotal() {
        return getSubTotal()+getDeliveryFee();
    }



}