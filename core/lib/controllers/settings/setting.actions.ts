import { App } from '../../pulse';
import { ICore } from '../../core';

const core = App.Core<ICore>();

export async function updateAvatar(file: File) {
  const MAX_SIZE = 10000000;
  if(!file) return;
  if(file.size > MAX_SIZE) return console.log('Max file size exceeded');
  const ext = core.settings.helpers.getFileExt(file.name);
  if(!core.settings.helpers.allowedExt(ext)) return console.log('Unsupported extension');
  const data = await core.settings.routes.uploadAvatar({ file });
  // await fetch('http://localhost:3000/1.0/account/update/avatar', {
  //   method: 'POST',
  //   body: file,
  //   headers: {
  //     authorization: `Bearer ${core.accounts.state.TOKEN.value}`
  //   }
  // }).then(data => {
  //   console.log(file)
    // if(data.status === 200) {
    //   core.accounts.collection.update(core.accounts.collection.selectors.CURRENT.value.id, {
    //     avatar: data.body
    //   });
  //   }
  // })
  console.log(file);
  if(data.status === 200) {
    core.accounts.collection.update(core.accounts.collection.selectors.CURRENT.value.id, {
      avatar: data.data.avatar
    });
    return console.log('Good shit boi');
  }
}