import React from 'react';
import SignUp from './containers/signUp';
import signUp from "./api/signUp";
import fligts from "./api/ticketList";
import BookYourTicket from './containers/BooKYourTicket'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      fligts: undefined
    };
    this.registerUser = this.registerUser.bind(this);
    this.logOut = this.logOut.bind(this);
   
  }

   registerUser = (e) => {
    const userdetail = signUp(e);
    this.setState({
      signUp: userdetail
    });
  }

  logOut() {
    this.setState({
      signUp: null
    });
  }

  componentWillUpdate()
  {   
    let apirespomse = localStorage.getItem('flights')
    if(!this.state.fligts && apirespomse) {
    this.setState({
      fligts : JSON.parse(apirespomse) })
    }
  }
  componentDidMount() {
    const  apirespomse = fligts();

    console.log('did mount ',apirespomse)
  }

  render() {
    return (
      <div>
        {this.state.signUp && <React.Fragment>
          <div class="header">
            <a href="#default" class="logo">Book Your Ticket</a>
            <div class="header-right">
              <a class="active" href="JavaScript:void(0);" onClick={this.logOut}>Log Out</a>

            </div>
          </div>

        </React.Fragment>}
        {!this.state.signUp && <SignUp onSubmit={this.registerUser} />}
        {this.state.signUp && <BookYourTicket fligts ={this.state.fligts}/>}
      </div>
    )
  }
}


export default App;

