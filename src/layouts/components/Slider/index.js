import { useState,useEffect ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Slider.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import BtnSlider from "./BtnSlider"
import * as sliderService from '~/services/sliderService'



const cx=classNames.bind(style);

function Slider({arr_images}) {
	const [dataSlider,setDataSliders]=useState([])
	const [slideIndex, setSlideIndex] = useState(1)
	const timeoutRef = useRef(null);

		
	//console.log(dataSlider)
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

		const fetchApi = async () => {

			const result = await sliderService.getSliders();
			setDataSliders(result);
		};
		fetchApi();
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
		  1500
		);
	
		return () => {
		  resetTimeout();
		};
	  }, []);
    return ( 
	<div className={cx("main_slider")}>
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
						<div class={cx("red_button","shop_now_button")}><Link to={config.routes.shop}>shop now</Link></div>
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