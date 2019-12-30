// Necessary to load Devtron in development-environment only; this isn't working at the moment though
if (process.env.NODE_ENV === "development"){
    console.log("Preloading variables for Devtron");
    window.__devtron = {
        require: require, 
        process: process
    };
}