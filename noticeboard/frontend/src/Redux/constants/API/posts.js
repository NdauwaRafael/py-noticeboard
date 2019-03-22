export const getPosts = async () => {
    return await (await (await (fetch('api/posts')))).json();
};
