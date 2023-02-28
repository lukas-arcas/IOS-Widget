// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
const info = [
    ["The Tao of Mac", "31m ago", "displayplacer", "displayplacer is a cli utility to automate many of the"],
    ["heise Security", "46m ago", "Mehrere DoS-Lücken im Netzwerkanalytischen", "Wireshark 4.0.3 bringt einige Sicherheitsunwägbarkeiten"],
    ["Test", "Test", "Test", "Test"]
];


async function createWidget() {
    // Neues Widget erstellen
    let listwidget = new ListWidget();

    // Hintergrundfarbe festlegen
    listwidget.backgroundColor = new Color("#ffffff");

    // Widget mit Text befüllen
    buildWidget(listwidget);

    // Return the created widget
    return listwidget;
}

async function buildWidget(listwidget) {
    if (info.length <= 4) {
        max = info.length
    }
    else {
        max = 4
    }

    for (i = 0; i <= max; i++) {

        // Quelle und Zeitdifferenz einfügen
        let sourceTime = listwidget.addText(info[i][0] + " • " + info[i][1]);
        //heading.centerAlignText();
        sourceTime.font = Font.lightSystemFont(15);
        sourceTime.textColor = new Color("#D3D3D3");

        // Titel einfügen
        let title = listwidget.addText(info[i][2]);
        title.font = Font.systemFont(20);
        title.textColor = new Color("#000000");

        // Inhalt einfügen
        let text = listwidget.addText(info[i][3]);
        text.font = Font.lightSystemFont(15);
        text.textColor = new Color("#000000");

        if (i < max) {
            listwidget.addSpacer(10);
            listwidget.machStrich
        }
    }
    
}





async function getNextLaunch() {
    // Query url
    const url = "https://api.spacexdata.com/v4/launches/next";

    // Initialize new request
    const request = new Request(url);

    // Execute the request and parse the response as json
    const response = await request.loadJSON();

    // Return the returned launch data
    return response;
}

function getLaunchDateTime(launchData) {
    // Parse launch date to new date object
    const launchDateTime = new Date(launchData.date_utc);
    return launchDateTime;
}

function addDateText(stack, text) {
    let dateText = stack.addText(text);
    dateText.centerAlignText();
    dateText.font = Font.semiboldSystemFont(20);
    dateText.textColor = new Color("#000000");
}

function displayLaunchDateTime(stack, launchDateTime, precision) {
    // Check if next launch date is precise enough and display different details based on the precision
    if (precision == "hour") {

        // Add launch date
        const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
        let datestring = launchDateTime.toLocaleDateString(undefined, dateOptions);
        addDateText(stack, datestring);

        // Add launch time
        const timeOptions = { hour: "numeric", minute: "numeric" };
        let timestring = launchDateTime.toLocaleTimeString(undefined, timeOptions);
        addDateText(stack, timestring);
    } else if (precision == "day") {

        // Add launch date
        const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
        let datestring = launchDateTime.toLocaleDateString(undefined, dateOptions);
        addDateText(stack, datestring);
    } else {
        addDateText(stack, "No day for next launch given");
    }
}



let widget = await createWidget();

// Check where the script is running
if (config.runsInWidget) {
    // Runs inside a widget so add it to the homescreen widget
    Script.setWidget(widget);
} else {
    // Show the medium widget inside the app
    widget.presentMedium();
}
Script.complete();
