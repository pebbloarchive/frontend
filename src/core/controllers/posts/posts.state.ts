import { App } from '../../pulse';
import { Log } from '../../../utils/index';
import { PostInterface } from '../../interfaces/post.interfaces';

export const PostCollection = App.Collection<PostInterface>({
  groups: ['followed']
});

PostCollection.collect([
  {
    id: '1ahZ',
    author: {
      username: 'Kyle'
    },
    content: 'Hello world',
    likes: 0,
    created_at: new Date()
  }
])