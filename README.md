## Movie Search
This application allows a user to search for a movie by title and access its website through The Movie Database.

## Github Link:
[Movie Search](https://github.com/eddieatkinson/movie-es6-react)

## Technologies used:
**Languages**
* JavaScript
* HTML5
* CSS

**Frameworks**
* React

**Other**
* AJAX

## Code snippets:
Principle component:
``` javascript
class App extends Component {
  constructor(props){
    // App is a subclass of Component. Therefore, we MUST include a super.
    super(props);
    this.state = {
      movies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    console.log("Form submitted!");
    var url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${searchValue}`;
    console.log(url);
    $.getJSON(url, (movieSearchData)=>{
      this.setState({
        movies: movieSearchData.results
      });
    });
  }

  render() {
    var postersArray = [];

    this.state.movies.map((movie, index)=>{
      postersArray.push(<Poster key={index} movie={movie} />)
      return null; // To get the linter to shut up (it expects a return from map)...
    });

    return (
      <div className="App container-fluid">
        <SearchBar onSubmit={this.handleSubmit} />
        {postersArray}
      </div>
    );
  }
}

export default App;
```
Search bar Component:
``` javascript
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
      <div className="search-bar col-sm-12 text-center">
        <form onSubmit={this.handleSearch}>
          <input id="searchTerm" type="text" placeholder="Movie Title" />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
```
Movie poster component:
``` javascript
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
```
## Screenshots
