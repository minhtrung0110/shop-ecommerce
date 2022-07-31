import { useState,useEffect ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Slider.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import BtnSlider from "./BtnSlider"
import dataSlider from "./dataSlider"



const cx=classNames.bind(style);

function Slider({arr_images}) {
	const [dataSlider,setDataSliders]=useState([])
	const [slideIndex, setSlideIndex] = useState(1)
	const timeoutRef = useRef(null);

	useEffect(()=>{
		fetch(`https://basic-json-server.herokuapp.com/api/sliders`)
		  .then((res) => res.json())
		  .then((data) => {
			setDataSliders(data)
			
		  });
	},[])
	//console.log(arr_images)
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
		  5500
		);
	
		return () => {
		  resetTimeout();
		};
	  }, [5500]);
    return ( 
	<div className={cx("container-slider main_slider")}>
		{dataSlider.map((obj, index) => {
			return (
				<div
				key={obj.id}
				className={cx('slide',slideIndex === index + 1 ? "active-anim" : " ")}
				style={{backgroundImage:`url(/images/sliders/${obj.img})`}}
				>
		<div class={cx("container","fill_height")}>
			<div class={cx("row","align-items-center","fill_height")}>
				<div class="col">
					<div class={cx("main_slider_content")}>
						<h6>{obj.name}</h6>
						<h1>{obj.description}</h1>
						<div class={cx("red_button","shop_now_button")}><a href="#">shop now</a></div>
					</div>
				</div>
			</div>
		</div>
					
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