// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: magic;


let widget = new ListWidget();
widget.backgroundColor = Color.white();



if(config.widgetFamily === "large"){

    createLWidget(widget)

}
else if(config.widgetFamily === "extraLarge"){

    createXlWidget(widget)

}
else{
    let test2 = widget.addText("else")
    test2.textColor = Color.black()

}



//Widget an Scriptable Zurückgeben, Anzeigen und Script beenden
Script.setWidget(widget);
widget.presentSmall();
Script.complete();

function createLWidget(w){
    let main = w.addStack()
    main.layoutVertically()
        let test11 = main.addStack(test(w, main))
            test11.layoutVertically()
        let test12 = main.addStack(test(w, main))
            test12.layoutVertically()
        let test13 = main.addStack(test(w, main))
            test13.layoutVertically()
        let test14 = main.addStack(test(w, main))
            test14.layoutVertically()
        let test15 = main.addStack(test(w, main))
            test15.layoutVertically()
}

function createXlWidget(w){
    let main = w.addStack()
        main.layoutHorizontally()

        let leftStackMain = main.addStack()
        leftStackMain.layoutVertically()
                                   //let leftStack1 = leftStackMain.addStack()
                                    // let leftStack2 = leftStackMain.addStack()
          //  leftStackMain.addStack(createMainRow(w))
          //  leftStackMain.addStack(createMainRow(w))



            let test3 = leftStackMain.addStack(test(w, leftStackMain))
                test3.layoutVertically()
            let test4 = leftStackMain.addStack(test(w, leftStackMain))
                test4.layoutVertically()
            let test5 = leftStackMain.addStack(test(w, leftStackMain))
                test5.layoutVertically()
            let test6 = leftStackMain.addStack(test(w, leftStackMain))
                test6.layoutVertically()
            let test7 = leftStackMain.addStack(test(w, leftStackMain))
                test7.layoutVertically()

    main.addSpacer()

        let rightStackMain = main.addStack()
        rightStackMain.layoutVertically()
        //rightStackMain.addStack(createMainRow(w, rightStackMain))
        //rightStackMain.addStack(createMainRow(w, rightStackMain))

       // let rightStack1 = rightStackMain.addStack()
        let test1 = rightStackMain.addStack(test(w, rightStackMain))
            test1.layoutVertically()
        let test2 = rightStackMain.addStack(test(w, rightStackMain))
            test2.layoutVertically()
        let test8 = rightStackMain.addStack(test(w, rightStackMain))
            test8.layoutVertically()
        let test9 = rightStackMain.addStack(test(w, rightStackMain))
            test9.layoutVertically()
        let test10 = rightStackMain.addStack(test(w, rightStackMain))
            test10.layoutVertically()



    //let lefttext = leftStack1.addText("leftStack1test")
 //   lefttext.textColor = Color.black()
 //   leftStack1.layoutVertically()

 //   let lefttext2 = leftStack2.addText("leftStack2")
 //       lefttext2.textColor = Color.black()
   //     leftStack2.layoutVertically()

 //   let righttext = rightStack1.addText("rightStack1")
  //  righttext.textColor = Color.black()
  //  rightStack1.layoutVertically()


}

function test(w, rightStackMain){

       let rightStack1 = rightStackMain.addStack()
       rightStack1.layoutVertically()
      // let righttext = rightStack1.addText("rightStack1")
      //  righttext.textColor = Color.black()

        test2(w, rightStack1)

}

function test2(w, rightStack1){

       let rightStackX = rightStack1.addStack()
        rightStackX.layoutVertically()

        var anbieter = rightStackX.addText("Anbieter" + "  *  " +  "Zeit" )
            anbieter.textColor = Color.gray();

        var test1 = rightStackX.addText("second")
            test1.textColor = Color.black();
            test1.font = Font.boldSystemFont(16);

        var test2 = rightStackX.addText("third")
            test2.textColor = Color.black();

        rightStackX.addSpacer()


}

function createMainRow(w){
    var  stack = w.addStack()
      //  stack.layoutHorizontally()
        stack.addSpacer() // alignment left

       createFirstRow(w)
       createSecondRow(w)
       createThirdRow(w)

    return stack
}

function createFirstRow(w){
    var stack = w.addStack()
     //   stack.layoutHorizontally()

        var anbieter = stack.addText("Anbieter")
            anbieter.textColor = Color.gray();

        var zeit = stack.addText("Zeit")
            zeit.textColor = Color.gray();

        return stack
}

function createSecondRow(w){
    var stack = w.addStack()
    //    stack.layoutHorizontally()

        var test = stack.addText("second")
            test.textColor = Color.black();
            test.font = Font.boldSystemFont(16);

        return stack
}

function createThirdRow(w){
    var stack = w.addStack()
   //     stack.layoutHorizontally()

        var test = stack.addText("third")
            test.textColor = Color.black();

        return stack
}
