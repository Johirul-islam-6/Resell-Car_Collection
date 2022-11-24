import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight, FaGoogleWallet, FaSpaceShuttle } from 'react-icons/fa';
import './home.css'
import useTitle from '../../hook/useTitle';
import SliderBanner from './SliderBanner';

const Home = () => {

    const [bannerImage, setBannerImage] = useState();
    useEffect(() => {
        fetch('servicess.json')
            .then(res => res.json())
            .then(data => setBannerImage(data))

    }, [])
    console.log(bannerImage);
    // ----Slider all image-----
    const [sliderImag, setImag] = useState([]);

    useEffect(() => {
        fetch('allimage.json')
            .then(res => res.json())
            .then(data => setImag(data))
    }, [])
    console.log(sliderImag)

    return (
        <>
            <section className='mb-0 h-[auto] mt-[62px] '>
                <div className="carousel w-full ">
                    {
                        bannerImage?.map((item, i) => <SliderBanner key={i} item={item}></SliderBanner>)
                    }

                </div>


                <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                    {
                        sliderImag?.map((img, i) => <img key={i} className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={img?.img} alt="Image 1" />)
                    }
                </div>
            </section>

        </>
    );
};

export default Home;