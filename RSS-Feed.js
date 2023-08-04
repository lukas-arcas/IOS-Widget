// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;

// Funktion für das Beziehen des Links aus dem RSS-Feed und extraktion des Website Namens
function extractPublishersFromRSS(text) {
    const regex = /<link>https?:\/\/(.*?)\//g; // Regex, um den Domainnamen zu extrahieren
    const Publishers = [];
    let match;
    let count = 0;
    let info;
    let nameFehlt;
  
    while ((match = regex.exec(text)) !== null) {
      if (match[1] && match[1].trim().length > 0) {
        Publishers.push(match[1].trim());
        count++;
  
        if (count === 11) {
          break; // Schleife beenden, wenn 11 Domainnamen gespeichert wurden
        }
      }
    }
  
    // Immer den ersten Eintrag löschen da dieser auf die Instapaper Seite zeigt
    Publishers.shift();
  
    return Publishers;
  }
  
  
  // Funktion für das entnehmen der Titel aus dem RSS-Feed
  function extractTitlesFromRSS(text) {
    const regex = /<title>(.*?)<\/title>/g;
    const titles = [];
    let match;
    let count = 0;
  
    while ((match = regex.exec(text)) !== null) {
      if (match[1] && match[1].trim().length > 0) {
        titles.push(match[1].trim());
        count++;
  
        if (count === 11) {
          break; // Schleife beenden, wenn 11 Titel gespeichert wurden
        }
      }
    }
  
     // Immer den ersten Eintrag löschen da dieser auf die Instapaper Seite zeigt
     titles.shift();
  
    return titles;
  }
  
  
  // Funktion für das entnehmen der Beschreibung aus dem RSS-Feed
  function extractDescriptionsFromRSS(text) {
    const regex = /<description>(.*?)<\/description>/g;
    const descriptions = [];
    let match;
    let count = 0;
  
    while ((match = regex.exec(text)) !== null) {
      if (match[1] && match[1].trim().length > 0) {
        descriptions.push(match[1].trim());
        count++;
  
        if (count === 10) {
          break; // Schleife beenden, wenn 10 Beschreibungen gespeichert wurden
        }
      }
    }
  
    return descriptions;
  }
  
  // Funkton für das entnehmen des Zeitpunkts der Veröffentlichung und Umrechnung in passendes Format
  function extractPubDateFromRSS(text) {
    const parser = new XMLParser(text, false);
    const PubDates = [];
  
    let inTitleTag = false;
    let titleCount = 0; // Zählvariable für die gefundenen Titel
  
    // Funktion zur Berechnung des Zeitunterschieds
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
  
  
    // Diese Funktion wird aufgerufen, wenn der Parser das Startelement eines Tags findet
    parser.didStartElement = (name, attrs) => {
      if (name === "pubDate" && titleCount < 10) {
        // Wenn ein <PubDates>-Tag gefunden wird, setzen wir inTitleTag auf true, um die foundCharacters-Funktion zu aktivieren
        inTitleTag = true;
      } else {
        // Wenn ein anderes Tag als <PubDates> gefunden wird, setzen wir inTitleTag auf false, um die foundCharacters-Funktion zu deaktivieren
        inTitleTag = false;
      }
    };
  
    // Diese Funktion wird aufgerufen, wenn der Parser den Text innerhalb eines Tags findet
    parser.foundCharacters = (str) => {
      if (inTitleTag && str.trim().length > 0 && titleCount < 10) {
        const timeDifference = getTimeDifferenceFromNow(str.trim()); // Berechne den Zeitunterschied
        PubDates.push(timeDifference); // Füge den berechneten Zeitunterschied dem Array hinzu
        titleCount++; // Erhöhen Sie die Zählvariable nach dem Hinzufügen eines Titels
      }
    };
  
    // Hier startet der Parser den Vorgang, um den XML-Text zu analysieren
    parser.parse();
  
    // Am Ende geben wir das Array mit den geparsten Titeln zurück
    return PubDates;
  }
  
  
  // Funktion für das zusammenfügen der einzelnen Arrays zu einem verschachtelten Array
  function mergeArrays(arr1, arr2, arr3, arr4) {
    const mergedArray = [];
  
    const length = arr1.length; // Annahme: Alle vier Arrays haben die gleiche Länge
  
    for (let i = 0; i < length; i++) {
      const subArray = [arr1[i], arr2[i], arr3[i], arr4[i]];
      mergedArray.push(subArray);
    }
  
    return mergedArray;
  }
  
  // Funktion für das festlegen der Website für das beziehen des RSS-Feed
  async function fetchRSS() {
    const url = "https://www.instapaper.com/rss/12863732/38cMeSngKpjW4THt87PSVVMrqhw"; // Ersetzen Sie dies durch die URL Ihres gewünschten RSS-Feeds.
    const req = new Request(url);
    const feed = await req.loadString();
    return feed;
  }
  
  
  
  async function createWidget() {
  
      const rssFeed = await fetchRSS();
      const titles = extractTitlesFromRSS(rssFeed);
      const descriptions = extractDescriptionsFromRSS(rssFeed);
      const pubDates = extractPubDateFromRSS(rssFeed);
      const Publishers = extractPublishersFromRSS(rssFeed);
      info = mergeArrays(Publishers, pubDates, titles, descriptions);
  
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