// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;

const variables = {

    // Ersetzen Sie dies durch die URL Ihres gewünschten RSS-Feeds.
    "rssFeedUrl" : "https://www.instapaper.com/rss/12863732/38cMeSngKpjW4THt87PSVVMrqhw",

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


    if(titles.length < 10){
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

 function createLogo(main) {
     let logoBlock = main.addStack()
     logoBlock.setPadding(0, 10, 0, 10)
     logoBlock.layoutVertically()
     logoBlock.size = new Size(variables["logoWidth"], variables["height"])
     let icon = SFSymbol.named(variables["logoIcon"])
     let addIcon = logoBlock.addImage(icon.image)
 }

 function createLine(mainBlock, length) {
     let line = mainBlock.addStack()
     line.size = new Size(length, variables["horizontalLineThickness"])
     line.backgroundColor = new Color(variables["lineColor"])
 }

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
            let textBlock = mainBlock.addStack()
                textBlock.url = info[i + column][4];
                textBlock.layoutVertically()
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