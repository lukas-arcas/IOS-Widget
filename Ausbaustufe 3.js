// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;


const variables = {

	"xl": [],
    "l" : [],
    "sizeFactorsHorizontal": [],

    // Ersetzen Sie dies durch die bookmark Ihres gewünschten Obsidian-Ordners.
    "bookmark" : "test_2",

    "backgroundColor": "#E3E3E3",
    "lineColor": "#C4C4C4",

    "height" : 330,
    "lWidth" : 270,
    "xlWidth" : 310,

    "vertLineThickness" : 1,
    "vertLineLength" : 340,
    "horizontalLineThickness" : 0.5,
    "horitontalLineLength" : 270,

    "logoWidth" : 55,

    "sourceColor": "#707070",

    "timeColor": "#878787",

    "titlecolor" : "#000000",

    "textColor" : "#000000",

    "firstColumn" : 0,
    "secondColumn" : 4,

    "logoIcon" : "tortoise",

    "entriesCount" : 0
}
variables["xl"] = {
    "columnCount": 3,
    "textblockHeight" : 57,
    "sourceThickness" : 11.9,
    "timeThickness" : 11.9,
    "titleThickness" : 15.8,
    "textThickness" : 13.9,
    "spaceToLinie" : 6.5,
    "spaceOverTitle": 2,
    "spaceUnderTitle": 2,
    "sizeFactorsHorizontal" : [],
    "sizeFactorsVertical" : []
    // variaben welche nur für das xl-widget gelten
};

// Sollte Ihre Device nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Breite des XL Widgets für Ihre Screensize mit unserem Ausgangswert 715.5 dividieren.
variables["xl"]["sizeFactorsHorizontal"] = {  
    "768x1024" : 0.886792, // 634.5
    "744x1133" : 0.886792, // 634.5
    "810x1080" : 0.935010, // 669
    "820x1180" : 1,        // 715.5
    "834x1112" : 0.953179, // 682
    "834x1194" : 1,        // 715.5
    "954x1373" : 1.014675, // 726
    "970x1389" : 1.014675, // 726
    "1024x1366": 1.111111, // 795
    "1192x1590": 1.201956  // 860
}

// Sollte Ihre Device nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Höhe des XL Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["xl"]["sizeFactorsVertical"] = {  
    "768x1024" : 0.893274, // 305.5
    "744x1133" : 0.893274, // 305.5
    "810x1080" : 0.937134, // 320.5
    "820x1180" : 1,        // 342
    "834x1112" : 0.957602, // 327.5
    "834x1194" : 1,        // 342
    "954x1373" : 1.023391, // 350
    "970x1389" : 1.023391, // 350
    "1024x1366": 1.106725, // 378.5
    "1192x1590": 1.204678  // 412
}

variables["l"] = {
    "columnCount": 4,
    "textblockHeight" : 53,
    "sourceThickness" : 11.5,
    "timeThickness" : 11.5,
    "titleThickness" : 14.8,
    "textThickness" : 13.5,
    "spaceToLinie" : 5,
    "spaceOverTitle": 0,
    "spaceUnderTitle": 0,
    "sizeFactorsHorizontal" : [],
    "sizeFactorsVertical" : []
    // variaben welche nur für das l-widget gelten 
};


// Sollte Ihre Screensize nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Breite des L Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["l"]["sizeFactorsHorizontal"] = {
    "430×932"  : 1.064327,  // 364
    "428x926"  : 1.064327,  // 364
    "414x896"  : 1.052631,  // 360
    "414x736"  : 1.017543,  // 348
    "393x852"  : 0.988304,  // 338
    "390x844"  : 0.988304,  // 338
    "375x812"  : 0.961988,  // 329
    "375x667"  : 0.938596,  // 321
    "360x780"  : 0.961988,  // 329
    "320x568"  : 0.853801,  // 292

    "768x1024" : 0.893274,  // 305.5
    "744x1133" : 0.893274,  // 305.5
    "810x1080" : 0.937134,  // 320.5
    "820x1180" : 1,         // 342
    "834x1112" : 0.957602,  // 327.5
    "834x1194" : 1,         // 342
    "954x1373" : 1.023391,  // 350
    "970x1389" : 1.023391,  // 350
    "1024x1366": 1.106725,  // 378.5
    "1192x1590": 1.204678   // 412
}


