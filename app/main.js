const {
    app,
    BrowserWindow,
    session
} = require("electron");

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false
        }
    });

    win.webContents.openDevTools();

    // and load the index.html of the app.
    win.loadFile("./dist/index.html");

    // Emitted when the window is closed.
    win.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });

    // https://electronjs.org/docs/tutorial/security#4-handle-session-permission-requests-from-remote-content
    const ses = session;
    ses.fromPartition("default").setPermissionRequestHandler((webContents, permission, callback) => {
        return callback(false);
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

// https://electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation
app.on("web-contents-created", (event, contents) => {
    contents.on("will-navigate", (event, navigationUrl) => {        
        const parsedUrl = new URL(navigationUrl);
        console.warn(`Navigating to '${parsedUrl}'`);
        event.preventDefault();
    });
    contents.on("will-redirect", (event, navigationUrl) => {
        const parsedUrl = new URL(navigationUrl);
        console.warn(`Redirecting to '${parsedUrl}'`);
        event.preventDefault();
    });
});

// https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows
app.on('web-contents-created', (event, contents) => {
    contents.on('new-window', async (event, navigationUrl) => {
        console.warn("opening new window");
        // In this example, we'll ask the operating system
        // to open this event's url in the default browser.
        event.preventDefault()

        await shell.openExternal(navigationUrl)
    })
})