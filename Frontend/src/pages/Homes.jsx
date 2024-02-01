import { useEffect, useState } from 'react';
import MovieCards from '../components/MovieCard';

const Home = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const fetchData = await fetch('http://localhost:3000/movies');
			const { success, result, error } = await fetchData.json();
			if (!success) console.log(error);
			else setMovies(result);
		};
		fetchData();
	}, []);
	console.log(movies);
	return (
		<main>
			<h1>ALL MOVIES</h1>
			<section className='list'>
				{movies?.map((movie, index) => (
					<MovieCards
						key={index}
						movie={movie}
					/>
				))}
			</section>
		</main>
	);
};

export default Home;
