const electron = require('electron'); 
const app = electron.app; 
const BrowserWindow = electrong.BrowserWindow;

const path = require('path'); 
const url = require('url'); 
let mainWindow; 

function createWindow() {
  mainwindow = new BrowserWindow({width: 1250, height: 1375 }); 
  mainWindow.load.URL('http://localhost:3000'); 
  mainWindow.webContenst.openDevTools(); 
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
