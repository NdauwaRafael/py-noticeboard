let getPosts = async () => {
    return await (await (await (fetch('http://localhost:3004/authors')))).json();
};

export default {
    getPosts
}