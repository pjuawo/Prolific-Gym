import valuesimg from "../images/values3.png";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import Logo from "../images/logo.png";
import { values } from "../data.js";
import Card from "../UI/Card";

const Values = () => {
	return (
		<section className='values'>
			<div className='container values__container'>
				<div className='values__left'>
					<div className='values__image'>
						<img src={valuesimg} alt='Our Values' />
					</div>
				</div>
				<div className='values__right'>
					<SectionHead icon={<GiCutDiamond />} title='Values' />
					<p>Excellence in Motion: Striving for unparalleled gym experience.</p>
					<div className='values__wrapper'>
						{values.map(({ id, title, desc }) => {
							return (
								<Card className='values__value' key={id}>
									<span>
										<img src={Logo} alt='Nav Logo' />
									</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
