import { App } from '../../pulse';
import Parent from '.';
import Api from '../../api/api.service';
import { Post } from '../../api/routes/post.routes'
import Router from 'next/router';
import { PostInterface } from '../../interfaces/post.interfaces';

export const PostCollection = App.Collection<PostInterface>({
  groups: ['following'],
  primaryKey: 'author'
});

export const Posts = async (content: string, attachments?: string[]): Promise<{
    success: boolean;
    error?: object;
  }> => {
    try {
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false,
        error
      };
    }
  }
  