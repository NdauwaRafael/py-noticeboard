import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../Redux/actions/posts';
import { bindActionCreators } from 'redux';
import { getAllPosts } from '../../Redux/actions/posts/index';

class Posts extends Component {
    componentDidMount() {
        this.props.getAllPosts();
    }
    render() {
        const { posts } = this.props.posts;
        return (
            <h1>Posts </h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.descritpion}</td>
                                <td>
                                    <button type="button" class="btn btn-outline-success">View</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPosts: bindActionCreators(getPosts)
    }
}
export default connect(mapStateToProps)(Posts);