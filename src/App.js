import { useState } from 'react';
import Loader from './components/Loader';
import Home from './pages/Home';
function App() {
	const [isLoading, setLoging] = useState(false);
	setTimeout(() => {
		setLoging(true);
	}, 1200);
	return <>{!isLoading ? <Loader /> : <Home />}</>;
}

export default App;
