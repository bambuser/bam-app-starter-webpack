const appContext = await bambuserAppFramework.getContext();

//
// TODO: Replace with your main app logic
//
console.log(`%cBambuser App Framework%c
The example app is alive!!!

%c🔧 Use the bam-app.config.js file to configure your app manifest (ex. ading additional permissions to gain access to APIs)
🤓 Available API in main app context: %o'
👷‍♀️ Example of composing url to a custom view (see docs for ex. screens): %s\n\n`,
'font-size: 3em; padding-top: 1em; padding-bottom: 0.5em',
'font-size: 1.2em; font-weight: bold;',
'font-size: 1.2em; padding-bottom: 0.2em',
appContext,
new URL('./myCustomView.html', __webpack_public_path__).href,
);
