
import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import {useEffect, useState} from "react";
import * as categoryService from "~/services/categoryService";
import * as productService from "~/services/productService";
import ProductItem from "~/components/ProductItem";
import {addProductCart} from "~/redux/action/actions";
import {useDispatch, useSelector} from "react-redux";
import {cartContextSelector} from "~/redux/selector/selectors";


const cx = classNames.bind(styles);

function Home() {
    const [categories,setCategories] = useState([])
    const [listProducts,setListProducts] = useState([])
    const [filter,setFilter]= useState('all')
    const dispatch = useDispatch()
    const yourCart=useSelector(cartContextSelector)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryService.getCategories();
            setCategories(result);
            const NewArrivals= await productService.getAllProduct();
            setListProducts(NewArrivals);
        };
        fetchApi();
    },[])
    const handleAddCart=(item) => {
        dispatch(addProductCart(item));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="section_title new_arrivals_title">
                        <h2>List Products</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">

                <div className="col text-center">
                    <div className="new_arrivals_sorting" >
                        <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                            <li className={cx("grid_sorting_button","button","d-flex","flex-column","justify-content-center","align-items-center",
                                `${filter==='all'?'active':''}`)}
                                data-filter="*"
                                onClick={()=>setFilter('all')}
                            >all</li>
                            {
                                categories.map((item, index)=>(
                                    <li className={cx("grid_sorting_button","button","d-flex","flex-column","justify-content-center","align-items-center",
                                        `${filter===item.id?'active':''}`)}
                                        data-filter="*"
                                        key={index}

                                        onClick={()=>{ setFilter(item.id)}}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="product-grid row" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>


                        {
                            listProducts.map((item, index)=>{
                                const itemCart= {
                                    categoryId: item.categoryId,
                                    color: item.color,
                                    description: item.description,
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                    thumbnailUrl: item.thumbnailUrl
                                }
                                return  <ProductItem product={item}
                                                     grid={3} key={index}
                                                     data_filter={filter==='all'?true:item.categoryId === filter}
                                                     onClick={()=>{handleAddCart(itemCart)}}
                                />
                            })
                        }

                    </div>
                </div>
            </div>

        </div>



        );
}

export default Home;