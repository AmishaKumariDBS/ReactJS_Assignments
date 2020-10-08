import React from "react"
export default class Signin extends React.Component{ 
//constructor(props){super(props)}
render(){
    return(
        <div>
        <table style="background-color:white; opacity:0.5;"cellspacing="3" celllpading="3">
                <tr><td>                          </td></tr>
                <tr><td>EMAIL</td><td><input type="email" name="email" value=""/></td></tr>
                <tr><td><input style="background:brown;"type="button" name="" value="signin" /></td></tr>                        
        </table>
        <h1>Existing User?</h1>
        </div> 

    )
};

}