// Sollte Ihre Screensize nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Höhe des L Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["l"]["sizeFactorsVertical"] = { 
    "430×932"  : 1.116959,  // 382
    "428x926"  : 1.116959,  // 382
    "414x896"  : 1.108187,  // 379
    "414x736"  : 1.043859,  // 357
    "393x852"  : 1.035087,  // 354
    "390x844"  : 1.035087,  // 354
    "375x812"  : 1.008771,  // 345
    "375x667"  : 0.947368,  // 324
    "360x780"  : 1.008771,  // 345
    "320x568"  : 0.909356,  // 311

    "768x1024" : 0.893274, // 305.5
    "744x1133" : 0.893274, // 305.5
    "810x1080" : 0.937134, // 320.5
    "820x1180" : 1,        // 342
    "834x1112" : 0.957602, // 327.5
    "834x1194" : 1,        // 342
    "954x1373" : 1.023391, // 350
    "970x1389" : 1.023391, // 350
    "1024x1366": 1.106725, // 378.5
    "1192x1590": 1.204678  // 412
}


let deviceSize = Device.screenSize().width + "x" + Device.screenSize().height



const fm = FileManager.iCloud(); // Definieren der fm-Variablen hier hinzugefügt
const bookmarkName = variables["bookmark"]; 
const folderPath = fm.bookmarkedPath(bookmarkName); // Speicherpfad zu dem Ordner in dem die Obsidian Einträge abgelegt sind

function getObsidianUrl(ordner, title) {
    let url = "obsidian://vault/";

    url += bookmarkName + "/";

    

    // Ersetze Leerzeichen in ordner und title durch %20
    if (ordner != "/") {
        ordner = ordner.replace(/ /g, '%20');
        url += ordner + "/";
        console.log("ordner")
    }

    if (title) {
        title = title.replace(/ /g, '%20');
        url += title;
    }
	 
    return url;
}


// Rekursive Funktion, um alle Dateien in einem Verzeichnis und seinen Unterordnern aufzulisten
function listFilesRecursively(folderPath, isFirstCall = true) {
    const fileNames = fm.listContents(folderPath);
    const filePaths = [];

    fileNames.forEach(fileName => {
        if (!fileName.startsWith(".")) { // Ignoriere versteckte Dateien und Ordner
            const filePath = `${folderPath}/${fileName}`;
            if (fm.isDirectory(filePath)) {
                folderName = fileName; // Ordnernamen extrahieren
                if (isFirstCall) {
                    isFirstCall = false;
                }
                filePaths.push(...listFilesRecursively(filePath, false));
            } else if (fileName.endsWith(".md")) {
                filePaths.push(filePath);
            }
        }
    });

    return filePaths;
}


const allFilePaths = listFilesRecursively(folderPath);

// Sortieren Sie die Dateipfade nach dem Änderungsdatum (neueste zuerst)
allFilePaths.sort((filePath1, filePath2) => {
    const date1 = fm.modificationDate(filePath1);
    const date2 = fm.modificationDate(filePath2);
    return date2 - date1; // Sortiere absteigend
});


function extractFolderNameAfterVaultIpad(paths) {
    const regex = /\/VaultIpad\/([^/]+)/;
    //const match = path.match(regex);
    const allOrdners = []

for(path in paths){
    const match = paths[path].match(regex);
    if (match && match.length >= 2) {
            if (match[1].endsWith(".md")) {
                allOrdners.push("/")
            } else {
                allOrdners.push(match[1])
            }
        } else {
            return null;
        }
}
const allOrdners10 = allOrdners.slice(0, 10);
return allOrdners10
}


function getTimeDifferenceFromNow(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);

    // Berechne den Zeitunterschied in Millisekunden
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    // Berechne die vergangenen Tage
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysPassed === 0) {
        return `today`;
    } else {
        return `${daysPassed} days ago`;
    }
}


let info = [];
const titles = [];
const dates = [];
const descriptions = [];

