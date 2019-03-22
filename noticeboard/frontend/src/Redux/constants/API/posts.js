export const addPostApi = async (post) => {
    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    };

    return await (await (await (fetch('api/posts/', options)))).json();
}

export const getPosts = async () => {
    return await (await (await (fetch('api/posts')))).json();
};

export const DELETE_POST = async (postId) => {
    return await fetch('api/posts/' + postId, { method: 'delete' });
}
