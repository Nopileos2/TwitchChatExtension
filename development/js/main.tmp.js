/**
 * Created by Internet-Karl on 11.01.2016.
 */
var idOfTextarea;
var localStorageData = {};
var localStorageKey = "TCExt"


//////////////
function addCSS(){
    $("<style>")
        .prop("type", "text/css")
        .html("\
.onoffswitch {\
position: relative; width: 51px;\
bottom:27px;\
left:145px;\
-webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\
}\
.onoffswitch-checkbox {\
display: none;\
}\
.onoffswitch-label {\
display: block; overflow: hidden; cursor: pointer;\
border: 2px solid #141414; border-radius: 13px;\
}\
.onoffswitch-inner {\
display: block; width: 200%; margin-left: -100%;\
transition: margin 0.3s ease-in 0s;\
}\
.onoffswitch-inner:before, .onoffswitch-inner:after {\
display: block; float: left; width: 50%; height: 17px; padding: 0; line-height: 17px;\
font-size: 11px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\
box-sizing: border-box;\
}\
.onoffswitch-inner:before {\
content: \"ON\";\
padding-left: 5px;\
background-color: #282828; color: #ABABAB;\
}\
.onoffswitch-inner:after {\
content: \"OFF\";\
padding-right: 5px;\
background-color: #5B5B5B; color: #101010;\
text-align: right;\
}\
.onoffswitch-switch {\
display: block; width: 15px; margin: 1px;\
background: #1E1E1E;\
position: absolute; top: 0; bottom: 0;\
right: 30px;\
border: 2px solid #606060; border-radius: 13px;\
transition: all 0.3s ease-in 0s; \
}\
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\
margin-left: 0;\
}\
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\
right: 0px; \
}\
.TExChTextField1{\
margin-left:10px;\
margin-top:7px;\
resize:none;\
height: 40px;\
width: 100px;\
}\
.TExChTextField2{\
margin-left:10px;\
margin-top:7px;\
resize:none;\
height: 150px;\
width: 250px;\
}\
.AddButton{\
margin-top:10px;\
margin-left:20px;\
-webkit-border-radius: 5;\
-moz-border-radius: 5;\
border-radius: 5px;\
font-family: Arial;\
color: #d3d3d3;\
font-size: 13px;\
background: #5b5b5b;\
padding: 10px 20px 10px 20px;\
border: solid #151515 1.5px;\
text-decoration: none;\
}\
.AddButton:hover {\
background: #161616;\
text-decoration: none;\
}\
.secondCol{\
float:right;\
margin-right:20px;\
}\
}")
        .appendTo("head");
    console.log("CSS WAS ADDED");
}

function loadLocalStorage(){
    localStorageData = JSON.parse(localStorage[localStorageKey])
    console.log("Data was loaded");
}

function saveLocalStorage(){
    localStorage[localStorageKey] = JSON.stringify(localStorageData);
    console.log("Data was saved");
}

function downloadLocalStorage(){

}

function addButton(){

    $(".chat-buttons-container").append("<button id=TExChButton class=btnC><b id=TExChButonText>C</b></button>");

    $(".btnC").css( {
        "background": "#1e1e1e",
        "-webkit-border-radius": "3",
        "-moz-border-radius": "3",
        "border-radius": "3px",
        "border":"solid #171717 1px",
        "font-family": "Arial",
        "color": "#AAAAAA",
        "font-size": "12px",
        "padding": "7px 13px 9px 14px",
        "text-decoration": "none",
        "cursor": "pointer"
    });
    console.log("BUTTON WAS ADDED");
}

