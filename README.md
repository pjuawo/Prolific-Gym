# Prolific Gym | React Responsive Website

The Prolific Gym website is a comprehensive platform that provides visitors with valuable information about the gym's programs, values, and frequently asked questions. It consists of sections such as Programs, Values, and FAQ, along with pages like About, Plans, Gallery, Trainers, and Contact.

Overall, the Prolific Gym website is designed to provide an engaging and informative experience, helping potential members make informed decisions and showcasing the gym's commitment to excellence.

## Table of contents

- [Overview](#overview)
  - [The challenge](#user-experience)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### User Experience

Users should be able to:

- Responsive Layout: Users can enjoy an optimized website layout that adjusts to their device's screen size, ensuring a seamless browsing experience across different devices.

- Interactive Hover States: Users can experience interactive elements on the website, such as buttons or links, that visually respond when hovered over, providing feedback and enhancing interactivity.

- Effortless Navigation: The website offers seamless navigation, allowing users to easily explore all sections and pages. With intuitive menus and clear navigation options, users can effortlessly find the information they seek and access various features of the website.

- Toggle FAQs: Users can toggle and access the FAQ answers to common questions and concerns, helping them make informed decisions about joining Prolific Gym.

- View Gym Facilities: Visitors can explore the image gallery to view photos of Prolific Gym's state-of-the-art facilities, gaining an understanding of the gym's environment.

- Contact the Gym: Individuals interested in joining or seeking further information can easily contact Prolific Gym through provided social media handles, facilitating direct communication.

- External Link Access: Users have the ability to visit external links that provide access to additional resources such as blogs, case studies, events, and communities. These external links offer valuable content and opportunities for users to expand their knowledge, stay updated on industry trends, participate in events, and engage with like-minded individuals in the gym community.

### Screenshot

#### Desktop View

![](./src/images/Prolific_gym-desktop.png)

#

#### Mobile View

![](./src/images/Prolific_gym-mobile.png)

### Links

- Github URL: [Prolific Gym Repository](https://github.com/pjuawo/Prolific-Gym)
- Live Site URL: [Prolific Gym ](https://prolific-gym.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- React Components
- [Vite](https://vitejs.dev/) - Build tool and development server

## Vite Setup Info

Project Requirement

- [Nodejs](https://nodejs.org/) - JavaScript runtime environment
  - Node.js comes with a powerful package manager called Node Package Manager. NPM provides access to a vast ecosystem of open-source libraries and modules, enabling developers to easily incorporate pre-built solutions into their projects.
- Dependencies
  - react
  - react-dom
  - react-icons
  - react-router-dom

## Vite Installation Steps

- Open your terminal or command prompt.
- Ensure you have Node.js installed on your machine. You can check if Node.js is installed by running the following command:

  ```shell
  node -v
  ```

  If Node.js is not installed, download and install it from the official website: [https://nodejs.org](https://nodejs.org).

- Once you have Node.js installed, you can proceed with installing Vite globally. Run the following command:

  ```shell
  npm install -g create-vite
  ```

  This command installs Vite globally on your machine, making it accessible from any directory.

- Verify the installation by running the following command:

  ```shell
  create-vite --version
  ```

  This command should display the version number of Vite if the installation was successful.

- Create a new Vite project by navigating to the directory where you want to create the project. Run the following command:

  ```shell
  create-vite my-vite-project
  ```

  Replace "my-vite-project" with the desired name of your project.

- Change into the project directory:

  ```shell
  cd my-vite-project
  ```

- Install the project dependencies by running the following command:

  ```shell
  npm install
  ```

- Start the development server:
  ```shell
  npm run dev
  ```
  This command starts the Vite development server, and you can access your project at the provided local development URL (e.g., `http://localhost:3000`).

### What I learned

```jsx
import React from "react";

const Card = ({ className, children }) => {
	return <article className={`card ${className}`}>{children}</article>;
};

export default Card;
```

```jsx
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
	const [isAnswerShowing, setIsAnswerShowing] = useState(false);
	return (
		<article
			className='faq'
			onClick={() => setIsAnswerShowing((prev) => !prev)}
		>
			<div>
				<h4>{question}</h4>
				<button className='faq__icon'>
					{isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			{isAnswerShowing && <p>{answer}</p>}
		</article>
	);
};

export default FAQ;
```

```js
const scrollToTop = () => {
	window.scrollTo({
		top: -100,
		behavior: "smooth",
	});
};
```

```jsx
<Link to='/about' onClick={scrollToTop} className='footer__link'>
	About
</Link>
```

```jsx
<Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
	<h1 className='nav__logo'>
		Pr
		<img src={Logo} alt='Nav Logo' />
		lific&nbsp; <span> Gym</span>
	</h1>
</Link>
```

```jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

<ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
	{links.map(({ name, path }, index) => {
		return (
			<li key={index}>
				<NavLink
					to={path}
					className={({ isActive }) => (isActive ? "active-nav" : "")}
					onClick={() => setIsNavShowing((prev) => !prev)}
				>
					{name}
				</NavLink>
			</li>
		);
	})}
</ul>;
```

```js and jsx
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
};
```

```jsx
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
```

```js
export const trainers = [
	{
		id: 1,
		image: Trainer1,
		name: "Giovanni Juawo",
		job: "Personal Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
];
```

```js
<div className='container trainers__container'>
	{trainers.map(({ id, image, name, job, socials }) => {
		return (
			<Trainer
				key={id}
				image={image}
				name={name}
				job={job}
				socials={[
					{ icon: <BsInstagram />, link: socials[0] },
					{ icon: <AiOutlineTwitter />, link: socials[1] },
					{ icon: <FaFacebookF />, link: socials[2] },
					{ icon: <FaLinkedinIn />, link: socials[3] },
				]}
			/>
		);
	})}
</div>
```

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
```

```css
--container-width-lg: 80%;
--container-width-md: 90%;

.container {
	width: var(--container-width-lg);
	max-width: 1920px;
	margin-inline: auto;
}

@media screen and (max-width: 1024px) {
	.container {
		width: var(--container-width-md);
	}
}
```

```css
.footer__container {
	display: grid;
	grid-template-columns: 26rem 1fr 1fr 1fr;
	gap: 6rem;
}
```

```css
.card:hover span {
	background: var(--clr-primary);
	color: var(--clr-gray-600);
	border: 1px solid var(--clr-secondary);
}
```

### Continued development

- CSS Grid and Flexbox
- JS destructuring and map
- React components - create and reuse them
- React folder structure and organisation
- React hooks eg useState and
- React routing

### Useful resources

- [React Icons](https://react-icons.github.io/react-icons/) - This helped me to choose from a vast collection of icons.React Icons also helped me to apply styling and customization directly to the icon components using CSS styles.

- Free Image Resources
  - [Pexels](https://www.pexels.com/)
  - [Unsplash](https://www.unsplash.com/)
  - [Freepik](https://www.freepik.com/)

These resources offer a vast collection of free high quality images that helped enhance the visual appeal of my website.

- [Remove Image Background](https://www.remove.bg/) -This tool helped me to remove image backgrounds easily, enabling a cleaner and more visually appealing presentation of my website's visuals.

- [Tiny Image - Image Compression](https://tinypng.com/) - This image compression tool helped me to shrink images for my website without loosing image quality since is uses a special smart loosy compression technic. It helped me to use less bandwidth and the site to load faster.

- [Chatgpt](https://chatgpt.com/) - This ai helped me by providing valuable assistance in generating content for my website. It offered suggestions, ideas, and responses to help me develop engaging and informative website content.It also enabled me to save time in the content creation process.

- [Color Palettes](https://coolors.co/) - This helped me to select the best color combination for my website.

## Author

- Website - [Parick Juawo](https://patrickjuawo-portfolio.netlify.app/)
- Twitter - [@pjuawo](https://www.twitter.com/pjuawo)
- Facebook - [@pjuawo](https://www.facebook.com/pjuawo)
- Email - [@pjuawo](https://mailto:pjuawo@gmail.com)

## Acknowledgments

- External links
  - [Fitness Blogs](https://www.glofox.com/blog/fitness-blogs/)
  - [Fitness Case Studies](https://m8group.co.uk/case-studies/)
  - [Fitness Events](https://capturefit.co.za/events)
  - [Fitness Communities](https://www.makeuseof.com/online-fitness-communities/)
