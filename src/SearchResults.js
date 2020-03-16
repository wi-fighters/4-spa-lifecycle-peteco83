import React, { Component } from 'react'
import User from '../src/User'
import '../src/searchresults.scss'

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }
    
    count = 0

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data => this.setState({
            users: data
        }))
    }

    //debido a que con el shouldComponentUpdate la primera vez no recibimos nada del props hay q hacer una constanta
    lastSearchFor = null
    //para que no rendererice si la busqueda es la misma usamos
    shouldComponentUpdate(nextProps, nextState) {
        console.log("nextProps", nextProps);
        console.log("prevProps", this.props);
        if(nextProps.searchFor === this.lastSearchFor) {
            return false
        } else {
            this.lastSearchFor = nextProps.searchFor;
            console.log(this.lastSearchFor);
            return true
        } 
        
    }

    render() {
        console.log("rendering", this.count++);
        const {searchFor} = this.props
        const allUsers = this.state.users.filter(user => user.name.toLowerCase().includes(searchFor.toLowerCase()) ||  user.email.toLowerCase().includes(searchFor.toLowerCase())) 
        .map(user => {
            return <User key={user.id} id={user.id} name={user.name} email={user.email}/>
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
