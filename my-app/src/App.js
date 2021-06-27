import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
	return (
		<Router>
			
				<Header />
				<Home />

		</Router>
	);
}

export default App;
