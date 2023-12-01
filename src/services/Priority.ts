import {iUser} from './iUser'

export interface iPriority{
    id: bigint;
    title: string;
    color: string,
    user: iUser;
}