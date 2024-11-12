package com.swaggynita.com.swaggynita.controller;

import com.swaggynita.com.swaggynita.model.ProductResponse;
import com.swaggynita.com.swaggynita.model.TypeResponse;
import com.swaggynita.com.swaggynita.service.ProductService;
import com.swaggynita.com.swaggynita.service.TypeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private  final ProductService productService;
    private final TypeService typeService;

    public ProductController(ProductService productService, TypeService typeService) {
        this.productService = productService;

        this.typeService = typeService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable("id") Integer productId){

        ProductResponse productResponse=productService.getProductById(productId);
        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<Page<ProductResponse>> getProducts(
            @RequestParam(name = "page",defaultValue = "0")int page,
            @RequestParam(name = "size", defaultValue = "10")int size,
            @RequestParam(name = "keyword",required = false)String keyword,
            @RequestParam(name = "typeId",required = false)Integer typeId,
            @RequestParam(name = "sort", defaultValue = "name")String sort,
            @RequestParam(name = "order",defaultValue = "asc")String order
    ){
        //convert order to sort direction
        Sort.Direction direction =  order.equalsIgnoreCase("desc") ? Sort.Direction.DESC: Sort.Direction.ASC;
        Sort sorting=Sort.by(direction,sort);
        Pageable pageable= PageRequest.of(page,size,sorting);
        Page<ProductResponse> productResponses=productService.getProducts(pageable,typeId,keyword);
        return new ResponseEntity<>(productResponses,HttpStatus.OK);

    }


    @GetMapping("/types")
    public ResponseEntity<List<TypeResponse>> getTypes(){

        List<TypeResponse> typeResponses=typeService.getAllTypes();
        return new ResponseEntity<>(typeResponses,HttpStatus.OK);
    }
}
