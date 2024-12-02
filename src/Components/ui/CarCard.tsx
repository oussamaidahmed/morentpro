import React from 'react'
import Image from 'next/image'


interface Car {
    id: number;
    type: string;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  interface CarCardProps {
    car: Car;
  }
export default function CarCard({car}:CarCardProps) {
    console.log(car);
  return (
    <div className='grid grid-rows-2'>
      <Image src={car.image} alt={car.title} width={200} height={200}/>
    </div>
  )
}
