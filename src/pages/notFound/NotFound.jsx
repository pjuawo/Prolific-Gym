import { Link } from "react-router-dom";
import NotFoundImage from "../../images/page-not-found-resting.png";

import "./notfound.css";

const NotFound = () => {
	return (
		<section>
			<div className='container notfound__container'>
				<div className='notfound__content'>
					<h2>Page Not Found</h2>
					<p>We're sorry! It Looks like this page is taking a rest day.</p>
					<Link to='/' className='btn'>
						Return to Home Page
					</Link>
				</div>
				<div className='notfound__img'>
					<img src={NotFoundImage} alt='Not Found resting' />
				</div>
			</div>
		</section>
	);
};

export default NotFound;
