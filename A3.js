// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: magic;

const variables = {
  xl: [],
  l: [],
  sizeFactorsHorizontal: [],

  // Ersetzen Sie dies durch die bookmark Ihres gewünschten Obsidian-Ordners.
  bookmark: "test_2",

  backgroundColor: "#F2F2F2",
  backgroundColorDark: "#000000",
  lineColor: "#E0E0E2",

  height: 330,
  lWidth: 270,
  xlWidth: 310,

  vertLineThickness: 1,
  vertLineLength: 340,
  horizontalLineThickness: 0.5,
  horitontalLineLength: 270,

  logoWidth: 55,

  sourceColor: "#707070",

  timeColor: "#707070",
  timeColorDark: "#FFFFFF",

  titlecolor: "#000000",
  titleColorDark: "#FFFFFF",

  textColor: "#000000",
  textColorDark: "#FFFFFF",

  firstColumn: 0,
  secondColumn: 4,

  logoIcon: "tortoise",

  entriesCount: 8,
};
variables["xl"] = {
  columnCount: 3,
  textblockHeight: 57,
  sourceThickness: 11.9,
  timeThickness: 11.9,
  titleThickness: 15,
  textThickness: 12,
  spaceToLinie: 11,
  spaceOverTitle: 1.7,
  spaceUnderTitle: 1.7,
  sizeFactorsHorizontal: [],
  sizeFactorsVertical: [],
  // variaben welche nur für das xl-widget gelten
};

// Sollte Ihre Device nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Breite des XL Widgets für Ihre Screensize mit unserem Ausgangswert 715.5 dividieren.
variables["xl"]["sizeFactorsHorizontal"] = {
  "768x1024": 0.886792, // 634.5
  "744x1133": 0.886792, // 634.5
  "810x1080": 0.93501, // 669
  "820x1180": 1, // 715.5
  "834x1112": 0.953179, // 682
  "834x1194": 1, // 715.5
  "954x1373": 1.014675, // 726
  "970x1389": 1.014675, // 726
  "1024x1366": 1.111111, // 795
  "1192x1590": 1.201956, // 860
};

// Sollte Ihre Device nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Höhe des XL Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["xl"]["sizeFactorsVertical"] = {
  "768x1024": 0.893274, // 305.5
  "744x1133": 0.893274, // 305.5
  "810x1080": 0.937134, // 320.5
  "820x1180": 1, // 342
  "834x1112": 0.957602, // 327.5
  "834x1194": 1, // 342
  "954x1373": 1.023391, // 350
  "970x1389": 1.023391, // 350
  "1024x1366": 1.106725, // 378.5
  "1192x1590": 1.204678, // 412
};

variables["l"] = {
  columnCount: 3,
  textblockHeight: 57,
  sourceThickness: 11.9,
  timeThickness: 11.9,
  titleThickness: 15,
  textThickness: 12,
  spaceToLinie: 11,
  spaceOverTitle: 1.7,
  spaceUnderTitle: 1.7,
  sizeFactorsHorizontal: [],
  sizeFactorsVertical: [],
  // variaben welche nur für das l-widget gelten
};

// Sollte Ihre Screensize nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Breite des L Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["l"]["sizeFactorsHorizontal"] = {
  "430x932": 1.064327, // 364
  "428x926": 1.064327, // 364
  "414x896": 1.052631, // 360
  "414x736": 1.017543, // 348
  "393x852": 0.988304, // 338
  "390x844": 0.988304, // 338
  "375x812": 0.961988, // 329
  "375x667": 0.938596, // 321
  "360x780": 0.961988, // 329
  "320x568": 0.853801, // 292

  "768x1024": 0.893274, // 305.5
  "744x1133": 0.893274, // 305.5
  "810x1080": 0.937134, // 320.5
  "820x1180": 1, // 342
  "834x1112": 0.957602, // 327.5
  "834x1194": 1, // 342
  "954x1373": 1.023391, // 350
  "970x1389": 1.023391, // 350
  "1024x1366": 1.106725, // 378.5
  "1192x1590": 1.204678, // 412
};

