import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsiteam from './Newsiteam';
import Spinnner from './Spinnner' ;
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps ={
        page: 5,
        category: "general",
        country :"in",
        
    }
    static propTypes ={
        page : PropTypes.number,
        category: PropTypes.string,
        country: PropTypes.string,
    }
    cap = (strig)=>{
        return strig.charAt(0).toUpperCase() + strig.slice(1);
    }
     constructor(props){
    super(props);
    console.log("hello ");
    this.state ={
        articles: [],
        loadig: false,
        pag : 1,
        // tt = 0
    }
    document.title = `${this.cap(this.props.category)} - News`;
    }
    async upded(){
        this.props.setp(0);
        console.log("render")
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ea725d81304262a61298e69cb47055&page=${this.state.pag}&pageSize=${this.props.page}`;
        this.setState({loadig: true});
        let data =  await fetch(url);
        let p = await data.json()
        
        this.setState({articles: p.articles,
            tt: p.tt,
            loadig: false})
            console.log(p);
        this.props.setp(100);
    }
  async componentDidMount(){
    this.upded();
}
   nn = async()=>{
    
    this.setState({pag: this.state.pag +1});
    this.upded();
   }
   pp = async()=>{
    
    
    this.setState({pag: this.state.pag -1});
    this.upded();
   }
   fetchMoreData = async () => {
    this.setState({pag: this.state.pag +1})
    console.log("render")
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ea725d81304262a61298e69cb47055&page=${this.state.pag}&pageSize=${this.props.page}`;
        // this.setState({loadig: true});
        let data =  await fetch(url);
        let p = await data.json()
        
        this.setState({articles: this.state.articles.concat(p.articles),
            tt: p.tt,
            })
        
  };
  render() {

    return (<>
        <div className="container my-3" style={{width:'100%'}}>
        <h1 className="text-center" style={{margin:'30px 0px'}}>News - Top {this.cap(this.props.category)} Headlines</h1>
        {this.state.loadig && <Spinnner />}
         <InfiniteScroll
           dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.tt}
          loader={<Spinnner/>}
        > 
            <div className="col-md-4" style={{width:'100%'}}>
        <div className="row">
        {this.state.articles.map((el)=>{
             return <div className="col-md-4"><Newsiteam title={el.title?el.title:""} description={el.description?el.description:""} imgurl={el.urlToImage} newsUrl={el.url} author={el.author} date={el.publishedAt} source={el.source.name}/></div>
        })}
        
        </div>

        </div>
        
        
         
        </InfiniteScroll> 
        </div>
        </>
        
    )
  }
}

export default News
