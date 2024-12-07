package com.swaggynita.com.swaggynita.entity.OrderAggregate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="OrderItem")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer id;

    @Embedded
    private ProductItemOrdered itemOrdered;
    @Column(name="Price")
    private Long price;
    @Column(name="Quantity")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name="order_id")
    @JsonBackReference
    private Order order;
}