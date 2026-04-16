const { app, BrowserWindow, ipcMain, protocol, net } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');
const { KovaaksApiClient } = require('kovaaks-api-client');

const kovaaks = new KovaaksApiClient();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#1E1E24',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL('app://-/');
  }
}

app.whenReady().then(() => {
  protocol.handle('app', (request) => {
    let requestUrl = request.url.slice('app://-'.length);
    // Remove query params or hashes if any
    requestUrl = requestUrl.split('?')[0].split('#')[0];
    if (!requestUrl || requestUrl === '/') {
      requestUrl = 'index.html';
    } else if (requestUrl.startsWith('/')) {
      requestUrl = requestUrl.substring(1);
    }
    const filePath = path.join(__dirname, '../build', requestUrl);
    return net.fetch(pathToFileURL(filePath).toString());
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});


ipcMain.handle('getRecentActivity', async (event, username) => {
  try {
    const activity = await kovaaks.getRecentHighScoresByUsername({ username });
    return { success: true, data: activity };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('getProfile', async (event, username) => {
    try {
      const profile = await kovaaks.getProfileByUsername({ username });
      return { success: true, data: profile };
    } catch (error) {
      return { success: false, error: error.message };
    }
});

ipcMain.handle('getScenarioScore', async (event, username, scenarioName) => {
    try {
      const result = await kovaaks.getLastScoresByScenarioName({ username, scenarioName });
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
});
