import {iUser} from './iUser'

export interface iTask{
    id: bigint;
    title: string;
    completed: boolean;
    taskDate: string;
    user: iUser;
}