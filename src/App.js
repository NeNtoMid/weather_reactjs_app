import Layout from './hoc/Layout/Layout';

import Weather from './containers/Weather/Weather';

import Header from './components/UI/Header/Header';

import DiscreteSlider from './containers/DiscreteSlider/DiscreteSlider';

const App = () => {
	return (
		<Layout>
			<Header />
			<Weather />
			<DiscreteSlider />
		</Layout>
	);
};

export default App;
