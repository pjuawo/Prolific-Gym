import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const scrollToTop = () => {
	window.scrollTo({
		top: -100,
		behavior: "smooth",
	});
};

const Footer = () => {
	return (
		<footer>
			<div className='container footer__container'>
				<article>
					<Link to='/'>
						<h1 className='nav__logo'>
							Pr
							<img src={Logo} alt='Footer Logo' className='logo' />
							lific&nbsp; <span> Gym</span>
						</h1>
					</Link>
					<p>
						We're dedicated to helping you achieve your fitness goals, whatever
						they may be.Our state-of-the-art facilities, experienced trainers,
						and innovative classes will help you push yourself to the next
						level.
					</p>
					<div className='footer__socials'>
						<a
							href='http://linkedin.com/pjuawo'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin />
						</a>
						<a
							href='http://facebook.com/pjuawo'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaFacebookF />
						</a>
						<a
							href='http://twitter.com/pjuawo'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiOutlineTwitter />
						</a>
						<a
							href='http://instagram/pjuawo'
							target='_blank'
							rel='noopener noreferrer'
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>

				<article>
					<h4>Permalinks</h4>
					<Link to='/about' onClick={scrollToTop} className='footer__link'>
						About
					</Link>
					<Link to='/plans' onClick={scrollToTop} className='footer__link'>
						Plans
					</Link>
					<Link to='/trainers' onClick={scrollToTop} className='footer__link'>
						Trainers
					</Link>
					<Link to='/gallery' onClick={scrollToTop} className='footer__link'>
						Gallery
					</Link>
					<Link to='/contact' onClick={scrollToTop} className='footer__link'>
						Contact
					</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link
						to='https://www.glofox.com/blog/fitness-blogs/'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'
					>
						Blog
					</Link>
					<Link
						to='https://m8group.co.uk/case-studies/'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'
					>
						Case Study
					</Link>
					<Link
						to='https://capturefit.co.za/events'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'
					>
						Events
					</Link>
					<Link
						to='https://www.makeuseof.com/online-fitness-communities/'
						target='_blank'
						rel='noopener noreferrer'
						className='footer__link'
					>
						Communities
					</Link>
					<Link to='/#faq-section' className='footer__link'>
						FAQs
					</Link>
				</article>
				<article>
					<h4>Get in Touch</h4>

					<Link to='/contact' onClick={scrollToTop} className='footer__link'>
						Contact Us
					</Link>
					<Link to='/contact' onClick={scrollToTop} className='footer__link'>
						Support
					</Link>
				</article>
			</div>
			<div className='footer__copyright'>
				<small>2023 | Prolific Gym | &copy; All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
