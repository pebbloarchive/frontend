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

const formatDate = (stringDate) => {
  const date = new Date();
  const givenDate = new Date(stringDate);
  const differenceMs = date.getTime() - givenDate.getTime();
  const differenceSeconds = differenceMs / 1000;
  const differenceMinutes = differenceMs / (1000 * 60);
  const differenceHours = differenceMs / (1000 * 60 * 60);

  if (differenceSeconds < 1)
      return `now`;

  if (differenceMinutes < 1)
      return `${Math.floor(differenceSeconds)} ${Math.floor(differenceSeconds) === 1 ? 'second' : 'seconds'} ago`;
  
  if (differenceHours < 1)
      return `${Math.floor(differenceMinutes)} ${Math.floor(differenceMinutes) === 1 ? 'minute' : 'minutes'} ago`;

  if (differenceHours > 24)
      return `${new Intl.DateTimeFormat('en', { month: 'long' }).format(givenDate)} ${new Intl.DateTimeFormat('en', { day: '2-digit' }).format(givenDate)}`;

  if (differenceHours < 24)
      return `${Math.floor(differenceHours)} ${Math.floor(differenceHours) === 1 ? 'hour' : 'hours'} ago`;
}

PostCollection.collect([
  {
    id: '1ahZ',
    authorId: 'x6_0pG',
    content: 'Send me some good music',
    likes: 0,
    created_at: formatDate(new Date())
  },
    {
      id: '1aahZ2',
      authorId: 'x6_0pG',
      content: 'Hey guys',
      likes: 0,
      created_at: formatDate(new Date())
    },
    {
      id: '1a3hZ3',
      authorId: 'x6_0pG',
      content: 'Alright I think I am getting the hang of this',
      likes: 0,
      created_at: formatDate(new Date())
    },
    {
      id: '1ahZa',
      authorId: 'x6_0pG',
      content: 'Hello world',
      likes: 0,
      created_at: formatDate(new Date())
    },
    {
      id: '1aahZ24',
      authorId: 'x6_0pG',
      content: 'How do I use this thing?',
      likes: 0,
      created_at: formatDate(new Date("04/17/2020"))
    },
    {
      id: '1a3hZ3e',
      authorId: 'x6_0pG',
      content: 'This is my first post!',
      likes: 0,
      created_at: formatDate(new Date("03/25/2015"))
    },
  
], 'following');