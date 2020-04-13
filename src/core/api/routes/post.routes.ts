import API from '../';
import { Posts } from '../../interfaces/post.interfaces';

export const Post = async (payload: {
    content: string,
    attachments: string[]
}): Promise<Posts> => (await API.post('users/posts/new')).data;

export const getPost = async (id: number): Promise<PostBody> => 
    (await API.get(`users/posts/${id}`));