// Sollte Ihre Screensize nicht aufgeführt sein müssen Sie diese hier mit dem dazugehörigen Faktor als Wert hinzufügen.
// Den Faktor können Sie berechen, indem Sie unter der Website https://developer.apple.com/design/human-interface-guidelines/widgets
// in der jeweiligen Reihe "Canvas" die Höhe des L Widgets für Ihre Screensize mit unserem Ausgangswert 342 dividieren.
variables["l"]["sizeFactorsVertical"] = {
  "430x932": 1.116959, // 382
  "428x926": 1.116959, // 382
  "414x896": 1.108187, // 379
  "414x736": 1.043859, // 357
  "393x852": 1.035087, // 354
  "390x844": 1.035087, // 354
  "375x812": 1.008771, // 345
  "375x667": 0.947368, // 324
  "360x780": 1.008771, // 345
  "320x568": 0.909356, // 311

  "768x1024": 0.893274, // 305.5
  "744x1133": 0.893274, // 305.5
  "810x1080": 0.937134, // 320.5
  "820x1180": 1, // 342
  "834x1112": 0.957602, // 327.5
  "834x1194": 1, // 342
  "954x1373": 1.023391, // 350
  "970x1389": 1.023391, // 350
  "1024x1366": 1.106725, // 378.5
  "1192x1590": 1.204678, // 412
};

let deviceSize = Device.screenSize().width + "x" + Device.screenSize().height;

const fm = FileManager.iCloud(); // Definieren der fm-Variablen hier hinzugefügt
const bookmarkName = variables["bookmark"];
const folderPath = fm.bookmarkedPath(bookmarkName); // Speicherpfad zu dem Ordner in dem die Obsidian Einträge abgelegt sind

// Splitten Sie den String anhand des letzten "/"
var parts = folderPath.split("/");

// Der letzte Teil (in diesem Fall parts[parts.length - 1]) enthält den gewünschten Text
var mainFolder = parts[parts.length - 1];

function getObsidianUrl(index) {
  let url = "obsidian://vault/";

  // Definieren Sie den regulären Ausdruck
  var pattern = /\/Documents\/(.*)$/;

  // Wenden Sie den regulären Ausdruck auf den Eingabestring an
  var match = allFilePaths[index].match(pattern);

  // Überprüfen Sie, ob ein Match gefunden wurde
  if (match) {
    // Index 1 des Matches enthält den gewünschten Teil des Strings
    var result = match[1];
  } else {
    console.log("Kein Match gefunden.");
  }

  url += result;

  url = url.split(" ").join("%20");

  return url;
}

