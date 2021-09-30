//  Main Process
const {
    app,
    BrowserWindow,
    ipcMain,
    Notification

} = require('electron');

const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
    //  Browser window : run by renderer process
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#2e2c29',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')

        },

    });
    win.loadFile('index.html');
    isDev && win.webContents.openDevTools();
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}
app.whenReady().then(() => {
    createWindow();

});
ipcMain.on('notify', (_, message) => {
    new Notification({
        title: 'Notification',
        body: message
    }).show();

});