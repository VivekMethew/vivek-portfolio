import React from 'react';
import JavaImg from '../assests/images/java-script.png';
import ReatImg from '../assests/images/react.png';
import CssImg from '../assests/images/css-3.png';
import HtmlImg from '../assests/images/html5.png';
import FullStackImg from '../assests/images/fullstack.gif';

function SkillsContainer() {
	return (
		<div className="skill-box">
			<div className="container">
				<div className="row">
					<h1>My Skills</h1>

					<div className="col-lg-12">
						<div className="img-box fl-dev">
							<img src={FullStackImg} alt="imgs" />
						</div>
						<div className="text-skills">
							<h3>Full Stack Web Development</h3>
							<p className="fullstacktext">
								Web Development is what I am focused on, I design a website which is close to Material
								Design and Minimal Work. I focus on designing things that should be easy to use and
								implement.
							</p>
						</div>
					</div>

					<div className="col-lg-12">
						<div className="text-skills">
							<h4>Javascript</h4>
							<p>
								I love Javascript and I use it everywhere. Javascript has grown tremendously in the past
								4 to 5 years. And I make use of all of these New Technologies implemented using
								Javascript.
							</p>
						</div>
						<div className="img-box">
							<img src={JavaImg} alt="imgs" />
						</div>
					</div>

					<div className="col-lg-12">
						<div className="img-box">
							<img src={ReatImg} alt="imgs" />
						</div>
						<div className="text-skills">
							<h4>HTML</h4>
							<p>
								The Skeleton of a Website, We can think of a website without HTML and I find myself
								implementing it very easily to create content on the Internet.
							</p>
						</div>
					</div>

					<div className="col-lg-12">
						<div className="text-skills">
							<h4>CSS</h4>
							<p>
								I love Javascript and I use it everywhere. Javascript has grown tremendously in the past
								4 to 5 years. And I make use of all of these New Technologies implemented using
								Javascript.
							</p>
						</div>
						<div className="img-box">
							<img src={CssImg} alt="imgs" />
						</div>
					</div>

					<div className="col-lg-12">
						<div className="img-box">
							<img src={JavaImg} alt="imgs" />
						</div>
						<div className="text-skills">
							<h4>Javascript</h4>
							<p>
								I love Javascript and I use it everywhere. Javascript has grown tremendously in the past
								4 to 5 years. And I make use of all of these New Technologies implemented using
								Javascript.
							</p>
						</div>
					</div>

					{/* End Skills */}

					<div className="contact-box">
						<h4>Get In Touch</h4>
						<a href="mailto:vivekmethew8@gmail.com" className="c-btn">
							contact me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsContainer;
