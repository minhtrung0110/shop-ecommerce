import classNames from "classnames/bind";
import styles from "./Arrivals.module.scss";
import {useState,useEffect,useRef} from "react"
import * as categoryService from '~/services/categoryService'
import * as productService from '~/services/productService'
import ProductItem from '~/components/ProductItem'
const cx = classNames.bind(styles);


function NewArrivals() {
	const [new_arrivals_category,setNew_Arrivals_Category] = useState([])
	const [new_arrivals,setNew_Arrivals] = useState([])
	const [filter,setFilter]= useState('all')

	useEffect(() => {
        const fetchApi = async () => {

            const result = await categoryService.getCategories();
			setNew_Arrivals_Category(result);
			const NewArrivals= await productService.getNewArrivals();
			setNew_Arrivals(NewArrivals);
        };
        fetchApi();
    },[])
	
    return (
        <div className="new_arrivals">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title new_arrivals_title">
						<h2>New Arrivals</h2>
					</div>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col text-center">
					<div className="new_arrivals_sorting">
						<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
						<li className={cx("grid_sorting_button","button","d-flex","flex-column","justify-content-center","align-items-center",
									`${filter==='all'?'active':''}`)}
									data-filter="*"
									onClick={()=>setFilter('all')}
									>all</li>
							{
								new_arrivals_category.map((item, index)=>(
									<li className={cx("grid_sorting_button","button","d-flex","flex-column","justify-content-center","align-items-center",
									`${filter==item.id?'active':''}`)} 
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
								new_arrivals.map((item, index)=>{
									//const category=new_arrivals_category.find((obj)=> obj.id===item.categoryId )
									
									return  <ProductItem product={item} 
									grid={3} key={index}
									data_filter={filter==='all'?true:item.categoryId===filter?true:false}
									//typeProduct={category.name}
									/>
								})
							}
					
					</div>
				</div>
			</div>
		</div>
	</div>
      );
}

export default NewArrivals;