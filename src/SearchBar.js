import React, { Component } from 'react';
import $ from 'jquery';

class SearchBar extends Component{
	constructor(){
		super();

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event){
		event.preventDefault();
		this.props.onSubmit($('#searchTerm').val());
	}

	render(){
		return(
			<div className="col-sm-12 text-center">
				<form onSubmit={this.handleSearch}>
					<input id="searchTerm" type="text" placeholder="Movie Title" />
					<button type="submit" className="btn btn-primary">Search</button>
				</form>
			</div>
		)
	}
}

export default SearchBar;