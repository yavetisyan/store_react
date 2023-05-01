import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProductCard from "./ProductCard";


const FilteredProducts = () => {
  const products = useSelector(state => state.products.filteredProducts)
  const {type} = useParams()
  console.log('products', products)
  return (
    <div>
      <div className='pt-16'>
        <div className='pl-14'>
          <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none '>{type}</h1>
        </div>
        <div className='grid grid-cols-4 justify-items-center py-8 gap-12'>
          {products
            .filter((product) => product.type === type)
            .map((item, index) => (
              <div key={index}>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  text={item.text}
                  img={item.img}
                  price={item.price}
                  colors={item.color}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;