// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
const fm = FileManager.iCloud(); // Definieren der fm-Variablen hier hinzugefügt
const bookmarkName = "test"; // Ersetzen Sie dies durch den tatsächlichen Namen Ihres Bookmark
const folderPath = fm.bookmarkedPath(bookmarkName);
const fileNames = fm.listContents(folderPath);

// Funktion zur Berechnung des Zeitunterschiedes
function getTimeDifferenceFromNow(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  // Berechne den Zeitunterschied in Millisekunden
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  // Berechne die vergangenen Minuten und Stunden
  const minutesPassed = Math.floor(timeDifference / (1000 * 60));
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesPassed < 60) {
    return `${minutesPassed}min ago`;
  } else {
    return `${hoursPassed}h ago`;
  }
}

let info = [];
const titles = [];
const dates = [];
const descriptions = [];

// Sortieren Sie die Dateien nach dem Änderungsdatum (neueste zuerst)
 fileNames.sort((fileName1, fileName2) => {
        const filePath1 = `${folderPath}/${fileName1}`;
        const filePath2 = `${folderPath}/${fileName2}`;
        const date1 = fm.modificationDate(filePath1);
        const date2 = fm.modificationDate(filePath2);
        return date2 - date1; // Sortiere absteigend
    });

async function collectFileInformation() {
    let count = 0; // Zähler für die Anzahl der geholten Einträge

    const fileContentsPromises1 = fileNames.map(async (fileName) => {
        if (count >= 10) {
            return; // Abbruch, wenn 10 Einträge geholt wurden
        }

        if (fileName.endsWith(".md")) {
            const filePath = `${folderPath}/${fileName}`;
            //Titel beziehen
            const title = fileName.replace(".md", "");
            titles.push(title);

            //Content beziehen
            const desc = fm.readString(filePath)
            descriptions.push(desc)

            //Datum beziehen
            const date = fm.modificationDate(filePath);
            //Datum umrechnen
            dates.push(getTimeDifferenceFromNow(date))

            count++; // Zähler erhöhen
        }
    });
}




function mergeArrays(arr1, arr2, arr3, arr4) {
  const mergedArray = [];

  const length = arr1.length; // Annahme: Alle vier Arrays haben die gleiche Länge

  for (let i = 0; i < length; i++) {
    const subArray = [arr1[i], arr2[i], arr3[i], arr4[i]];
    mergedArray.push(subArray);
  }

  return mergedArray;
}


const Publishers = ["a","b","c","d","e","f","g","h","i","j"]



async function createWidget() {

    await collectFileInformation();

    info = mergeArrays(Publishers, dates, titles, descriptions);





    // Neues Widget erstellen
    let listwidget = new ListWidget();

    // Hintergrundfarbe festlegen
    listwidget.backgroundColor = new Color("#ffffff");

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

    createLogo(main)

    let mainBlock = main.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size(270, 330)

    createTextBlock(mainBlock, 270, 0)
}

function createXlWidget(widget) {
    let main2 = widget.addStack()
    main2.layoutHorizontally()

    createLogo(main2)

    let mainBlock = main2.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size(310, 330)

    createTextBlock(mainBlock, 310, 0)

    main2.addSpacer(10)

    let lineVertical = main2.addStack()
    lineVertical.size = new Size(1, 340)
    lineVertical.backgroundColor = new Color("#E0EEEE")

    main2.addSpacer(10)


    let mainBlock2 = main2.addStack()
    mainBlock2.layoutVertically()
    mainBlock2.size = new Size(310, 330)

    createTextBlock(mainBlock2, 310, 1)

}

function createLogo(main) {
    let logoBlock = main.addStack()
    logoBlock.setPadding(0, 10, 0, 10)
    logoBlock.layoutVertically()
    logoBlock.size = new Size(55, 330)
    let icon = SFSymbol.named("tortoise")
    let addIcon = logoBlock.addImage(icon.image)
}

function createLine(mainBlock) {
    let line = mainBlock.addStack()
    line.size = new Size(270, 0.5)
    line.backgroundColor = new Color("#E0EEEE") //!!!
}

function createTextBlock(mainBlock, sizeY, x) {

    if(x === 0){
        nameFehlt = 0
    }
    else{
        nameFehlt = 5
    }


    if (info.length <= 5) {
        max = info.length-1
    }
    else {
        max = 4
    }

    for (i = 0; i <= max; i++) {

        if (i > 0) {
            mainBlock.addSpacer(5)
        }

        let textBlock = mainBlock.addStack()
        textBlock.layoutVertically()
        textBlock.size = new Size(sizeY, 53)

        // Quelle und Zeitdifferenz einfügen
        let sourceTimeBlock = textBlock.addStack()
            sourceTimeBlock.layoutHorizontally()
            let source = sourceTimeBlock.addText(info[i + nameFehlt][0] + " • ")
                source.font = Font.systemFont(12);
                source.textColor = new Color("#838B8B");
            let time = sourceTimeBlock.addText(info[i + nameFehlt][1])
                time.font = Font.lightSystemFont(12);
                time.textColor = new Color("#838B8B");


        // Titel einfügen
        let title = textBlock.addText(info[i + nameFehlt][2]);
        title.font = Font.systemFont(16);
        title.textColor = new Color("#000000");

        // Inhalt einfügen
        let text = textBlock.addText(info[i + nameFehlt][3]);
        text.font = Font.lightSystemFont(15);
        text.textColor = new Color("#000000");

        // Trennstrich Zwischen den einzelnen Einträgen
        if (i < max) {
            mainBlock.addSpacer(5)
            createLine(mainBlock)
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