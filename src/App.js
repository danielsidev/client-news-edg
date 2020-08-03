
import React, { Component } from 'react';
import NewsForm from './components/NewsForm';
import AllNews from './components/AllNews';
import { Redirect } from 'react-router'


class App extends Component {
  constructor(args){
    super(args)
    this.state = {redirect: false,   mmessage:'' }
  }

  componentDidMount() {
    const token = localStorage.getItem('token_ed_globo');
    console.log(`toke: ${token}`)
    if(!token || token=='null'){
      this.setState({message:'Logout!',redirect: true});
    }
  }
  logout = () =>{
    localStorage.removeItem('token_ed_globo');    
    this.setState({message:'Logout!',redirect: true});
  
  };
  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
    <div className="App">
        <div className="navbar">
          <h2 className="center ">Editora Globo</h2>
          <button className="sair"
        onClick={()=>this.logout()}>
        Sair</button>
        </div>
        <NewsForm />
        <AllNews />

    </div>
    );
    }
  }
export default App;
