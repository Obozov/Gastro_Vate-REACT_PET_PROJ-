import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
import Map from './Components/Main/map/map';
import List from './Components/Main/list/list';
import About from './Components/Main/about/about';
import RevSup from './Components/Main/rev/reviews';
import Commerce from './Components/Main/commerce/commerce';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {



	return (
		<BrowserRouter>
			<div className="App">
				<Header hotRest={props.state.hotRest} />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/map' element={<Map />} />
						<Route path='/list/*' element={<List restsData={props.state.restsData} />} />
						<Route path='/about' element={<About />} />
						<Route path='/revSup' element={<RevSup />} />
						<Route path='/commerce' element={<Commerce
							newRestText={props.state.newRestText}
							addRest={props.addRest}
							updateNewRestText={props.updateNewRestText} 
							/>} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);

}

export default App;
