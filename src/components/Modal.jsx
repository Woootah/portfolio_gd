import React from 'react'

const Modal = ( { image, setIsClicked} ) => {

  const handleExit = () => {
    setIsClicked(false);
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <div className='fixed top-0 left-0 w-screen bg-black h-screen min-h-full flex justify-center items-center'>
        <div className="exit text-cwhite absolute right-3 top-3 md:right-5 md:top-5" onClick={handleExit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div className="scroll-img h-full">
            <div className="img-wrapper w-full h-full overflow-hidden">
                <img src={`images/${image.image}`} alt="" className='w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Modal
