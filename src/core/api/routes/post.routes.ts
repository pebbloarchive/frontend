import API from '../';
import { Posts, PostInterface } from '../../interfaces/post.interfaces';

export const Post = async (payload: {
    content: string,
    attachments: string[]
}): Promise<Posts> => (await API.post('users/posts/new')).data;

export const getPost = async (id: number): Promise<PostInterface> => 
    (await API.get(`users/posts/${id}`)).data;