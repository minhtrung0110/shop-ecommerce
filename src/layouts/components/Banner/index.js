import { useState,useEffect ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Banner.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import * as categoryService  from '~/services/categoryService';
import BannerLoader from "~/components/Loading/Banner";

const cx=classNames.bind(style)


function Banner() {
    const [categories,setCategories]= useState([])
    const [loading,setLoading] =useState(true)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryService.getCategories();
            setCategories(result);
           setLoading(false)
        };
        fetchApi();
    },[])

    return  (loading)? <BannerLoader style={{width:'100%'}} />:
    ( <div class={cx("banner")}>
    <div class="container">
        <div class="row">
            {
                categories.map((item,idex)=>(
                    <div class="col-md-4" key={item.id}>
                    <div class={cx("banner_item","align-items-center")} 
                    style={{backgroundImage:`url(/images/banners/${item.img})`}}
                    >
                        <div class={cx("banner_category")} >
                            <Link to={`/products/${item.id}`}>{item.name}</Link>
                        </div>
                    </div>
                </div>
                ))
            }
          
        </div>
    </div>
</div> );
}

export default Banner;