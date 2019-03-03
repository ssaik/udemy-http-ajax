import React, { Component } from 'react';
import Axios from 'axios'
import Post from '../../components/Post/Post'
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
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        click={() => this.selectedPostId(post.id)}
                    />
        });
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;