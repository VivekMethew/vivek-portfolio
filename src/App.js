import React from 'react';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import SkillsContainer from './components/SkillsContainer';

function App() {
	return (
		<div>
			<HeaderContainer />
			<ContentContainer />
			<SkillsContainer />
			<Footer />
		</div>
	);
}

export default App;
