// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
const info = [
    ["The Tao of Mac", "31m ago", "displayplacer", "displayplacer is a cli utility to automate many of the"],
    ["heise Security", "46m ago", "Mehrere DoS-Lücken im Netzwerkanalytischen", "Wireshark 4.0.3 bringt einige Sicherheitsunwägbarkeiten"],
    ["heise Security", "1h ago", "Cyberkriminelle verschaffen sich Zugang zu", "Der Pay-TV Anbieter Sky bestätigt, dass sich einige"],
    ["heise Security", "1h ago", "UEFI Secure Boot: MSI stellt Bequemlichkeit bei", "Der Computerhardware-Hersteller bestätigt über"],
    ["iPhoneBlog.de", "1h ago", "Das iPad (10.Generation)", "Der folgende Artikel ist über 6000 Zeichen lang"]
];


async function createWidget() {

    // Neues Widget erstellen
    let listwidget = new ListWidget();

    // Hintergrundfarbe festlegen
    listwidget.backgroundColor = new Color("#ffffff");

    createLWidget(listwidget)

    // Erstellstes Widget zurückgeben
    return listwidget;
}

async function createLWidget(widget) {

    let main = widget.addStack()
    main.layoutHorizontally()

    createLogo(main)

    let mainBlock = main.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size(270, 330)

    createTextBlock(mainBlock, 270)
}

function createXlWidget(widget) {
    let main2 = widget.addStack()
    main2.layoutHorizontally()

    createLogo(main2)

    let mainBlock = main2.addStack()
    mainBlock.layoutVertically()
    mainBlock.size = new Size(320, 330)

    createTextBlock(mainBlock, 320)

    main2.addSpacer(10)

    let lineVertical = main2.addStack()
    lineVertical.size = new Size(1, 340)
    lineVertical.backgroundColor = Color.black()

    main2.addSpacer(10)


    let mainBlock2 = main2.addStack()
    mainBlock2.layoutVertically()
    mainBlock2.size = new Size(320, 330)

    createTextBlock(mainBlock2, 320)

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

function createTextBlock(mainBlock, sizeY) {

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
        let sourceTime = textBlock.addText(info[i][0] + " • " + info[i][1]);
        sourceTime.font = Font.systemFont(12);
        sourceTime.textColor = new Color("#838B8B");

        // Titel einfügen
        let title = textBlock.addText(info[i][2]);
        title.font = Font.systemFont(16);
        title.textColor = new Color("#000000");

        // Inhalt einfügen
        let text = textBlock.addText(info[i][3]);
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
