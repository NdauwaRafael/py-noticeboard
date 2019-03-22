import React, { Component } from 'react';
import { connect } from 'react-redux';
class Posts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <h1>Posts </h1>

        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}
export default connect(mapStateToProps)(Posts);