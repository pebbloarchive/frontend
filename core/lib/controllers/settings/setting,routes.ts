import { API } from '../../api';
import { PulseResponse } from 'pulse-framework';
import { Avatar } from './setting.interfaces';

export const uploadAvatar = async(payload: Avatar): Promise<PulseResponse> => (await API.post('account/update/avatar', payload)).data;