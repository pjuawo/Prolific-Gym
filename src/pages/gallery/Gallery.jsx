import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg3.jpg";
import "./gallery.css";

const Gallery = () => {
	const galleryLength = 15;
	const [images, setImages] = useState([]);

	useEffect(() => {
		const loadImages = async () => {
			const importedImages = [];

			for (let i = 1; i <= galleryLength; i++) {
				const image = await import(`../../images/gallery${i}.jpg`);
				importedImages.push(image.default);
			}

			setImages(importedImages);
		};

		loadImages();
	}, []);

	return (
		<>
			<Header title='Our Gallery' image={HeaderImage}>
				Experience the thrill of the Prolific Gym community with our gallery -
				where you'll see real people, real results, and real inspiration.
			</Header>

			<section className='gallery'>
				<div className='container gallery__container'>
					{images.map((image, index) => (
						<article key={index}>
							<img src={image} alt={`Gallery${index + 1}`} />
						</article>
					))}
				</div>
			</section>
		</>
	);
};

export default Gallery;
