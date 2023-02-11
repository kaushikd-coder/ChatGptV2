import { admin } from 'firebase-admin';
interface Message {
    text: string,
    createdAt: admin.firtsore.Timestamp,
    user:{
        _id: string,
        name: string
        avatar:string
    }
}