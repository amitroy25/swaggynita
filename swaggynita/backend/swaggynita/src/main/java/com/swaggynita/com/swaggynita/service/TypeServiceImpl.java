package com.swaggynita.com.swaggynita.service;

import com.swaggynita.com.swaggynita.entity.Type;
import com.swaggynita.com.swaggynita.model.TypeResponse;
import com.swaggynita.com.swaggynita.repository.TypeRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Log4j2
public class TypeServiceImpl implements TypeService{
    private final TypeRepository typeRepository;

    public TypeServiceImpl(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    @Override
    public List<TypeResponse> getAllTypes() {
        log.info("fetching all Brands");

        //fetch Brands

        List<Type> typeList= typeRepository.findAll();
        //now use stream operator to map with response


        List<TypeResponse>  typeResponses= typeList
                .stream()
                .map(this::convertTypeResponse)
                .collect(Collectors.toList());
        log.info("fetched all Brands!!");

        return typeResponses;
    }

    private TypeResponse convertTypeResponse(Type type) {

        return TypeResponse.builder()
                .id(type.getId())
                .name(type.getName())
                .build();

    }
}
