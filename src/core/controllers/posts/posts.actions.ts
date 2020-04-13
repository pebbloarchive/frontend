import { App } from '../../pulse';
import Parent from '.';
import Api from '../../api/api.service';
import { Post } from '../../api/routes/post.routes'
import Router from 'next/router';

interface User {
    username: string;
    followers?: string[];
    following?: string[];
    bio?: string;
}