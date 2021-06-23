const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;
const createWindow = () => {
  win = new BrowserWindow({ width: 800, height: 600 });
  // load the dist folder from Angular
  win.loadURL('http://localhost:4200');
  win.webContents.openDevTools()
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
