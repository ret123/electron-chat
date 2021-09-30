const {
    ipcRenderer,
    contextBridge
} = require('electron');


contextBridge.exposeInMainWorld('electron', {

    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send('notify', message);
        }
    }

});
// window.sendNotification = (message) => {
//     console.log(window.notSecure);
//     ipcRenderer.send('notify', message);
// }