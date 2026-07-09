function browserHistory(browser, commands) {
    for (let command of commands) {
        if (command.startsWith("Open ")) {
            let size = command.slice("Open ".length);
            browser["Open Tabs"].push(size);
            browser["Browser Logs"].push(command);
        } else if (command.startsWith("Close ")) {
            let size = command.slice("Close ".length);
            let index = browser["Open Tabs"].indexOf(size);

            if (index !== -1) {
                browser["Open Tabs"].splice(index, 1);
                browser["Recently Closed"].push(size);
                browser["Browser Logs"].push(command);
            }
        } else if (command === "Clear History and Cache") {
            browser["Open Tabs"] = [];
            browser["Recently Closed"] = [];
            browser["Browser Logs"] = [];
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}

browserHistory({"Browser Name":"Google Chrome", 
    "Open Tabs":["Facebook","YouTube","Google Translate"], 
    "Recently Closed":["Yahoo","Gmail"], 
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate",
        "Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}, 
        ["Close Facebook", "Open StackOverFlow", "Open Google"]);

console.log("--------------------------------");

browserHistory({"Browser Name":"Mozilla Firefox", "Open Tabs":["YouTube"], 
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, 
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);