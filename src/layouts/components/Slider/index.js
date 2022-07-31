import { useState,useEffect ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Slider.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import BtnSlider from "./BtnSlider"
import dataSlider from "./dataSlider"



const cx=classNames.bind(style);

function Slider({arr_images=[],}) {
	const [slideIndex, setSlideIndex] = useState(1)
	const timeoutRef = useRef(null);

	function resetTimeout() {
	  if (timeoutRef.current) {
		clearTimeout(timeoutRef.current);
	  }
	}
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
		  () =>
		 {
			if(slideIndex !== dataSlider.length){
				setSlideIndex(slideIndex + 1)
			} 
			else if (slideIndex === dataSlider.length){
				setSlideIndex(1)
			}
		 },
		  2500
		);
	
		return () => {
		  resetTimeout();
		};
	  }, [slideIndex]);
    return ( 
		<div className={cx("container-slider main_slider")}>
		{dataSlider.map((obj, index) => {
			return (
				<div
				key={obj.id}
				className={cx('slide',slideIndex === index + 1 ? "active-anim" : " ")}
				>
					<img 
					className={cx('img')}
					src={process.env.PUBLIC_URL + `/images/sliders/slider_${index + 1}.jpg`} 
					/>
				</div>
			)
		})}
		<BtnSlider moveSlide={nextSlide} direction={"next"} />
		<BtnSlider moveSlide={prevSlide} direction={"prev"}/>

		<div className={cx("container-dots")}>
			{Array.from({length: 5}).map((item, index) => (
				<div 
				onClick={() => moveDot(index + 1)}
				className={cx('dot',slideIndex === index + 1 ? "active" : " ")}
				></div>
			))}
		</div>
	</div>

       
    );
}

export default Slider;