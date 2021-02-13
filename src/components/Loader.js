import Loadergif from '../assests/images/loader1.gif';
function Loader() {
	return (
		<div className="loadBox">
			<img src={Loadergif} className="loaderGift" alt="Loader Image" />;
		</div>
	);
}

export default Loader;
