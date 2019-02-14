const { app, BrowserWindow } = require('electron');  
const path = require('path');
const url = require('url'); 
const net = require('net'); 
const port = process.env.PORT ? (process.env.PORT - 100) : 3000; 
const client = new net.Socket();
let startedElectron = false;  
let mainWindow;
require('events').EventEmitter.prototype._maxListeners = 100 

process.ELECTRON_START_URL = `http://localhost:${port}`; 

const createWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600 }); 
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'), 
    protocol: 'file:', 
    slashes: true
  });

  mainWindow.loadURL(startUrl); 
  mainWindow.webContents.openDevTools(); 
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

const tryConnection = () => client.connect({port: port}, () => {
  client.end(); 
  if(!startedElectron) {
    console.log('starting electron'); 
    startedElectron = true; 
    const exec = require('child_process').exec; 
    exec('npm run elelctron')
  }
}); 

tryConnection(); 

client.on('error', (error) => {
  setTimeout(tryConnection, 1000)
}); 

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