function addDiv(){
    $(".chat-interface").append("<div id=TExChOptions class=TExChDiv><br><b id=TExChText1 style= \"margin-left : 10px\">Key</b><br>\
<textarea id=TExChTextField1 class=TExChTextField1 ></textarea><button id=TExChClearFields class=AddButton>Clear</button>\
<br><b id=TExChText2 style=\"margin-left : 10px\">Chatmessage</b><br>\
<textarea id=TExChTextField2 class=TExChTextField2 ></textarea>  \
<br><button id=TExChAddToStorage class=AddButton>Add Key</button> <button id=TExChGetStorage class=\"AddButton secondCol\">Get Storage</button> \
<br><button id=TExChLoadFromStorage class=AddButton>Load Message</button> <button id=TExChSetStorage class=\"AddButton secondCol\">Set Storage</button> \
<br> <button id=TExChDeleteFromStorage class=AddButton>Delete Entry</button> <button id=TExChLoadBackup class=\"AddButton secondCol\">L. Backup</button> \
<br> <button id=TExChShowCommands class=AddButton>Show Keys</button> <button id=TExChReloadStorage class=\"AddButton secondCol\">Reload S.</button></div>");

    $(".TExChDiv").css( {
        "z-index": "9999999",
        "width": "300px",
        "height": "500px",
        "border": "1px solid rgb(21, 20, 20)",
        "margin-bottom": "4.6px",
        "position": "absolute",
        "bottom": "50px",
        "background": "rgb(35, 35, 35)",
        "border-radius": "2px",
        "margin-left": "15px",
        "display":"none"
    });

    $("#TExChAddToStorage").click(function(){
        var newKey = $(".TExChTextField1").val();
        var newMessage = $(".TExChTextField2").val();
        var added = false;
        console.log(newKey);
        console.log(newMessage);

        for(var k = 0; k<localStorageData.array.length;k++){
            if(newKey == localStorageData.array[k][0]) {
                localStorageData.array[k][1] = newMessage
                added = true;
            }
        }
        $(".TExChTextField1").val("");
        $(".TExChTextField2").val("");
        if(!added) localStorageData.array.push([newKey,newMessage]);
        saveLocalStorage();
        $(".TExChTextField2").val("Key: "+ newKey +" was added");
    });

    $("#TExChLoadFromStorage").click(function(){
        var loadKey = $(".TExChTextField1").val();
        for(var m = 0; m<localStorageData.array.length;m++){
            if(loadKey == localStorageData.array[m][0]) $(".TExChTextField2").val(localStorageData.array[m][1]);
        }
    });

    $("#TExChDeleteFromStorage").click(function(){
        var deleteKey = $(".TExChTextField1").val();
        for(var k = 0; k<localStorageData.array.length;k++){
            if(deleteKey == localStorageData.array[k][0])  localStorageData.array.splice(k,1);
        }
        $(".TExChTextField1").val("");
        saveLocalStorage();
        $(".TExChTextField2").val("Deleted: "+ deleteKey);
    });

    $("#TExChShowCommands").click(function(){
        var outputString = "";
        for(var l = 0; l<localStorageData.array.length;l++){
            outputString += localStorageData.array[l][0] +"\n";
        }
        $(".TExChTextField2").val(outputString+"\nNumber of Commands: "+localStorageData.array.length);

    });
    $("#TExChClearFields").click(function(){
        $(".TExChTextField1").val("");
        $(".TExChTextField2").val("");
    });

    $("#TExChGetStorage").click(function(){
        $(".TExChTextField2").val(localStorage[localStorageKey]);
    });

    $("#TExChSetStorage").click(function(){
        localStorage["Backup"+localStorageKey] = localStorage[localStorageKey]
        localStorage[localStorageKey] = $(".TExChTextField2").val();
        $(".TExChTextField2").val("Storage was Set");
    });

    $("#TExChLoadBackup").click(function(){
        localStorage[localStorageKey] = localStorage["Backup"+localStorageKey];
        $(".TExChTextField2").val("Loaded Backup");
    });
    $("#TExChReloadStorage").click(function(){
        loadLocalStorage();
        $(".TExChTextField2").val("Storage was reloaded");
    });
    console.log("ADDED DIVS");
}


