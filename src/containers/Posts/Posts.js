import React, { Component } from 'react';
import Axios from 'axios'
import Post from '../../components/Post/Post'
import { Link } from 'react-router-dom'

import './Post.css'

class Posts extends Component {

    state = {
        posts: [],
        selectedId : null
    }
    
    componentDidMount() {
        Axios.get("/posts")
            .then( res => {
                const posts = res.data.slice(0,4).map( post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                })
                this.setState({posts: posts});
            })
            .catch(error => {
                console.log('---error: ',error)
            });
    }

    selectedPostId = (id) => {
        this.setState({
            selectedId: id
        })
    }

    render() {
        const posts = this.state.posts.map( post => {
            return (
                <Link to={'/'+post.id} key={post.id}>
                    <Post  
                        title={post.title} 
                        author={post.author}
                        click={() => this.selectedPostId(post.id)}
                    />
                </Link>
        )});
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;