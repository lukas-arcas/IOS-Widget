// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;


const variables = {

    // Ersetzen Sie dies durch den tatsächlichen Namen Ihres Bookmark
    "bookmark" : "VaultIpad",

    "backgroundColor": "#ffffff",
    "lineColor": "#E0EEEE",

    "height" : 330,
    "lWidth" : 270,
    "xlWidth" : 310,

    "vertLineThickness" : 1,
    "vertLineLength" : 340,
    "horizontalLineThickness" : 0.5,
    "horitontalLineLength" : 270,

    "logoWidth" : 55,

    "textblockHeight" : 53,

    "sourceThickness" : 11.5,
    "sourceColor": "#838B8B",

    "timeThickness" : 11.5,
    "timeColor": "#838B8B",

    "titleThickness" : 14.8,
    "titlecolor" : "#000000",

    "textThickness" : 13.5,
    "textColor" : "#000000",

    "firstColumn" : 0,
    "secondColumn" : 5,

    "logoIcon" : "tortoise",

    "entriesCount" : 0

}


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
                console.log("Name des Ordners: " + fileName); // Ausgabe des Ordnernamens
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

// Funktion für das erstellen eines Widgets der Größe L
function createLWidget(widget) {

     let main = widget.addStack()
     main.layoutHorizontally()

     createLogo(main)

     let mainBlock = main.addStack()
     mainBlock.layoutVertically()
     mainBlock.size = new Size(variables["lWidth"],variables["height"])

     createTextBlock(mainBlock, variables["lWidth"], variables["firstColumn"])
 }

// Funktion für das erstellen eines Widgets der Größe XL
function createXlWidget(widget) {
     let main2 = widget.addStack()
     main2.layoutHorizontally()

     createLogo(main2)

     let mainBlock = main2.addStack()
     mainBlock.layoutVertically()
     mainBlock.size = new Size(variables["xlWidth"], variables["height"])

     createTextBlock(mainBlock, variables["xlWidth"], variables["firstColumn"])

     main2.addSpacer(10)

     let lineVertical = main2.addStack()
     lineVertical.size = new Size(variables["vertLineThickness"], variables["vertLineLength"])
     lineVertical.backgroundColor = new Color(variables["lineColor"])

     main2.addSpacer(10)


     let mainBlock2 = main2.addStack()
     mainBlock2.layoutVertically()
     mainBlock2.size = new Size(variables["xlWidth"], variables["height"])

     createTextBlock(mainBlock2, variables["xlWidth"], variables["secondColumn"])

 }

// Funktion für das erstellen des Logos für das Widget
function createLogo(main) {
     let logoBlock = main.addStack()
     logoBlock.setPadding(0, 10, 0, 10)
     logoBlock.layoutVertically()
     logoBlock.size = new Size(variables["logoWidth"], variables["height"])
     let icon = SFSymbol.named(variables["logoIcon"])
     let addIcon = logoBlock.addImage(icon.image)
 }

// Funktion für das erstellen der Trennlinien zischen den einzelnen Einträgen im Widget
function createLine(mainBlock, length) {
     let line = mainBlock.addStack()
     line.size = new Size(length, variables["horizontalLineThickness"])
     line.backgroundColor = new Color(variables["lineColor"])
 }

// Funktion für das erstellen des Textblockes und der Anordnung der einzelnen Einträge im Widget
function createTextBlock(mainBlock, sizeY, x) {

     if(x === 0){
         column = variables["firstColumn"]
     }
     else{
         column = variables["secondColumn"]
     }

     for (i = 0; i <= 4; i++) {

        if (i+column > 0+column) {
             mainBlock.addSpacer(5)
         }

        if(i+column > variables["entriesCount"]-1){

            let textBlock = mainBlock.addStack()
            textBlock.layoutVertically()
            textBlock.size = new Size(sizeY, variables["textblockHeight"])
            if (i+column < 4+column) {
                mainBlock.addSpacer(5)
                createLine(mainBlock, sizeY)
            }
         }
        else{
            // Hinzufügen eines Stacks, in dem der jeweilige Eintrag abgebildet wird
            let textBlock = mainBlock.addStack()
                textBlock.layoutVertically()
                textBlock.url = getObsidianUrl(info[i + column][0],info[i + column][2]);
                // textBlock.url = "obsidian://vault/VaultIpad/Ordner3/New";
                textBlock.size = new Size(sizeY, variables["textblockHeight"])

            // Quelle und Zeitdifferenz einfügen
            let sourceTimeBlock = textBlock.addStack()
                sourceTimeBlock.layoutHorizontally()
                let source = sourceTimeBlock.addText(info[i + column][0]+ " • ")
                    source.font = Font.systemFont(variables["sourceThickness"]);
                    source.textColor = new Color(variables["sourceColor"]);
                let time = sourceTimeBlock.addText(info[i + column][1])
                    time.font = Font.lightSystemFont(variables["timeThickness"]);
                    time.textColor = new Color(variables["timeColor"]);


            // Titel einfügen
            let title = textBlock.addText(info[i + column][2]);
                title.font = Font.systemFont(variables["titleThickness"]);
                title.textColor = new Color(variables["titlecolor"]);

            // Inhalt einfügen
            let text = textBlock.addText(info[i + column][3]);
                text.font = Font.lightSystemFont(variables["textThickness"]);
                text.textColor = new Color(variables["textColor"]);

            // Trennstrich Zwischen den einzelnen Einträgen
            if (i < 4) {
                mainBlock.addSpacer(5)
                createLine(mainBlock, sizeY)
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