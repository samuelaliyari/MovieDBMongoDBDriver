const MovieCards = ({ movie }) => {
	return (
		<section>
			<img
				src={
					movie.poster?.replace('http:', 'https:') ||
					'https://images.template.net/wp-content/uploads/2017/02/17221912/Printable-Blank-Movie-Poster.jpg'
				}
				alt=''
			/>
			<h5>{movie.title}</h5>
		</section>
	);
};

export default MovieCards;
