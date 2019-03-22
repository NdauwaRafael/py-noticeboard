export const getPosts = async () => {
    return await (await (await (fetch('api/posts')))).json();
};

export const DELETE_POST = async (postId) => {
    return await fetch('api/posts/' + postId, { method: 'delete' });
}