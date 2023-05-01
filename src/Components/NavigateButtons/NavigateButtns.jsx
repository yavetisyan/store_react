import React from 'react';
import {Button} from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import {useDispatch} from "react-redux";
import {filterProducts} from "../../features/slices/productsSlice";
import {Link} from "react-router-dom";

const NavigateButtns = () => {
  const dispatch = useDispatch()
  const buttons = [
    'Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags'
  ]

  return (
    <div>
      <div className='flex flex-wrap items-center justify-center py-8'>
        {buttons.map((button, index) => {
          return (
            <div key={index} className='mr-4'>
              <Link to={`/filteredProducts/${button}`}>
                <Button
                  color={"gray"}
                  size={'lg'}
                  variant={'outlined'}
                  ripple={true}
                  className='text-black hover:bg-gray-300 duration-500 ease-in-out mb-2'
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>

            </div>
          )
        })}
      </div>
      <div className='bg-black p-2 w-[55%] mx-auto rounded-md'>
        <h3 className='text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP
          TO 50%
        </h3>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600 object-cover' src={clothes}
             alt="clotes"/>
      </div>
    </div>

  );
};

export default NavigateButtns;