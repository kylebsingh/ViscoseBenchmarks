//#region electron/preload.cjs
var { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
	getRecentActivity: (username) => ipcRenderer.invoke("getRecentActivity", username),
	getProfile: (username) => ipcRenderer.invoke("getProfile", username),
	getScenarioScore: (username, scenarioName) => ipcRenderer.invoke("getScenarioScore", username, scenarioName)
});
//#endregion
