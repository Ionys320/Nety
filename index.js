const { app, BrowserWindow } = require('electron');

function start() {
    const win = new BrowserWindow({
        width: 200,
        height: 300,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenu(null);
    win.loadFile('index.html')
}

app.whenReady().then(start)
