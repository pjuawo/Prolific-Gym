import { Link } from "react-router-dom";
import MainHeaderImg from "../images/main_header1.png";

const MainHeader = () => {
	return (
		<header className='main__header' id='top'>
			<div className='container main__header-container'>
				<div className='main__header-left'>
					<h4>#HealthyMindHealthyBody</h4>
					<h1>Join the Prolific Gym Community and Be a Fitness Trailblazer</h1>
					<p>
						We're dedicated to helping you achieve your fitness goals, whatever
						they may be. Our state-of-the-art facilities, experienced trainers,
						and innovative classes will help you push yourself to the next
						level.
					</p>
					<Link to='/plans' className='btn lg'>
						Join Now!
					</Link>
				</div>
				<div className='main__header-right'>
					<div className='main__header-circle'></div>
					<div className='main__header-image'>
						<img src={MainHeaderImg} alt='Main Header' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
