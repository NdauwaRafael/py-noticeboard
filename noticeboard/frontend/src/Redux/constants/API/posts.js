let getPosts = async () => {
    return await (await (await (fetch('api/posts')))).json();
};

export default {
    getPosts
}