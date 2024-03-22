const appContext = await bambuserAppFramework.getContext();

//
// TODO: Replace with your view logic
//
console.log(`%cBambuser App Framework%c
The example view is alive!

%c🤓 Available API in view context: %o\n\n
`,
'font-size: 3em; padding-top: 1em; padding-bottom: 0.5em',
'font-size: 1.2em; font-weight: bold;',
'font-size: 1.2em; padding-bottom: 0.2em',
appContext,
);
