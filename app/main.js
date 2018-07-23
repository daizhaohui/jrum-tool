const {
    app,
    Menu,
    BrowserWindow
} = require("electron");
const path = require("path");
const appMenuTemplate = require("./menu/appMenu");
const env = require("./utils/env");
const {ipcMain} = require("electron");
let mainWindow;
const url = `file://${__dirname}/index.html`;

const createAppMenu = () => {
    let menu;
   
    if (env.isDebug) {
        appMenuTemplate.push({
            label: 'Debug',
            submenu: [{
                role: 'reload',
                label: 'reload',
                accelerator: 'Command+R',
                click: () => {
                    mainWindow && mainWindow.loadURL(url);
                }
            }, {
                role: 'devtools',
                label: 'devtools',
                click: () => {
                    mainWindow && mainWindow.webContents.openDevTools();
                }
            },{
                role: 'testWin',
                label: 'testWin',
                click: () => {
                    var win = new BrowserWindow({
                        width: 800,
                        height: 600,
                        webPreferences: {
                            nodeIntegration: true
                        },
                        title:`${path.join(__dirname, 'test.html')}`
                    });
                    win.loadURL(`file://${__dirname}/test.html`);
                    win.webContents.openDevTools();
                }
            }]
        });
    }
    menu = Menu.buildFromTemplate(appMenuTemplate);
    Menu.setApplicationMenu(menu);
};

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        title:`${path.join(__dirname, 'index.html')}`
    });
    if (env.isDebug) {
        //mainWindow.webContents.openDevTools();
        mainWindow.loadURL(url);
        //mainWindow.maximize();
    } else {
        mainWindow.loadURL(url);
       // mainWindow.maximize();
    }
    mainWindow.on("close", () => {
        mainWindow = null;
    });
};

app.on("ready", () => {
    createAppMenu();
    createMainWindow();
});

app.on("activate", () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});