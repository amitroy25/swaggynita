package com.swaggynita.com.swaggynita.service;

import com.swaggynita.com.swaggynita.entity.Product;
import com.swaggynita.com.swaggynita.model.ProductResponse;
import com.swaggynita.com.swaggynita.repository.ProductRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class ProductServiceImpl implements ProductService{
    ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ProductResponse getProductById(Integer productId) {
        log.info("fetching Product by Id: {}", productId);

        Product product = productRepository.findById(productId)
                .orElseThrow(()->new RuntimeException("Product doesn't exist"));

        //now convert the Product to Product Response
        ProductResponse productResponse = convertToProductResponse(product);
        log.info("Fetched Product by Product Id: {}", productId);
        return productResponse;
    }



    @Override
    public Page<ProductResponse> getProducts(Pageable pageable, Integer typeId, String keyword) {
        log.info("fetching products");
        //fetching from DB

        Specification<Product> spec=Specification.where(null);

        if(typeId!=null){
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("type").get("id"),typeId));
        }
        if(keyword!=null && !keyword.isEmpty()){
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("name"), "%" + keyword+ "%")));
        }
        log.info("fetch all product");
        //Map
        return productRepository.findAll(spec,pageable)
                .map(this::convertToProductResponse);






    }
    private ProductResponse convertToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .pictureUrl(product.getPictureUrl())
                .productType(product.getType().getName())
                .build();
    }
}
