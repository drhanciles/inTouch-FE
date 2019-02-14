const { app, BrowserWindow } = require('electron');  
const path = require('path'); 
const net = require('net'); 
const port = process.env.PORT ? (process.env.PORT - 100) : 3000; 
const client = new net.Socket();
let startedElectron = false;  
let mainWindow; 

preocess.ELECTRON_START_URL = `http://localhost:${port}`; 

function createWindow() {
  mainWindow = new BrowserWindow({width: 1250, height: 1375 }); 
  mainWindow.loadURL(`file://${path.join(_dirname, '..build/index.html')}`); 
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
