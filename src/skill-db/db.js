import JSImg from '../assests/images/java-script.png';
import ReactImg from '../assests/images/react.png';
import CssImg from '../assests/images/css-3.png';
import HtmlImg from '../assests/images/html5.png';
import nodeJS from '../assests/images/ndf.png';

function db() {
	return [
		{
			id: 1,
			title: 'Javascript',
			body:
				'I love Javascript and I use it everywhere. Javascript has grown tremendously in the past 4 to 5 years. And I make use of all of these New Technologies implemented using Javascript.',
			icon: JSImg,
		},
		{
			id: 2,
			title: 'Node JS',
			body:
				'Since I love Javascript then why not Node.js. Easy to implement on the backend with Express.js, Node.js is now the most popular backend language made using Javascript well almost (hey you c++). Using NPM I can install many packages to make my life easier while developing apps. Creating APIs is just writing a few lines of code with Express. Just turn up your server, create routes and controller folder and start developing your endpoints. I also love Ejs when the preference is just to use Node for everything.',
			icon: nodeJS,
		},
		{
			id: 3,
			title: 'React JS',
			body:
				'I love React. I think React is the best frontend framework ever developed. It makes my work very easy and comfortable by dividing every part of my website into components. Then Real-time updates, side effects, virtual dom, styling is fun. React is awesome.',
			icon: ReactImg,
		},
		{
			id: 4,
			title: 'HTML',
			body:
				'The Skeleton of a Website, We can think of a website without HTML and I find myself implementing it very easily to create content on the Internet.',
			icon: HtmlImg,
		},
		{
			id: 5,
			title: 'CSS',
			body:
				'If HTML is a skeleton then CSS is the skin of the skeleton. Designing websites is what shows your creativity level and I try to do my best with that. I also use technology like Bootstrap 4 and Materialize CSS to design my websites.',
			icon: CssImg,
		},
	];
}

export default db;
