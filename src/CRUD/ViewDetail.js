import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import "./../css/style.css";
export default class ViewDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
             title :'',
             description :''
        }
    }
    componentDidMount()
    {
      let st = window.location.href
      let url = st.split("/")
      let id   = url[4]
      
      
        console.log(st);
        console.log("URL" + url);
        console.log(id);
        
        
        
        axios.get('http://www.api-ams.me/v1/api/articles/' + id)
        .then(res => {
            this.setState({
                title: res.data.DATA.TITLE,
                description: res.data.DATA.DESCRIPTION,
            })
        }).catch(e => console.log(e))
    }
    render() {
        console.log("AA", this.state.description);
        
        return (
            <div class="contracard text-center container">
                           <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    
            <div class="card-header">
              View Detail
            </div>
        
    
        
            <div class="card card-body">
              <h5 class="card-title">{this.state.title}</h5>
              <h5 class="card-title">{this.state.description}</h5>
              <Link to="/home" class="btn btn-primary">Back Home</Link>
         </div>
        </div>
        )
    }
}
