import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../Redux/actions/posts';
import { bindActionCreators } from 'redux';
import { getAllPosts } from '../../Redux/actions/posts/index';

class Posts extends Component {
    render() {
        const { posts } = this.props.posts;
        return (
            <h1>Posts </h1>

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