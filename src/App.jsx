import './App.css'
import hero from './images/illustration-hero.svg'
import icon from './images/icon-music.svg'
function App() {
  

  return (
    <>
    {/* Main container of the page */}
    <div  className='md:bg-hero-desktop bg-contain bg-no-repeat bg-hero-mobile flex justify-center   items-center mx-auto  h-[100vh]'>
      {/* Container of the card  */}
      <div className='flex flex-col w-[350px]  '>
        {/* Container for the Image  */}
        <div className='border'>
          <img className='rounded-t-[15px]' src={hero} alt="musci image" />
        </div>
        {/* Container for the Text */}
        <div className='bg-white rounded-b-[15px] p-4'>
          <div>
            <h1 className='text-[23px] text-center font-[900] my-4 text-dark-blue'>Order Summary </h1>
            <p className='text-center text-[16px] text-Desaturated-blue'>You can now listen to 
              millions of songs, audiobooks, and podcasts 
              on any device anywhere you like! </p>
          </div>
          {/* Container for the plan cost */}
          <div className=' bg-Very-pale-blue my-4 justify-between rounded-lg  p-4 flex'>
            <div className='flex '>
              <img src={icon} alt="" />
              <div className=' ml-4'>
                <h3 className=' text-dark-blue font-semibold'>Annual Plan</h3>
                <span className=' text-Desaturated-blue '>$59.99/year</span>
              </div>
            </div>
            <div className='flex justify-center   items-center'>
              <h1 className='font-[500] text-[15px] underline  text-blue-800 cursor-pointer '>Change</h1>
            </div>
          </div>
          {/* Container for the bottom */}
          <div className='flex flex-col my-4'>
            <button className='text-white p-4 rounded-[15px] hover:bg-bottom-hover font-bold drop-shadow-shadow-bottom bg-Bright-blue'>Proceed to Payment</button>
            <button className=' text-Desaturated-blue mt-6 font-[900] hover:text-dark-blue  '>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
