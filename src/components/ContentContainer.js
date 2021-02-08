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
					<h2>Hey!...</h2>
					<p>
						Hi Everyone!! I'm Vivek Kumar from Aligarh (U.P.) India where I work as a Full Stack Web
						Developer at Chetu India Pvt. Ltd. I use JS-based technologies for my development process that
						heavenly includes Node.js. At the frontend, I prefer to React but I am also comfortable with Vue
						and Angular. I have been working for the last 2 years and wanna continue forever. I love coding,
						it's my profession, hobby, and passion. I would love to learn python in the future if I ever
						jump on ML and AI although I already tried Tensorflow.js in my current project and it works
						awesome with js. In my spare time, I 💗 watching shows on Netflix. I am also a Youtuber where I
						post videos on all the latest games launch for the PC. So no to piracy, I try to buy all of
						them.
						<br /> Here is the{' '}
						<a href="https://www.youtube.com/channel/UC_rD4hWKY6qSCN-lERY6GpQ/featured" target="_blank">
							Youtube(Vivek Methew)
						</a>{' '}
						link.
					</p>
					<p>LIKE || SHARES || SUBSCRIBE</p>
					<p>
						Enjoy the content!!! I can see the gamer within you 😁. I also 💗 Black Coffee with honey(weird
						but awesome) and sometimes Tea.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContentContainer;
