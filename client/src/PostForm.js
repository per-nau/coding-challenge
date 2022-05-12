import React, { Component} from 'react'
import axios from 'axios'

class PostForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            note: '',
            user: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('client/src/db.json', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {note, user} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input class="form-control mt-3" type="text" name="user" placeholder="Your Name" value={user} onChange={this.changeHandler} />

                        <textarea class="form-control mt-3" type="text" name="note" placeholder="Your note" rows="3" value={note} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm