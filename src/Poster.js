// The very first thing in most components is to import React.
import React, { Component } from 'react';

// I am a presentational component. I could have been in app.js,
// but it's cleaner if I'm over here.
class Poster extends Component{
	render(){
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;
		var moviePage = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
		return(
			<div className='col-sm-3 poster'>
				<a href={moviePage} target="_blank"><img src={imagePath} alt={this.props.movie.overview}/></a>
				<h4 className="movie-title">{this.props.movie.title}</h4><br />
			</div>
		)
	}
}

export default Poster;