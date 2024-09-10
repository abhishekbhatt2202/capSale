import React from 'react'

function Gallery() {
  return (
    <>
    <div>
        <h3 className='text-center py-3 font-bold text-2xl'>#INSTAGRAM</h3>
    </div>

    <div className='mx-16 grid grid-rows-3 grid-cols-6 gap-2 bg-gray-500'>
    <img src="/img/image1.jpg" alt="" />
    <img src="/img/image2.jpg" alt="" />
    <img src="/img/image3.jpg" alt="" />
    <img className='row-span-2 col-span-2' src="/img/image4.jpg" alt="" />
    <img src="/img/image5.jpg" alt="" />
    <img className='row-span-2 col-span-2' src="/img/image1.jpg" alt="" />
    <img src="/img/image2.jpg" alt="" />
    <img src="/img/image3.jpg" alt="" />
    <img src="/img/image4.jpg" alt="" />
    <img src="/img/image5.jpg" alt="" />
    <img src="/img/image1.jpg" alt="" />
    <img src="/img/image2.jpg" alt="" />
    </div>
    </>
  )
}

export default Gallery