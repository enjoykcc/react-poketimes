import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component{
    // state = {
    //     post: null
    // }
    
    // componentDidMount(){
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(response => {
    //             this.setState({
    //                 post : response.data
    //             })
    //         })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p className="center">{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete
                    </button>
                </div>
            </div>
        ) : (
            <div className="cente">Loading Post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id
    return{
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)