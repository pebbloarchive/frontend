import { App } from '../../app';
import { ICore } from '../../core';

const core = App.Core<ICore>();

export function allowedExt(ext: string) {
  return core.accounts.collection.selectors.CURRENT.value.permissions.includes('staff') ? ['png', 'jpg', 'jpeg', 'gif'].includes(ext) : ['png', 'jpg', 'jpeg'].includes(ext);
}

export function getFileExt(name: string) {
  return name.split('.').pop();
}
