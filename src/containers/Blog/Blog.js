import React, { Component } from 'react';
import Posts from '../Posts/Posts'
import NewPost from '../NewPost/NewPost'
import { Route, Link } from 'react-router-dom'

import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: "#Submit",
                                search: "?quick-submit=true"
                                }}>
                                New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;