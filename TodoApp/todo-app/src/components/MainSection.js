import React, { useEffect, useState } from 'react'
import {ImageData} from '../images/ImagesData';
import {FaArrowCircleRight} from 'react-icons/fa';
import {FaArrowCircleLeft} from 'react-icons/fa';


const MainSection = () => {


    const images = ImageData;
   // console.log(images[0].image.url)
    const sliderLenght = images.length;

    const [sliderIndex,setSliderIndex] = useState(0);
    const [sliderImage,setSliderImage] = useState(images[0].image.url);
   
    
    useEffect(() => {
        const interval = setInterval(nextSlide,5000);

        return () => {
            clearInterval(interval);
        }
    },[sliderImage,sliderIndex])
    const nextSlide = () =>{

        setSliderIndex( (prev) => prev >= sliderLenght-1 ? 0:prev+1 );

        setSliderImage( (prev) => prev=images[sliderIndex].image.url);

        // console.log(sliderImage);
        // console.log(sliderIndex)
          
    }
    const prevSlide = () => {
        setSliderIndex( (prev) => prev<=0?sliderLenght-1:prev-1 );

        setSliderImage( (prev) => prev=images[sliderIndex].image.url);
    }

    return (
        <section className="main-section-container">
            <img src = {sliderImage} alt="asd"></img>
          <div className="main-section-slider-buttons">
          <FaArrowCircleLeft className="arrow-left-button slide-btn" onClick={prevSlide}>Prev Slide</FaArrowCircleLeft>
            <FaArrowCircleRight className="arrow-right-button slide-btn" onClick={nextSlide}>Next Slide</FaArrowCircleRight>
           
          </div>

        </section>
    )
}

export default MainSection
