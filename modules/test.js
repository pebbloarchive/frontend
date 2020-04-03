const Gateway = require('./gateway');
const gateway = new Gateway();

const info = {
    username: 'imposed',
    password: 'Computergeek1337!'
}

gateway.connect(false, 'imposed', 'Computergeek1337!');

/*!
user: {
    id: 103592643342106620,
    username: 'imposed',
    avatar: null,
    bio: null,
    vanity: null,
    created_at: 'Fri, 27 Mar 2020 00:00:00 GMT',
    updated_at: null
}
 */