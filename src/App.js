import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
import Map from './Components/Main/map/map';
import List from './Components/Main/list/list';
import About from './Components/Main/about/about';
import Rev_Sup from './Components/Main/rev/reviews';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {



	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/map' element={<Map />} />
						<Route path='/list/*' element={<List restaurantsData={props.restaurantsData}  />} />
						<Route path='/about' element={<About />} />
						<Route path='/rev_sup' element={<Rev_Sup />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);

}

export default App;
