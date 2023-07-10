import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
	return (
		<div>
			<MainHeader />
			<Programs />
			<Values />
			<FAQs />
			<Testimonials />
		</div>
	);
};

export default Home;
