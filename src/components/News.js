
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router'

import NewsService from "../services/news/news.service";

class News extends Component {

  constructor(args){
    super(args)
    this.state = {redirect: false,   mmessage:'' }
    this.remove = this.remove.bind(this);
}
 


  remove(id){
    this.setState({message:'Excluindo....Aguarde...!'})
    NewsService.delete(id)
    .then(res => {
      this.setState({message:'Excluído com sucesso!'})
      this.props.dispatch({type:'DELETE_NEWS',_id:id});
    })
    .catch(e => console.error(e));
    this.setState({message:''})      
  }

  render() {
  return (
    <div className="post">
      <h2 className="post_title">{this.props.news.titulo}</h2>      
      <p className="post_message">{this.props.news.conteudo}</p>
      <p className="post_message">{this.props.news.data_publicacao}</p>
      <div className="control-buttons">
        <button className="edit"
        onClick={()=>this.props.dispatch({type:'EDIT_NEWS',_id:this.props.news._id})}>
        Edit</button>
        <button className="delete"
        onClick={()=>this.remove(this.props.news._id)}>
        Delete</button>
     </div>
    </div>
  );
 }
}
export default connect()(News);