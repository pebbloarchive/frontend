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
    content: 'Send me some good music',
    likes: 0,
    created_at: new Date("4/17/20").toString()
  },
  {
    id: '1aahZ2',
    authorId: 'x6_0pG',
    content: 'Hey guys',
    likes: 0,
    created_at: new Date("4/17/20").toString()
  },
  {
    id: '1a3hZ3',
    authorId: 'x6_0pG',
    content: 'Alright I think I am getting the hang of this',
    likes: 0,
    created_at: new Date("4/17/20").toString()
  },
  {
    id: '1ahZa',
    authorId: 'x6_0pG',
    content: 'Hello world',
    likes: 0,
    created_at: new Date("4/17/20").toString()
  },
  {
    id: '1aahZ24',
    authorId: 'x6_0pG',
    content: 'How do I use this thing?',
    likes: 0,
    created_at: new Date("04/20/2017").toString()
  },
  {
    id: '1a3hZ3e',
    authorId: 'x6_0pG',
    content: 'This is my first post!',
    likes: 0,
    created_at: new Date("03/25/2015").toString()
  },
  
], 'following');