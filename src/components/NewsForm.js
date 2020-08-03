
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import NewsService from "../services/news/news.service";
class NewsForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
       
        const titulo = this.getTitle.value;
        const conteudo =  this.getMessage.value;
        const data_publicacao = new Date().toISOString();
        const data = {
            id: new Date(),
            titulo,
            conteudo,
            data_publicacao,
            editing:false
          }          
          NewsService.create(data).then(res => {
            const data = Object.assign(res.data, {editing:false});                
                this.props.dispatch({
                    type:'ADD_NEWS',
                    data});
            this.getTitle.value = '';
            this.getMessage.value = '';
          }).catch(e=>{ console.error(e)});
        
      }
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Criar Notícia</h1>
  <form className="form" onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Informe o título" /><br /><br />
   <textarea required rows="5" ref={(input)=>this.getMessage = input}  cols="28" placeholder="Informe a notícia" /><br /><br />
   <button>Cadastrar</button>
  </form>
</div>

);
}
}
export default connect()(NewsForm);