// Funktion zur Extrahieren der Informationen aus den Einträgen in Obsidian
async function collectFileInformation() {
    let count = 0; // Zähler für die Anzahl der geholten Einträge

    const fileContentsPromises = allFilePaths.map(async (filePath) => {
        if (count >= 10) {
            return; // Abbruch, wenn 10 Einträge geholt wurden
        }

        const fileName = filePath.split('/').pop();
        //Titel beziehen
        const title = fileName.replace(".md", "");
        titles.push(title);

        //Content beziehen
        const desc = fm.readString(filePath);
        descriptions.push(desc);

        //Datum beziehen
        const date = fm.modificationDate(filePath);
        //Datum umrechnen
        dates.push(getTimeDifferenceFromNow(date));

        count++; // Zähler erhöhen
    });

    // Warten, bis alle Dateiinformationen gesammelt sind
    await Promise.all(fileContentsPromises);
}


// Funktion um die Arrays mit den verschiedenen Informationen zu einem geschachtelten Array zusammenzuführen
function mergeArrays(arr1, arr2, arr3, arr4) {
  const mergedArray = [];

  const length = arr1.length; // Annahme: Alle vier Arrays haben die gleiche Länge

  for (let i = 0; i < length; i++) {
    const subArray = [arr1[i], arr2[i], arr3[i], arr4[i]];
    mergedArray.push(subArray);
  }

  return mergedArray;
}


// Funktion mit der das Widget erstellt wird
async function createWidget() {

    await collectFileInformation();

    const ordner = extractFolderNameAfterVaultIpad(allFilePaths);

      //fügt leeren Inhalt hinzu
      if(titles.length < 10){
        variables["entriesCount"] = titles.length;
        }

    info = mergeArrays(ordner, dates, titles, descriptions);



    // Neues Widget erstellen
    let listwidget = new ListWidget();

    // Hintergrundfarbe festlegen
    listwidget.backgroundColor = new Color(variables["backgroundColor"]);

    //Check der Widget-Größe
    if(config.widgetFamily === "large"){
        createLWidget(listwidget)
    }
    else if(config.widgetFamily === "extraLarge"){
        createXlWidget(listwidget)
    }

    // Erstellstes Widget zurückgeben
    return listwidget;
}
function createLWidget(widget) {

    let main = widget.addStack()
    main.layoutHorizontally()

    createLogo(main, "l")

    let mainBlock = main.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size  (
       variables["lWidth"]*variables.l.sizeFactorsHorizontal[deviceSize],
       variables["height"]*variables.l.sizeFactorsVertical[deviceSize]
       )

    createTextBlock(
       mainBlock,
       variables["lWidth"]*variables.l.sizeFactorsHorizontal[deviceSize],
       variables["firstColumn"],
       "l"
       )
}

// Funktion für das erstellen eines Widgets der Größe XL
function createXlWidget(widget) {
    let main2 = widget.addStack()
    main2.layoutHorizontally()

    createLogo(main2, "xl")

    let mainBlock = main2.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size(
       variables["xlWidth"]*variables.xl.sizeFactorsHorizontal[deviceSize],
       variables["height"]*variables.xl.sizeFactorsVertical[deviceSize]
       )

    createTextBlock(
       mainBlock,
       variables["xlWidth"]*variables.xl.sizeFactorsHorizontal[deviceSize],
       variables["firstColumn"],
       "xl"
       )

    main2.addSpacer(10)

    let lineVertical = main2.addStack()
    lineVertical.size = new Size(
       variables["vertLineThickness"],
       variables["vertLineLength"]*variables.xl.sizeFactorsVertical[deviceSize]
       )
    lineVertical.backgroundColor = new Color(variables["lineColor"])

    main2.addSpacer(10)


    let mainBlock2 = main2.addStack()
    mainBlock2.layoutVertically()
    mainBlock2.size = new Size(
       variables["xlWidth"]*variables.xl.sizeFactorsHorizontal[deviceSize],
       variables["height"]*variables.xl.sizeFactorsVertical[deviceSize]
       )

    createTextBlock(
       mainBlock2,
       variables["xlWidth"]*variables.xl.sizeFactorsHorizontal[deviceSize],
       variables["secondColumn"],
       "xl"
       )

}


