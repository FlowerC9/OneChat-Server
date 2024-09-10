import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

const app = initializeApp({
    credential:applicationDefault(),
    projectId:"onechat-a2303"
});

export const messaging = getMessaging(app)