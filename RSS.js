// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;

const variables = {

	"xl": [],
    "l" : [],
    "sizeFactorsHorizontal": [],

    // Ersetzen Sie dies durch die URL Ihres gewünschten RSS-Feeds.
    "rssFeedUrl" : "https://www.instapaper.com/rss/12863732/38cMeSngKpjW4THt87PSVVMrqhw",

    "backgroundColor": "#F2F2F2",
    "lineColor": "#E0E0E2",

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
    "spaceToLinie" : 10,
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
    "columnCount": 3,
    "textblockHeight" : 57,
    "sourceThickness" : 11.9,
    "timeThickness" : 11.9,
    "titleThickness" : 15.8,
    "textThickness" : 13.9,
    "spaceToLinie" : 10,
    "spaceOverTitle": 2,
    "spaceUnderTitle": 2,
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

console.log(deviceSize)


/// Funktion für das Extrahieren von Titeln, Beschreibungen, Veröffentlichungsdaten und Verlegern
function extractDataFromRSS(text) {
    const regexItem = /<item>(.*?)<\/item>/gs;
    const regexTitle = /<title>(.*?)<\/title>/;
    const regexDescription = /<description>(.*?)<\/description>/;
    const regexPubDate = /<pubDate>(.*?)<\/pubDate>/;
    const regexLink = /<link>(https?:\/\/.*?)<\/link>/;

    const items = text.match(regexItem) || [];

    const titles = [];
    const descriptions = [];
    const pubDates = [];
    const publishers = [];
    const FullAddresses = [];

    for (const item of items) {
        const matchTitle = item.match(regexTitle);
        const matchDescription = item.match(regexDescription);
        const matchPubDate = item.match(regexPubDate);
        const matchLink = item.match(regexLink);

        if (matchTitle && matchTitle[1] && matchTitle[1].trim().length > 0) {
            titles.push(matchTitle[1].trim());
        }

        if (matchDescription && matchDescription[1] && matchDescription[1].trim().length > 0) {
            descriptions.push(matchDescription[1].trim());
        } else {
            descriptions.push(""); // Füge eine leere Zeichenkette hinzu, wenn die Beschreibung fehlt
        }

        if (matchPubDate && matchPubDate[1] && matchPubDate[1].trim().length > 0) {
            const timeDifference = getTimeDifferenceFromNow(matchPubDate[1].trim());
            pubDates.push(timeDifference);
        }

        if (matchLink && matchLink[1] && matchLink[1].trim().length > 0) {
            FullAddresses.push(matchLink[1].trim());
            publishers.push(getDomain(matchLink[1].trim()));
        }
    }


    if(titles.length < 8){
        variables["entriesCount"] = titles.length;
    }


    return { titles, descriptions, pubDates, publishers, FullAddresses };
}


function getDomain(url) {
   const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
   return matches && matches[1];
}


function getTimeDifferenceFromNow(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);

    const months = [
        "Januar", "Februar", "März", "April",
        "Mai", "Juni", "Juli", "August",
        "September", "Oktober", "November", "Dezember"
      ];
      
    // Berechne den Zeitunterschied in Millisekunden
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    // Berechne die vergangenen Tage
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysPassed === 0) {
        return `today`;
    } else if(daysPassed < 7){
        return `${daysPassed} days ago`;
    }
    else{
        
        const day = targetDate.getDate();
        const month = months[targetDate.getMonth()];
        const year = targetDate.getFullYear();
      
        const formattedDate = `${day} ${month} ${year}`;

        return `${formattedDate}`
    }
    
}


 // Funktion für das zusammenfügen der einzelnen Arrays zu einem verschachtelten Array
 function mergeArrays(arr1, arr2, arr3, arr4, arr5) {
   const mergedArray = [];

   const length = arr1.length; // Annahme: Alle vier Arrays haben die gleiche Länge

   for (let i = 0; i < length; i++) {
     const subArray = [arr1[i], arr2[i], arr3[i], arr4[i], arr5[i]];
     mergedArray.push(subArray);
   }

   return mergedArray;
 }

// Funktion für das festlegen der Website für das beziehen des RSS-Feed
async function fetchRSS() {
    // Überprüfe, ob eine Internetverbindung vorhanden ist
    if (await hasInternetConnection()) {
        const url = variables["rssFeedUrl"];
        const req = new Request(url);
        const feed = await req.loadString();
        // Speichere den abgerufenen Feed für den Fall, dass die Internetverbindung in Zukunft fehlt
        Keychain.set("lastRSSFeed", feed);
        return feed;
    } else {
        // Keine Internetverbindung vorhanden, verwende den zuletzt gespeicherten Feed
        return Keychain.get("lastRSSFeed") || "";
    }
}

// Funktion zur Überprüfung der Internetverbindung
async function hasInternetConnection() {
    try {
        const url = "https://www.google.com"; // Eine URL zum Überprüfen der Verbindung
        const req = new Request(url);
        await req.load();
        return true;
    } catch (e) {
        return false;
    }
}


 async function createWidget() {

     const rssFeed = await fetchRSS();
     const extractedData = extractDataFromRSS(rssFeed);
     const { titles, descriptions, pubDates, publishers, FullAddresses } = extractedData;
     info = mergeArrays(publishers, pubDates, titles, descriptions, FullAddresses);



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
         else{
            let textBlock = mainBlock.addStack()
                textBlock.url = info[i + column][4];
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
                title.font = Font.mediumSystemFont(variables[widgetSize].titleThickness);
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