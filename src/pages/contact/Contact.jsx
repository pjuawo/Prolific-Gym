import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
	return (
		<>
			<Header title='Get In Touch' image={HeaderImage}>
				Get in touch: Contact us today and start your journey to a healthier,
				happier you! <br />
				Stay upto date with health related news and events
			</Header>

			<section className='contact'>
				<div className='container contact__container'>
					<div className='contact__wrapper'>
						<a
							href='mailto:support@prolific.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<MdEmail />
						</a>
						<a
							href='https://m.me/prolific'
							target='_blank'
							rel='noopener noreferrer'
						>
							<BsMessenger />
						</a>
						<a
							href='https://wa.me/+27813603447'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
