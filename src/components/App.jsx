import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from './Api/Api';


class App extends Component{
    state = {
      images: [],
      selectedImage: null,
      searchQuery: '',
      currentPage: 1,
  };
  
    handleSearchSubmit = async (query) => {
    try {
      const data = await fetchImages({ query, currentPage: 1 });

      this.setState({
        images: data.hits,
        searchQuery: query,
        currentPage: 1,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  
  render() {

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        
      </div>
    );
  }
}

export  {App};