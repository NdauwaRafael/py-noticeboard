import axios from 'axios';

// export const addPostApi = async (post) => {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     };

//     return await (await (await (fetch('api/posts/', options)))).json();
// }

// export const getPosts = async () => {
//     return await (await (await (fetch('api/posts')))).json();
// };

// export const DELETE_POST = async (postId) => {
//     return await fetch('api/posts/' + postId, { method: 'delete' });
// }



export const addPostApi = async (postData) => {
    return axios.post('api/posts/', postData);
}

export const getPosts = async () => {
    return axios.get('api/posts')
};

export const DELETE_POST = async (postId) => {
    return axios.delete('api/posts/' + postId)
}