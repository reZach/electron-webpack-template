// Necessary to load Devtron in development-environment only
if (process.env.NODE_ENV === "development"){
    window.__devtron = {
        require: require, 
        process: process
    };
}