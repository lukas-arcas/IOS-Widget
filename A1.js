// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
const info = [
  [
    "The Tao of Mac",
    "31m ago",
    "displayplacer",
    "displayplacer is a cli utility to automate many of the",
  ],
  [
    "heise Security",
    "46m ago",
    "Mehrere DoS-Lücken im Netzwerkanalytischen",
    "Wireshark 4.0.3 bringt einige Sicherheitsunwägbarkeiten",
  ],
  [
    "heise Security",
    "1h ago",
    "Cyberkriminelle verschaffen sich Zugang zu",
    "Der Pay-TV Anbieter Sky bestätigt, dass sich einige",
  ],
  [
    "heise Security",
    "1h ago",
    "UEFI Secure Boot: MSI stellt Bequemlichkeit bei",
    "Der Computerhardware-Hersteller bestätigt über",
  ],
  [
    "iPhoneBlog.de",
    "1h ago",
    "Das iPad (10.Generation)",
    "Der folgende Artikel ist über 6000 Zeichen lang",
  ],
];

const variables = {
  xl: [],
  l: [],
  sizeFactorsHorizontal: [],

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

const scriptureSize = {};

function createWidget() {
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

  // Erstelltes Widget zurückgeben
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
      let textBlock = mainBlock.addStack();
      textBlock.layoutVertically();
      textBlock.size = new Size(
        sizeY,
        variables[widgetSize].textblockHeight *
          variables[widgetSize].sizeFactorsVertical[deviceSize]
      );

      let sourceTimeBlock = textBlock.addStack();
      sourceTimeBlock.layoutHorizontally();

      let source = sourceTimeBlock.addText(info[i][0] + " • ");
      source.font = Font.mediumSystemFont(
        variables[widgetSize].sourceThickness
      );
      source.textColor = new Color(variables["sourceColor"]);

      let time = sourceTimeBlock.addText(info[i][1]);
      time.font = Font.regularSystemFont(variables[widgetSize].timeThickness);
      time.textColor = Color.dynamic(
        new Color(variables["timeColor"]),
        new Color(variables["timeColorDark"])
      );

      let title = textBlock.addText(info[i][2]);
      title.font = Font.mediumSystemFont(variables[widgetSize].titleThickness);
      title.textColor = Color.dynamic(
        new Color(variables["titlecolor"]),
        new Color(variables["timeColorDark"])
      );

      let text = textBlock.addText(info[i][3]);
      text.font = Font.lightSystemFont(variables[widgetSize].textThickness);
      text.textColor = Color.dynamic(
        new Color(variables["textColor"]),
        new Color(variables["textColorDark"])
      );

      if (i < variables[widgetSize].columnCount) {
        mainBlock.addSpacer(variables[widgetSize].spaceToLinie);
        createLine(mainBlock, sizeY, "lineColor");
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
