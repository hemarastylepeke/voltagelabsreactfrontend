import styles from '../style';
import { discount, banner } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section id='about' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'> Get a Free </span>
            <span className='com-color'> .com </span>
            <span className='text-white'> Domain For </span>
            <span className='text-white'> 1 Year </span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-barlow font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Bring <br className='sm:block hidden'/>
          {" "}
          <span className='text-gradient'>Your Idea,</span>
          {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 animate-vertical'><GetStarted/></div>
        </div>
        <h1 className='font-barlow font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          We’ll handle the rest.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elevate your digital footprint with Voltage labs, a leading <strong>web development agency</strong> empowering 
          businesses for success in the online world.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={banner} alt="design" className='w-[100%] h-[100%] relative z-[5] animate-vertical mr-0 md:mr-[70px] md:ml-0 ml-[7px]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 top-0 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter} animate-vertical`}>
        <GetStarted />
      </div>
    </section>
  )

export default Hero