function attachEvent(){
    idOfTextarea = "#"+$(".ember-text-area").attr("id");
    $(idOfTextarea).keyup(function(e){

        // Debug commands
        //console.log(e.which);
        //console.log(KeyCount);
        //alert(e.which);
        //
        var lastWord ="";
        if(e.which == 32) { //ß is 219, Enter is 13, spacebar is 32
            //var text = $(idOfTextarea).val().slice(0,-1);
            var text = $(idOfTextarea).val();
            var textSplitted = text.split(" ");
            lastWord= textSplitted[textSplitted.length-2];

            if(lastWord.charAt(0) == "#" ){
                var texttmp = specialTag(lastWord,textSplitted);
                if(texttmp != -1) {
                    text = texttmp;
                    $(idOfTextarea).val(text);
                }
            } else {
                var ReplacingText = replaceTags(lastWord);
                if(ReplacingText != false){
                    $(idOfTextarea).val($(idOfTextarea).val().replace(lastWord,ReplacingText));
                }
            }

        }
    });
    console.log("EVENT WAS ATTACHED");
}

function detachEvent(){
    $(idOfTextarea).off("keyup");
    console.log("EVENT WAS DETACHED");
}

function addSwitch(){
    $(".chat-buttons-container").append("<div class=onoffswitch><input type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch>    <label class=onoffswitch-label for=myonoffswitch>   <span class=onoffswitch-inner></span> <span class=onoffswitch-switch></span> </label></div>");

    $("#myonoffswitch").change(function(){
        if($("#myonoffswitch").prop("checked")) attachEvent();
        else detachEvent();

    });

    console.log("SWITCH WAS ADDED");
}

function replaceTags(tag){

    //example array
    /*var tagArray = [["hypu","elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype elaHYPE nb3Hype"],
     ["hela","hey ela elaPablo / hey chat elaCreep"],
     ["shyp","elaHYPE elaOi elaPablo elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo elaHYPE elaOi elaPablo"],
     ["paim","nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato nb3Potato"],
     ["stamp","???????????????????????? elaPablo elaPablo elaPablo elaPablo elaPablo elaPablo elaPablo elaPablo elaPablo elaPablo elaLegs elaLegs elaLegs elaLegs elaLegs elaLegs elaLegs elaLegs elaLegs elaLegs ????????????????????????"]
     ];
     */
    //Debug commands
    //console.log("Ich tue was, Tag = "+ tag);
    //console.log(localStorageData.array.length);


    for(var i = 0;i<localStorageData.array.length;i++){
        //console.log("Tag: "+localStorageData.array[i][0]);
        if(tag==localStorageData.array[i][0]) return localStorageData.array[i][1];
    }
    return false;
}

function specialTag(tag,textArray){

    var output= "";
    var tagSplitted = tag.split(",");

    switch(tagSplitted[0]) {
        case "#fill1":
            output +=  tagSplitted[1];
            for(var m=0;m<textArray.length-2;m++){
                output += " "+textArray[m]+" "+ tagSplitted[1];
            }
            break;
        case "#fill2":
            output +=  textArray[0];
            for(var m=1;m<textArray.length-2;m++){
                output += " "+tagSplitted[1]+" "+textArray[m];
            }
            break;
            break;
        case "#me":
            var count = parseInt(tagSplitted[1]);
            for(var i2=0;i2<count;i2++){
                output += textArray[0] +" ";
            }
            break;
        case "#y":
            output =  tagSplitted[1] +" YEARS PogChamp";
            break;
        case "#d":
            output = "";
            break;
        default:
            return -1;
            break;
    }
    return output;
}



window.onload = function () {
    var IID = setInterval(function(){
        console.log("START");
        addCSS();
        addButton();
        addDiv();
        addSwitch();
        loadLocalStorage();
        $("#TExChButton").click(function(){
            $(".TExChTextField2").attr("maxlength","10000");
            $(".TExChDiv").toggle("fast");
        });

        $('html').click(function (e) {
            if (e.target.id.substr(0,5) == "TExCh" ) {
                //do something
            } else {
                //console.log(e.target.id);
                $(".TExChDiv").hide("fast");
            }
        });
        if($("#TExChButton").val() != undefined){ clearInterval(IID)}
    },5000)
}
