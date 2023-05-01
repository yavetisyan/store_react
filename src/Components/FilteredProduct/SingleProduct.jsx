import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Tooltip} from "@material-tailwind/react";
import {addToCart} from "../../features/slices/cartSlice";

const SingleProduct = () => {
  const product = useSelector(state => state.products.singleProduct)
  const {id} = useParams()
  const dispatch = useDispatch()
  const productSize = product[0].size ? product[0].size[0] : ''
  const productColor = product[0].color ? product[0].color[0] : ''
  const [size, setSize] = useState(productSize)
  const [color, setColor] = useState(productColor)
  
  
  console.log(color)
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => (
          <div
            key={index}
            className='flex justify-center items-center py-10'
          >
            <div className='pl-44 grow-[2]'>
              <img
                className='h-[850px] rounded-lg'
                src={item.img}
                alt={item.name}/>
            </div>
            <div className='grow-[3]'>
              <div className='max-w-lg'>
                <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>
                  {item.name}
                </h5>
                
                <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                  15% OFF
                </p>
                <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                  {item.text}
                </p>
                <div className='pb-4'>
                  {item.size ? (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        name="size"
                        id="size"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        {item?.size?.map((size) => (
                          <option value={size} key={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                
                <div className='pb-4'>
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a color
                  </label>
                  <select
                    name="color"
                    id="color"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  >
                    {item?.color?.map((color) => (
                      <option value={color} key={color}>{color}</option>
                    ))}
                  </select>
                </div>
                <Tooltip content="Add to Cart" placement='bottom'>
                  <Button
                    variant="outlined"
                    ripple={true}
                    color='gray'
                    size='lg'
                    className='hover:bg-gray-300 text-black duration-500 ease-in-out'
                    onClick={() => dispatch(addToCart({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                      text: item.text,
                      size: size,
                      color: color,
                      price: item.price,
                      amount: 1,
                      totalPrice: item.price,
                    }))}
                  
                  >
                    Add to Cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};


export default SingleProduct;