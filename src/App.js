import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar from './SearchBar';

class App extends Component {
	constructor(props){
		// App is a subclass of Component. Therefore, we MUST include a super.
		super(props);
		this.state = {
			movies: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// I am special. I will run ONE time, before the first render.
	componentWillMount(){
		console.log("The component is about to mount.");
	}

	// I am special. I will run ONE time, after the first render.
	componentDidMount(){
		console.log("The component mounted.");
		var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			this.setState({
				movies: movieData.results
			});
		});
	}

	handleSubmit(searchValue){
		// var value = document.getElementById('searchTerm').value; // Ok to use jQuery, just DON'T mess with the DOM!
		// document.getElementById('searchTerm').value = "";
		console.log("Form submitted!");
		// console.log(value);
		var url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${searchValue}`;
		console.log(url);
		$.getJSON(url, (movieSearchData)=>{
			// We have the new movies. Update state.
			this.setState({
				movies: movieSearchData.results
			});
		});
	}

	render() {
		var postersArray = [];

		// First time through (when the component mounts), this.state.movies will be an empty array.
		this.state.movies.map((movie, index)=>{
			// postersArray.push(<Poster key={index} id={movie.id} overview={movie.overview} title={movie.title} poster={movie.poster_path} />)
			// When passing a lot of props, you can send the entire movie object.
			postersArray.push(<Poster key={index} movie={movie} />)
			return null; // To get the linter to shut up (it expects a return from map)...
		});

		// postersArray = this.state.movies.map((movie, index)=>{
		// 	return (<Poster key={index} id={movie.id} overview={movie.overview} title={movie.title} poster={movie.poster_path} />)
		// });

		return (
			<div className="App">
				<SearchBar onSubmit={this.handleSubmit} />
				{postersArray}
			</div>
		);
	}
}

export default App;