// Funktion für das erstellen des Logos für das Widget
function createLogo(main, widgetSize) {
    let logoBlock = main.addStack()
    logoBlock.setPadding(0, 10, 0, 10)
    logoBlock.layoutVertically()
    logoBlock.size = new Size(
       variables["logoWidth"]*variables[widgetSize].sizeFactorsHorizontal[deviceSize],
       variables["height"]*variables[widgetSize].sizeFactorsVertical[deviceSize]
       )
    let icon = SFSymbol.named(variables["logoIcon"])
    let addIcon = logoBlock.addImage(icon.image)
}

// Funktion für das erstellen der Trennlinien zischen den einzelnen Einträgen im Widget

function createLine(mainBlock, length, color) {
    let line = mainBlock.addStack()
    line.size = new Size(length, variables["horizontalLineThickness"])
    line.backgroundColor = new Color(variables[color])
}


 function createTextBlock(mainBlock, sizeY, x, widgetSize) {

    if(x === 0){
        column = variables["firstColumn"]
    }
    else{
        column = variables["secondColumn"]
    }

    for (i = 0; i <= variables[widgetSize].columnCount; i++) {

        if (i > 0) {
            mainBlock.addSpacer(variables[widgetSize].spaceToLinie)
        }

        if(i+column > variables["entriesCount"]-1){

           let textBlock = mainBlock.addStack()
           textBlock.layoutVertically()
           textBlock.size = new Size(
               sizeY,
               variables[widgetSize].textblockHeight*variables[widgetSize].sizeFactorsVertical[deviceSize]
               )
           if (i < variables[widgetSize].columnCount) {
               mainBlock.addSpacer(variables[widgetSize].spaceToLinie)
               createLine(mainBlock, sizeY, "backgroundColor")
           }
        }
         // 


        else{
            // Hinzufügen eines Stacks, in dem der jeweilige Eintrag abgebildet wird
            let textBlock = mainBlock.addStack()
                textBlock.url = getObsidianUrl(info[i + column][0],info[i + column][2]);
                // textBlock.url = "obsidian://vault/VaultIpad/Ordner3/New";
                textBlock.layoutVertically()
                textBlock.size = new Size(
                    sizeY,
                    variables[widgetSize].textblockHeight*variables[widgetSize].sizeFactorsVertical[deviceSize]
                    )

           // Quelle und Zeitdifferenz einfügen
           let sourceTimeBlock = textBlock.addStack()
           sourceTimeBlock.layoutHorizontally()
           let source = sourceTimeBlock.addText(info[i + column][0]+ " • ")
               source.font = Font.systemFont(variables[widgetSize].sourceThickness);
               source.textColor = new Color(variables["sourceColor"]);
           let time = sourceTimeBlock.addText(info[i + column][1])
               time.font = Font.lightSystemFont(variables[widgetSize].timeThickness);
               time.textColor = new Color(variables["timeColor"]);


       textBlock.addSpacer(variables[widgetSize].spaceOverTitle)

       // Titel einfügen
       let title = textBlock.addText(info[i + column][2]);
           title.font = Font.systemFont(variables[widgetSize].titleThickness);
           title.textColor = new Color(variables["titlecolor"]);

       textBlock.addSpacer(variables[widgetSize].spaceUnderTitle)

       // Inhalt einfügen
       let text = textBlock.addText(info[i + column][3]);
           text.font = Font.lightSystemFont(variables[widgetSize].textThickness);
           text.textColor = new Color(variables["textColor"]);

       // Trennstrich Zwischen den einzelnen Einträgen
       if (i < variables[widgetSize].columnCount) {
           mainBlock.addSpacer(variables[widgetSize].spaceToLinie)
           createLine(mainBlock, sizeY, "lineColor")
       }
    } 
}
}

let widget = await createWidget();

// Überprüfen wo das Scribt ausgeführt wird
if (config.runsInWidget) {
// Im Widget ausgeführt, auf Homescreen anzeigen
Script.setWidget(widget);
} else {
// In der App ausgeführt
widget.presentLarge();
}
Script.complete();