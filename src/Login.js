
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router'
import NewsService from "./services/access/access.service";
class Login extends Component {

  constructor(args){
    super(args)
    this.state = {redirect: false,   mmessage:'' }
}
    handleSubmit =  (e) => {
        e.preventDefault();
        const email = this.getEmail.value;
        const password =  this.getPassword.value;
        const data = {
            email:email,
            password:password
          }
          this.setState({message:'Efetuando login...Aguarde.',  redirect: false});
            NewsService.login(data).then(res => {
              console.log(res)
              if(res.data.auth){
                localStorage.setItem('token_ed_globo',res.data.token);
                 this.setState({message:'Login correto!',redirect: true});
              }else{
                this.setState({message:'Login inválido!',  redirect: false});
                this.getEmail.value = '';
                this.getPassword.value = '';
              }
             
            }).catch(e => { 
              console.error(e);
              this.setState({message:'Login inválido!',  redirect: false});
              this.getEmail.value = '';
              this.getPassword.value = '';
            })
    }
render() {
  if(this.state.redirect) {
    return <Redirect to="/app/" />
  }


return (
<div className="post-container">
   <div>{this.state.message}</div>
  <h2 className="post_heading">Login</h2>
  <form className="form" onSubmit={this.handleSubmit}>
   <input required type="email" ref={(input)=>this.getEmail = input} placeholder="E-mail" /><br /><br />
   <input required type="password" ref={(input)=>this.getPassword = input} placeholder="Senha" /><br /><br />
   <button>Login</button>
  </form>
</div>

);
}
}
export default connect()(Login);

