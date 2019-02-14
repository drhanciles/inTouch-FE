const { app, BrowserWindow } = require('electron');  
let mainWindow; 
const path = require('path'); 

function createWindow() {
  mainWindow = new BrowserWindow({width: 1250, height: 1375 }); 
  mainWindow.loadURL(`file://${path.join(_dirname, '..build/index.html')}`); 
  mainWindow.webContents.openDevTools(); 
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow); 

app.on('window-all-closed', function() {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if(mainWindow === null) {
    createWindow()
  }
})
