import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import avatar5 from "./images/avatar5.jpg";
import trainer1 from "./images/trainer1.jpg";
import trainer2 from "./images/trainer2.jpg";
import trainer3 from "./images/trainer3.jpg";
import trainer4 from "./images/trainer4.jpg";
import trainer5 from "./images/trainer5.jpg";
import trainer6 from "./images/trainer6.jpg";

export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Gallery",
		path: "/gallery",
	},
	{
		name: "Plans",
		path: "/plans",
	},
	{
		name: "Trainers",
		path: "/trainers",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export const programs = [
	{
		id: 1,
		title: "Personal Training Class",
		info: "Get one-on-one guidance and motivation from experienced trainers to create a customized workout plan tailored to your preferences.",
		path: "programs/111",
	},
	{
		id: 2,
		title: "Group Fitness Classes",
		info: "Join fun and challenging group classes led by certified instructors, including yoga, Pilates, HIIT or other exhilarating fitness sessions.",
		path: "programs/222",
	},
	{
		id: 3,
		title: "Nutrition Counseling",
		info: "Receive personalized nutrition guidance and support from our experts to help you make healthy choices and fuel your body for the optimal performance.",
		path: "programs/333",
	},
	{
		id: 4,
		title: "Functional Training",
		info: "Improve overall fitness and functionality through a wide range of exercises that mimic real-life movements, led by experienced trainers.",
		path: "programs/444",
	},
];

export const values = [
	{
		id: 1,
		title: "Commitment to Excellence",
		desc: "Providing the highest quality fitness programs, equipment, and facilities to help you achieve your goals.",
	},
	{
		id: 2,

		title: "Personalized Approach",
		desc: "Tailoring programs and services to meet individual needs and preferences.",
	},
	{
		id: 3,
		title: "Supportive Community",
		desc: "A welcoming and supportive community of like-minded individuals passionate about fitness and dedicated to helping each other succeed.",
	},
	{
		id: 4,
		title: "Innovation and Adaptability",
		desc: "Always looking for new and innovative ways to help members reach their full potential, and constantly adapting programs and services to stay at the forefront of the fitness industry.",
	},
];

export const faqs = [
	{
		id: 1,
		question: "What is the best time of day to work out?",
		answer:
			"The best time of day to work out is whenever it fits into your schedule and you can consistently stick to it. Ultimately, it's about finding a time that works best for you.",
	},
	{
		id: 2,
		question: "How often should I work out?",
		answer:
			"Aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week, spread out over at least three to five days.",
	},
	{
		id: 3,
		question: "Should I eat before or after a workout?",
		answer:
			"Eat a small meal or snack containing protein and carbohydrates about 30 minutes to an hour before exercising, and a meal or snack containing protein and carbohydrates within 30 minutes to an hour after exercising.",
	},
	{
		id: 4,
		question: "What should I wear to the gym?",
		answer:
			"Wear comfortable and breathable workout clothes that allow you to move freely, and supportive athletic shoes that are appropriate for your chosen activity.",
	},
];

export const testimonials = [
	{
		id: 1,
		name: "Emily, 20",
		quote:
			"As a busy student, finding time to work out is tough, but Prolific Gym's flexible hours and diverse range of equipment make it easy to fit a workout in whenever I can.",
		job: "Student",
		avatar: avatar1,
	},
	{
		id: 2,
		name: "George, 75",
		quote:
			"I never thought I'd be able to do a pull-up at my age, but the supportive trainers and customized workout plan at Prolific Gym have helped me achieve things I never thought were possible.",
		job: "Retired Engineer",
		avatar: avatar2,
	},
	{
		id: 3,
		name: "Sarah, 35",
		quote:
			"I've tried other gyms before, but Prolific Gym's luxury amenities and top-of-the-line equipment make it worth every penny. It's a true five-star experience",
		job: "University Lecturer",
		avatar: avatar3,
	},
	{
		id: 4,
		name: "Dr. Patel, 45",
		quote:
			"As a doctor, I know how important regular exercise is for overall health. That's why I trust Prolific Gym to help my patients achieve their fitness goals in a safe and effective way.",
		job: "Doctor",
		avatar: avatar4,
	},
	{
		id: 5,
		name: "Mike, 31",
		quote:
			"Prolific Gym's knowledgeable trainers and variety of equipment have helped me recover from a sports injury and get back to doing what I love",
		job: "Sportman",
		avatar: avatar5,
	},
];

export const plans = [
	{
		id: 1,
		name: "Bronze Package",
		desc: "This package perfect for individuals who are just starting their fitness journey ",
		price: 19.99,
		features: [
			{ feature: "Basic Fitness", available: true },
			{ feature: "Power Workout", available: true },
			{ feature: "Strength Builder", available: true },
			{ feature: "Elite Performance", available: false },
			{ feature: "Wellness Warrior", available: false },
			{ feature: "HIIT Intensity", available: false },
			{ feature: "Fitness Materials", available: false },
			{ feature: "Body Sculpting", available: false },
			{ feature: "Ultimate Fitness Experience", available: false },
		],
	},
	{
		id: 2,
		name: "Diamond Package",
		desc: "This package is designed for those who crave the ultimate workout experience",
		price: 29.99,
		features: [
			{ feature: "Basic Fitness", available: true },
			{ feature: "Power Workout", available: true },
			{ feature: "Strength Builder", available: true },
			{ feature: "Elite Performance", available: true },
			{ feature: "Wellness Warrior", available: true },
			{ feature: "HIIT Intensity", available: false },
			{ feature: "Fitness Materials", available: false },
			{ feature: "Body Sculpting", available: false },
			{ feature: "Ultimate Fitness Experience", available: false },
		],
	},
	{
		id: 3,
		name: "Platinum Package",
		desc: "It's designed for those who are committed to taking their fitness journey to the highest.",
		price: 49.99,
		features: [
			{ feature: "Basic Fitness", available: true },
			{ feature: "Power Workout", available: true },
			{ feature: "Strength Builder", available: true },
			{ feature: "Elite Performance", available: true },
			{ feature: "Wellness Warrior", available: true },
			{ feature: "HIIT Intensity", available: true },
			{ feature: "Fitness Materials", available: true },
			{ feature: "Body Sculpting", available: true },
			{ feature: "Ultimate Fitness Experience", available: true },
		],
	},
];

const Trainer1 = trainer1;
const Trainer2 = trainer2;
const Trainer3 = trainer3;
const Trainer4 = trainer4;
const Trainer5 = trainer5;
const Trainer6 = trainer6;

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
	{
		id: 2,
		image: Trainer2,
		name: "Dean Vinyo",
		job: "Group Fitness Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 3,
		image: Trainer3,
		name: "Angel Quist",
		job: "Nutrition Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 4,
		image: Trainer4,
		name: "Jewel Wale",
		job: "Rehabilitation Specialist",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 5,
		image: Trainer5,
		name: "Tiffanni Ayi",
		job: "Online Fitness Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 6,
		image: Trainer6,
		name: "AJ Dillan",
		job: "Physical Intelligence Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https:facebook.com/",
			"https://linkedin.com/",
		],
	},
];