// Rekursive Funktion, um alle Dateien in einem Verzeichnis und seinen Unterordnern aufzulisten
function listFilesRecursively(folderPath, isFirstCall = true) {
  const fileNames = fm.listContents(folderPath);
  const filePaths = [];

  fileNames.forEach((fileName) => {
    if (!fileName.startsWith(".")) {
      // Ignoriere versteckte Dateien und Ordner
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

function extractFolderName(paths) {
  var pattern = /\/([^\/]+)\/[^\/]+$/;
  const allOrdners = [];

  for (path in paths) {
    var match = paths[path].match(pattern);
    if (match[1] === mainFolder) {
      allOrdners.push("/"); // "/"
    } else {
      allOrdners.push(match[1]);
    }
  }
  const allOrdners8 = allOrdners.slice(0, 8);
  return allOrdners8;
}

function getTimeDifferenceFromNow(dateString) {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const months = [
    "Jan",
    "Feb",
    "März",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Dez",
  ];

  // Berechne den Zeitunterschied in Millisekunden
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  // Berechne die vergangenen Tage
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) {
    return `today`;
  } else if (daysPassed < 7) {
    return `${daysPassed} days ago`;
  } else {
    const day = targetDate.getDate();
    const month = months[targetDate.getMonth()];
    const year = targetDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return `${formattedDate}`;
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
    if (count >= 8) {
      return; // Abbruch, wenn 8 Einträge geholt wurden
    }

    const fileName = filePath.split("/").pop();
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

  const ordner = extractFolderName(allFilePaths);

  //fügt leeren Inhalt hinzu
  if (titles.length < 8) {
    variables["entriesCount"] = titles.length;
  }

  info = mergeArrays(ordner, dates, titles, descriptions);

  // Neues Widget erstellen
  let listwidget = new ListWidget();

  // Hintergrundfarbe festlegen
  listwidget.backgroundColor = Color.dynamic(
    new Color(variables["backgroundColor"]),
    new Color(variables["backgroundColorDark"])
  );

  const refreshInterval = 300;
  listwidget.refreshAfterDate = new Date(Date.now() + refreshInterval);

  //Check der Widget-Größe
  if (config.widgetFamily === "large") {
    createLWidget(listwidget);
  } else if (config.widgetFamily === "extraLarge") {
    createXlWidget(listwidget);
  }

  // Erstellstes Widget zurückgeben
  return listwidget;
}
function createLWidget(widget) {
  let main = widget.addStack();
  main.layoutHorizontally();

  createLogo(main, "l");

  let mainBlock = main.addStack();
  mainBlock.layoutVertically();
  mainBlock.size = new Size(
    variables["lWidth"] * variables.l.sizeFactorsHorizontal[deviceSize],
    variables["height"] * variables.l.sizeFactorsVertical[deviceSize]
  );

  createTextBlock(
    mainBlock,
    variables["lWidth"] * variables.l.sizeFactorsHorizontal[deviceSize],
    variables["firstColumn"],
    "l"
  );
}

// Funktion für das erstellen eines Widgets der Größe XL
function createXlWidget(widget) {
  let main2 = widget.addStack();
  main2.layoutHorizontally();

  createLogo(main2, "xl");

  let mainBlock = main2.addStack();
  mainBlock.layoutVertically();
  mainBlock.size = new Size(
    variables["xlWidth"] * variables.xl.sizeFactorsHorizontal[deviceSize],
    variables["height"] * variables.xl.sizeFactorsVertical[deviceSize]
  );

  createTextBlock(
    mainBlock,
    variables["xlWidth"] * variables.xl.sizeFactorsHorizontal[deviceSize],
    variables["firstColumn"],
    "xl"
  );

  main2.addSpacer(10);

  let lineVertical = main2.addStack();
  lineVertical.size = new Size(
    variables["vertLineThickness"],
    variables["vertLineLength"] * variables.xl.sizeFactorsVertical[deviceSize]
  );
  lineVertical.backgroundColor = new Color(variables["lineColor"]);

  main2.addSpacer(10);

  let mainBlock2 = main2.addStack();
  mainBlock2.layoutVertically();
  mainBlock2.size = new Size(
    variables["xlWidth"] * variables.xl.sizeFactorsHorizontal[deviceSize],
    variables["height"] * variables.xl.sizeFactorsVertical[deviceSize]
  );

  createTextBlock(
    mainBlock2,
    variables["xlWidth"] * variables.xl.sizeFactorsHorizontal[deviceSize],
    variables["secondColumn"],
    "xl"
  );
}

// Funktion für das erstellen des Logos für das Widget
function createLogo(main, widgetSize) {
  let logoBlock = main.addStack();
  logoBlock.setPadding(0, 10, 0, 10);
  logoBlock.layoutVertically();
  logoBlock.size = new Size(
    variables["logoWidth"] *
      variables[widgetSize].sizeFactorsHorizontal[deviceSize],
    variables["height"] * variables[widgetSize].sizeFactorsVertical[deviceSize]
  );
  let icon = SFSymbol.named(variables["logoIcon"]);
  let addIcon = logoBlock.addImage(icon.image);
  addIcon.tintColor = Color.dynamic(Color.black(), Color.white());
}

// Funktion für das erstellen der Trennlinien zischen den einzelnen Einträgen im Widget

function createLine(mainBlock, length, color) {
  let line = mainBlock.addStack();
  line.size = new Size(length, variables["horizontalLineThickness"]);
  line.backgroundColor = new Color(variables[color]);
}

function createTextBlock(mainBlock, sizeY, x, widgetSize) {
  if (x === 0) {
    column = variables["firstColumn"];
  } else {
    column = variables["secondColumn"];
  }

  for (i = 0; i <= variables[widgetSize].columnCount; i++) {
    if (i > 0) {
      mainBlock.addSpacer(variables[widgetSize].spaceToLinie);
    }

    if (i + column > variables["entriesCount"] - 1) {
      let textBlock = mainBlock.addStack();
      textBlock.layoutVertically();
      textBlock.size = new Size(
        sizeY,
        variables[widgetSize].textblockHeight *
          variables[widgetSize].sizeFactorsVertical[deviceSize]
      );
      if (i < variables[widgetSize].columnCount) {
        mainBlock.addSpacer(variables[widgetSize].spaceToLinie);
        createLine(mainBlock, sizeY, "backgroundColor");
      }
    } else {
      // Hinzufügen eines Stacks, in dem der jeweilige Eintrag abgebildet wird
      let textBlock = mainBlock.addStack();
      textBlock.url = getObsidianUrl(i + column);
      textBlock.layoutVertically();
      textBlock.size = new Size(
        sizeY,
        variables[widgetSize].textblockHeight *
          variables[widgetSize].sizeFactorsVertical[deviceSize]
      );

      // Quelle und Zeitdifferenz einfügen
      let sourceTimeBlock = textBlock.addStack();
      sourceTimeBlock.layoutHorizontally();
      let source = sourceTimeBlock.addText(info[i + column][0] + " • ");
      source.font = Font.mediumSystemFont(
        variables[widgetSize].sourceThickness
      );
      source.textColor = new Color(variables["sourceColor"]);
      let time = sourceTimeBlock.addText(info[i + column][1]);
      time.font = Font.regularSystemFont(variables[widgetSize].timeThickness);
      time.textColor = Color.dynamic(
        new Color(variables["timeColor"]),
        new Color(variables["timeColorDark"])
      );

      textBlock.addSpacer(variables[widgetSize].spaceOverTitle);

      // Titel einfügen
      let title = textBlock.addText(info[i + column][2]);
      title.font = Font.mediumSystemFont(variables[widgetSize].titleThickness);
      title.textColor = Color.dynamic(
        new Color(variables["titlecolor"]),
        new Color(variables["timeColorDark"])
      );

      textBlock.addSpacer(variables[widgetSize].spaceUnderTitle);

      // Inhalt einfügen
      let text = textBlock.addText(info[i + column][3]);
      text.font = Font.lightSystemFont(variables[widgetSize].textThickness);
      text.textColor = Color.dynamic(
        new Color(variables["textColor"]),
        new Color(variables["textColorDark"])
      );

      // Trennstrich Zwischen den einzelnen Einträgen
      if (i < variables[widgetSize].columnCount) {
        mainBlock.addSpacer(variables[widgetSize].spaceToLinie);
        createLine(mainBlock, sizeY, "lineColor");
      }
    }
  }
}

let widget = await createWidget();

// überprüfen wo das Scribt ausgeführt wird
if (config.runsInWidget) {
  // Im Widget ausgeführt, auf Homescreen anzeigen
  Script.setWidget(widget);
} else {
  // In der App ausgeführt
  widget.presentLarge();
}

Script.complete();
