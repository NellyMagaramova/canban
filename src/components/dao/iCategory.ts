import {iUser} from './iUser'
export interface iCategory{
    id: bigint;
    title: string;
    completedCount: bigint;
    uncompletedCount: bigint;
    user: iUser;
}