import classNames from "classnames/bind";
import styles from "./Blog.module.scss";


const cx = classNames.bind(styles);

function Blog() {
    return ( 
		<div class="col-lg-4 blog_item_col">
		<div class="blog_item">
			<div class="blog_background" style="background-image:url(images/blog_1.jpg)"></div>
			<div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
				<h4 class="blog_title">Here are the trends I see coming this fall</h4>
				<span class="blog_meta">by admin | dec 01, 2017</span>
				<a class="blog_more" href="#">Read more</a>
			</div>
		</div>
	</div>
     );
}

export default Blog;