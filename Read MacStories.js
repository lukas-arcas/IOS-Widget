// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: newspaper;
// This script shows articles from MacStories. The script can be used either in the app, as a widget on your Home Screen or through Shortcuts. The behaviour of the script will vary slightly depending on where it's used.

const info = [
    ["The Tao of Mac", "31m ago", "displayplacer", "displayplacer is a cli utility to automate many of the"],
    ["heise Security", "46m ago", "Mehrere DoS-Lücken im Netzwerkanalytischen", "Wireshark 4.0.3 bringt einige Sicherheitsunwägbarkeiten"],
    ["Test", "Test", "Test", "Test"],
    ["Test", "Test", "Test", "Test"],
    ["Test", "Test", "Test", "Test"]
];

let widget = new ListWidget();
widget.backgroundColor = Color.white()

if(config.widgetFamily === "large"){

    createLWidget(widget)

}
else if(config.widgetFamily === "extraLarge"){

    createXlWidget(widget)

}
else{

    createLWidget(widget)
    //let test2 = widget.addText("else")
    //test2.textColor = Color.black()

}


Script.setWidget(widget);
widget.presentLarge();      //anzeige größe beim drauf klicken
Script.complete();


function createXlWidget(main){
let main2 = widget.addStack()
    main2.layoutHorizontally()

    createLogo(main2)

    let mainBlock = main2.addStack()
        mainBlock.layoutVertically()
        mainBlock.size = new Size(320,330)

        createTextBlock(mainBlock)

    main2.addSpacer(10)

    let lineVertical = main2.addStack()
        lineVertical.size = new Size(1,340)
        lineVertical.backgroundColor = Color.black()

    main2.addSpacer(10)


    let mainBlock2 = main2.addStack()
        mainBlock2.layoutVertically()
        mainBlock2.size = new Size(320,330)

        createTextBlock(mainBlock2)

}

function createLWidget(widget){
let main = widget.addStack()
    main.layoutHorizontally()

    createLogo(main)

    let mainBlock = main.addStack()
        mainBlock.layoutVertically()
        mainBlock.size = new Size(270,330)

        createTextBlock(mainBlock)
}

function createLogo(main){
let logoBlock = main.addStack()
        logoBlock.setPadding(0,10,0,10)
        logoBlock.layoutVertically()
        logoBlock.size = new Size(65,330)
        let icon = SFSymbol.named("tortoise")
            let addIcon = logoBlock.addImage(icon.image)
}

function createLine(mainBlock){
    let line = mainBlock.addStack()
        line.size = new Size(270, 1)
        line.backgroundColor = Color.gray() //!!!
}

function createTextBlock(mainBlock){

max = 4;

 for(i=0; i <= max;i++){
 let textBlock = mainBlock.addStack()
        textBlock.layoutVertically()
        textBlock.size = new Size(270, 65.2)

       let sourceTime = textBlock.addText(info[i][0] + " • " + info[i][1]);
       //heading.centerAlignText();
           sourceTime.font = Font.lightSystemFont(15);
           sourceTime.textColor = new Color("#D3D3D3");

        // Titel einfügen
       let title = textBlock.addText(info[i][2]);
           title.font = Font.systemFont(20);
           title.textColor = new Color("#000000");

       // Inhalt einfügen
       let text = textBlock.addText(info[i][3]);
           text.font = Font.lightSystemFont(15);
           text.textColor = new Color("#000000");

       if(i < max){
        createLine(mainBlock)
       }
 }

 }