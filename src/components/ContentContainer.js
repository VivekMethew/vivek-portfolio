import React from 'react';
import ImageProfile from '../assests/images/vivekp.jpg';

function ContentContainer() {
	return (
		<div className="main-content">
			<div className="about-self">
				<div className="profile-img">
					<img src={ImageProfile} alt="profile" />
				</div>
				<div className="about-text">
					<h2> Hey!... </h2>
					<p>
						Hi Everyone!!I 'm Vivek Kumar from Aligarh (U.P.) India where I work as a Full Stack Web
						Developer at Hivish Technology Pvt.Ltd.I use JS - based technologies for my development process
						that heavenly includes Node.js.At the frontend, I prefer to React but I am also comfortable with
						Vue. I have been working for the last 2 years and wanna continue forever.I love coding, it 's my
						profession, hobby, and passion. In my spare time, I💗 watching Movies on Netflix.I am also a
						Youtuber where I post videos on releated to javascript and nodejs content.So no to privacy, I
						will make more videos for implement games,blogs,some short solutions and some tutorials
						series...
						<br /> Here is the
						<a
							href="https://www.youtube.com/channel/UC_rD4hWKY6qSCN-lERY6GpQ/featured"
							target="_blank"
							style={{ color: 'white' }}
						>
							Youtube(Vivek Methew)
						</a>
						link.
					</p>
					<p> LIKE || SHARES || SUBSCRIBE </p>
					<p>
						Enjoy the content!!!I can see the games and technology within you😁.I also💗 Hot Coffee and
						sometimes Tea.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContentContainer;
