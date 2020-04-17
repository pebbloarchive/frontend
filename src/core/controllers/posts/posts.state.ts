import { App } from '../../pulse';
import { Log } from '../../../utils/index';
import { PostInterface } from '../../interfaces/post.interfaces';
import { AccountCollection } from '../account/account.state'

export const PostCollection = App.Collection<PostInterface>({
  groups: ['following']
});

PostCollection.compute((post) => {
  post.author = AccountCollection.findById(post.authorId).value;
  return post;
})

PostCollection.collect([
  {
    id: '1ahZ',
    authorId: 'x6_0pG',
    content: 'Hello world',
    likes: 0,
    created_at: new Date()
  },
  {
    id: '1aahZ',
    authorId: 'x6_0pG',
    content: 'Hello world',
    likes: 0,
    created_at: new Date()
  },
  {
    id: '1a3hZ',
    authorId: 'x6_0pG',
    content: 'Hello world',
    likes: 0,
    created_at: new Date()
  }
], 'following');