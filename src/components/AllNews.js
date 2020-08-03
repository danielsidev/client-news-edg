
import React, { Component } from 'react';

import { connect } from 'react-redux';

import News from './News';

import EditComponent from './EditComponent';

import NewsService from "../services/news/news.service";

import { Redirect } from 'react-router'

class AllNews extends Component {

    state = {
        newsList: [],
        isLoading:true
      };

    componentDidMount() {
        NewsService.getAll().then(response =>{
            response.data.map( d => {
                const data = Object.assign(d, {editing:false});                
                this.props.dispatch({
                    type:'ADD_NEWS',
                    data});
                    this.setState({
                        isLoading:false
                    });
            });
       
        }).catch(e => {
        console.log(e);
        this.setState({
            isLoading:false
        });
      });
       
    }
  render() {
    return (
    <div>
      <h1 className="post_heading">Todas as Notícias</h1>
      {this.state.isLoading && <span>Loading...</span>}
      {/* {this.state.newsList.length > 0 && this.state.newsList.map(item => (                   
                         <div key={item._id}>
                         {item.editing ? <EditComponent news={item} key={item._id} /> :
                             <News key={item._id} news={item} />}
                     </div>
                    ))} */}
      {this.props.newsList.map((news) => (
                    <div key={news._id}>
                        {news.editing ? <EditComponent news={news} key={news._id} /> :
                            <News key={news._id} news={news} />}
                    </div>
                ))}
      
    </div>
    );
   }
   
}
const mapStateToProps = (state) => {
    return {
        newsList: state
    }
}

export default connect(mapStateToProps)(AllNews);
