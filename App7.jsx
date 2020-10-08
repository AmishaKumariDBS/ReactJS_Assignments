import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'
import Signin from "./Signin.jsx"
import Employee from "./Employee.jsx"
class App7 extends Component {
    render () {
        return (
          <Router history={browseHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='address' component={Address}>
             <IndexRoute component={Twitter}/>
             <Route path="instagram(/:name)" component={Instagram}/>
              </Route>
              <Route path='register' component={Register}>
             <IndexRoute component={Signin}/>
             <Route path="signup" component={Signup}/>
              </Route>
              <Route path='*' component={NotFound} />
            </Route>
          </Router>
        )
      }
}
const Instagram = (props) => <h1>Greetings from Instagram {this.state.name} </h1>
const Twitter = () => <h1>Twitter!</h1>
const Signin = () => 
<Signin></Signin>
const Signup = () =><div>
<table style="background-color:white; opacity:0.5;"cellspacing="3" celllpading="3">
		<tr><td>                          </td></tr>
		<tr><td>NAME</td><td><input type="text" pattern="[a-zA-Z]" name="name" value=""/></td></tr>
        <tr><td>AGE</td><td><input type="number" min="18" name="age" value=""/></td></tr>
        <tr><td>EMAIL</td><td><input type="email" name="email" value=""/></td></tr>
        <tr><td><input style="background:brown;"type="button" name="" value="signup" /></td></tr>                        
</table>
<h1>New User?</h1></div>
const Home = () => <h1>Hello from Home!</h1>
const Address = (props) =>
<div>
    <br></br>
    <Link to="/address">Twitter feed</Link>
    <Link to="/address/instagram">Insta feed</Link>
    {props.children}
</div>
const Register = (props) =>
<div>
    <br></br>
    <Link onlyActiveOnIndex activeStyle={{color:'#808080'}} to="/register">Kindly signin</Link>
    <Link activeStyle={{color:'#808080'}}  to="/register/signup">Kindly signup</Link>
    {props.children}
</div>
const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>

const Nav = () => (
    <div>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/address'>Address</Link>
     
    </div>
  )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App7