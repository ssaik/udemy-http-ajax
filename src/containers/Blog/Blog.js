import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import Axios from 'axios';

class Blog extends Component {

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
            });
    // console.log('---',this.state.posts);
    }

    selectedPostId = (id) =>
    {
        this.setState({
            selectedId: id
        })
    }

    render () {
        const posts = this.state.posts.map( post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        click={() => this.selectedPostId(post.id)}
                    />
        });

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;