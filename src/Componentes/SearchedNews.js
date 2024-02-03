import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import defaultImg from '../media/newsimg.jpg'
import InfiniteScroll from "react-infinite-scroll-component";
import SearchError from './SearchError';

export class SearchedNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
          articles: [],
          loading: false,
          page: 1,
          totalResults: 0,

        }
      }
    
    handleSearch = async () =>{
      this.props.setProgress(10)
        console.log(this.state.searchResult)
        const url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parseData = await data.json();
        this.props.setProgress(70)
        this.setState({
          articles: parseData.articles,
          totalResults: parseData.totalResults,
          loading: false,
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
      if (this.props.query !== ''){
        this.handleSearch()
      }
        
      }

    async componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
          this.setState({
            articles: [],
            totalResults: 0,
            loading: false,
            page:1,
          });
          if (this.props.query !== ''){
            this.handleSearch()
          }
        }
    }
    
      fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
          articles: this.state.articles.concat(parseData.articles),
          totalResults: parseData.totalResults,
        })
      };
    
  render() {
    return (
        <>
        <h1 className='text-center' style={{paddingTop:'4%'}}>News Chilli -Total Search results: {this.state.totalResults} for {this.props.query} </h1>
        {!this.state.loading && this.state.articles.length === 0  && <SearchError/> }
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
            <div className='row'>
              {this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage ? element.urlToImage : defaultImg}
                    newsUrl={element.url} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default SearchedNews