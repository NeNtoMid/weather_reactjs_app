import Layout from './hoc/Layout/Layout';

import Weather from './containers/Weather/Weather';

import Header from './components/Header/Header';

const App = () => {
	return (
		<Layout>
			<Header />
			<Weather />
		</Layout>
	);
};

export default App;
