import FullStackImg from '../assests/images/fullstack.gif';
import Db from '../skill-db/db';

function SkillsContainer() {
	const db = Db();

	return (
		<div className="skill-box">
			<div className="container">
				<div className="row">
					<h1> My Skills </h1>
					<div className="col-lg-12">
						<div className="img-box fl-dev">
							<img src={FullStackImg} alt="imgs" />
						</div>
						<div className="text-skills">
							<h3> Full Stack Web Development </h3>
							<p className="fullstacktext">
								Web Development is what I am focused on, I design a website which is close to Material
								Design and Minimal Work.I focus on designing things that should be easy to use and
								implement.
							</p>
						</div>
					</div>
					{/* Skills */}
					{db.map((d) => {
						if (d.id % 2 === 0) {
							return (
								<div className="col-lg-12" key={d.id}>
									<div className="img-box">
										<img src={d.icon} alt="imgs" />
									</div>
									<div className="text-skills">
										<h4> {d.title} </h4>
										<p>{d.body}</p>
									</div>
								</div>
							);
						} else {
							return (
								<div className="col-lg-12" key={d.id}>
									<div className="text-skills">
										<h4> {d.title} </h4>
										<p>{d.body}</p>
									</div>
									<div className="img-box">
										<img src={d.icon} alt="imgs" />
									</div>
								</div>
							);
						}
					})}
					{/* End Skills */}
					<div className="contact-box">
						<h4> Get In Touch </h4>
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
