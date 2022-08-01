import classNames from "classnames/bind";
import styles from "./Arrivals.module.scss";
import {useState,useEffect} from "react"
import * as categoryService from '~/services/categoryService'
import * as productService from '~/services/productService'
import ProductItem from '~/components/ProductItem'
const cx = classNames.bind(styles);


function NewArrivals() {
	const [new_arrivals_category,setNew_Arrivals_Category] = useState([])
	const [new_arrivals,setNew_Arrivals] = useState([])
	useEffect(() => {
        const fetchApi = async () => {

            const result = await categoryService.getCategories();
			setNew_Arrivals_Category(result);
			const NewArrivals= await productService.getNewArrivals();
			setNew_Arrivals(NewArrivals);
        };
        fetchApi();
    },[])
	console.log(new_arrivals_category)
    return (
        <div class="new_arrivals">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<div class="section_title new_arrivals_title">
						<h2>New Arrivals</h2>
					</div>
				</div>
			</div>
			<div class="row align-items-center">
				<div class="col text-center">
					<div class="new_arrivals_sorting">
						<ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
						<li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" 
									data-filter="*">all</li>
							{
								new_arrivals_category.map((item, index)=>(
									<li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center  is-checked" 
									data-filter="*"
									key={index}>
										{item.name}
										</li>
								))
							}						
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
						
							{
								new_arrivals.map((item, index)=>(
									<ProductItem product={item} key={index}/>
								))
							}
					
					</div>
				</div>
			</div>
		</div>
	</div>
      );
}

export default NewArrivals;