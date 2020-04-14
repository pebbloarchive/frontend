import { App } from '../../pulse';
import Parent from '.';
import Api from '../../api/api.service';
import { Post } from '../../api/routes/post.routes'
import Router from 'next/router';

interface Post {
    id: number;
    author: string;
    content: string;
    attachments?: string[];
    likes: number;
    created_at: Date;
    updated_at: Date;
}

export const PostCollection = App.collection<Post>({
    groups: ['following'],
    primaryKey: 'author'
});

