
import classNames from "classnames/bind";
import styles from "./Shop.module.scss";
import {useEffect, useState} from "react";
import * as categoryService from "~/services/categoryService";
import * as productService from "~/services/productService";
import ProductItem from "~/components/ProductItem";
import {addProductCart} from "~/redux/action/actions";
import {useDispatch, useSelector} from "react-redux";
import {cartContextSelector} from "~/redux/selector/selectors";
import ListProductsLoader from "~/components/Loading/ListProduct";
import Pagination from "~/components/Pagination";


const cx = classNames.bind(styles);

function Shop() {
    const [categories,setCategories] = useState([])
    const [listProducts,setListProducts] = useState([])
    const [filter,setFilter]= useState('all')
    const [loading,setLoading] = useState(true)
    const [pagination,setPagination] = useState({
        "_page": 1,
        "_limit":8,
        "_totalRows": 100
    })

    const [filterGetProducts,setFilterGetProducts] = useState({
        "_page": 1,
        "_limit":8,
    })
    const handlePageChange=(newPage)=>{
        console.log(newPage)
        setFilterGetProducts({
            ...filterGetProducts,
            _page: newPage
        })
    }
    const dispatch = useDispatch()
    const yourCart=useSelector(cartContextSelector)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryService.getCategories();
            setCategories(result);
            const products = await productService.getAllProduct(filterGetProducts._page,filterGetProducts._limit);
            console.log(products)
            setListProducts(products.data);
            setPagination(products.pagination)
            setLoading(false)
        };
        fetchApi();
    },[filterGetProducts])
    const handleAddCart=(item) => {
        dispatch(addProductCart(item));
    }

    return (loading)? <ListProductsLoader style={{width:'100%' ,marginTop:'200px'}}  />:
    (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className={cx("section_title","list_products_title")}>
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
            <div className="row">
                <div className="col">
                    <Pagination pagination={pagination}  onPageChange={handlePageChange} />
                </div>
            </div>

        </div>



        );
}

export default Shop;