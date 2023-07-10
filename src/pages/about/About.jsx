import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
	return (
		<>
			<Header title='About Us' image={HeaderImage} id='top'>
				Join the fitness revolution at Prolific Gym - where we're dedicated to
				helping you crush your goals and unleash your inner athlete!
			</Header>

			<section className='about__story'>
				<div className='container about__story-container'>
					<div className='about__section-img'>
						<img src={StoryImage} alt='Our Story' />
					</div>
					<div className='about__section-content'>
						<h1>Our Story</h1>
						<p>
							At Prolific Gym, we believe that fitness is for everyone. Our
							story began with a passion for helping people achieve their
							fitness goals and lead healthier lives. Our founders, Giovanni and
							Nomsa, met while training for a marathon and quickly realized
							their shared vision for creating a gym that was welcoming,
							supportive, and affordable.
						</p>

						<p>
							With this vision in mind, they opened the doors to Prolific Gym in
							2021. From day one, our focus has been on providing top-quality
							facilities, expert guidance, and a friendly, inclusive environment
							for all members. We believe that fitness is a journey, and we're
							here to help our members every step of the way.
						</p>

						<p>
							We're proud to have built a community of people who are dedicated
							to achieving their fitness goals and supporting each other in the
							process.Thank you for choosing Prolific Gym as your fitness
							partner. We look forward to helping you achieve your goals and
							become the best version of yourself.
						</p>
					</div>
				</div>
			</section>

			<section className='about__vision'>
				<div className='container about__vision-container'>
					<div className='about__section-content'>
						<h1>Our Vision</h1>
						<p>
							At Prolific Gym, our vision is to be the premier destination for
							fitness enthusiasts who are looking to achieve their fitness
							goals. We strive to be a place where individuals can come together
							to form a supportive community, and where everyone is treated with
							respect and dignity.
						</p>

						<p>
							Our goal is to offer state-of-the-art facilities and cutting-edge
							equipment, coupled with a wide range of fitness programs and
							classes, to cater to the unique needs of our members. We believe
							in providing our members with a holistic approach to wellness,
							which not only includes physical fitness but also emotional and
							mental well-being.
						</p>
					</div>
					<div className='about__section-img'>
						<img src={VisionImage} alt='Our Vision' />
					</div>
				</div>
			</section>

			<section className='about__mission'>
				<div className='container about__mission-container'>
					<div className='about__section-img'>
						<img src={MissionImage} alt='Our mission' />
					</div>
					<div className='about__section-content'>
						<h1>Our Mission</h1>
						<p>
							At Prolific Gym, our mission is to empower our members to achieve
							their health and fitness goals by providing the highest quality
							facilities, programs, and services. We believe that fitness should
							be accessible to everyone, and we are committed to creating a
							welcoming, inclusive environment where everyone can feel
							comfortable and confident as they work towards their goals.
						</p>

						<p>
							Our team of experienced trainers and coaches are dedicated to
							providing personalized guidance and support to each and every
							member, whether they are new to fitness or seasoned athletes. We
							believe in a holistic approach to health and wellness, which
							includes not just physical fitness but also mental and emotional
							well-being.
						</p>

						<p>
							At Prolific Gym, we are passionate about helping people achieve
							their fitness goals and become the best version of themselves. Our
							mission is to provide the highest quality facilities and services
							to help our members achieve their full potential and live their
							best lives.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
