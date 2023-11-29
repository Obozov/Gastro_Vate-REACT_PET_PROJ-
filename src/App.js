import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
import Map from './Components/Main/map/map';
import List from './Components/Main/list/list';
import About from './Components/Main/about/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersContainer from './Components/Main/users/UsersContainer';
import AccountContainer from './Components/Main/account/accountContainer';

function App(props) {



	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				{/* hotRest={props.state.restsState.hotRest} */}
				<div className='app-wrapper-content'>
					<Routes>

						<Route path='/map' element={<Map />} />
						<Route path='/list/*' element={<List />} /> {/*dialogs  store={props.store}*/}
						<Route path='/about' element={<About />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/acc/:userId?' element={<AccountContainer />} /> {/*profile   store={props.store}*/}
						<Route path='/acc/' element={<AccountContainer />} /> {/*profile   store={props.store}*/}

					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>

	);

}

export default App;
