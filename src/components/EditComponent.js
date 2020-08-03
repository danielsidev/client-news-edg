import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import NewsService from "../services/news/news.service";
class EditComponent extends Component {

    constructor(args){
        super(args)
        this.state = {redirect: false,   mmessage:'' }
    }
 
    handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
        _id:this.props.news._id,
        titulo:newTitle,
        conteudo:newMessage,
    }
    this.setState({message:'Atualizando...Aguarde!'});
    NewsService.update(data._id, data)
    .then(res => {
        this.props.dispatch({ type: 'UPDATE', _id: this.props.news._id, data: data })
        this.setState({message:'Atualizado com sucesso!'});
    })
    .catch(e => console.error(e));
    this.setState({message:''});
    
    }
    render() {
        return (
        <div  key={this.props.news._id} className="post">
            <div>{this.state.message}</div>
        <form className="form" onSubmit={this.handleEdit}>
            <input required type="text" ref={(input) => this.getTitle = input}
            defaultValue={this.props.news.titulo} placeholder="Informe o Título" /><br /><br />
            <textarea required rows="5" ref={(input) => this.getMessage = input}
            defaultValue={this.props.news.conteudo} cols="28" placeholder="Informe a Notícia" /><br /><br />
            <button>Atualizar</button>
        </form>
        </div>
        );
    }
}
export default connect()(EditComponent);