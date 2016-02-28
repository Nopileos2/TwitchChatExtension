
var idOfTextarea;
var localStorageData = {};
var localStorageKey = "TCExt";


//////////////
function loadLocalStorage(){
    try {
        localStorageData = JSON.parse(localStorage[localStorageKey]);
    } catch(e){

        localStorageData = {
            array:[["test","Test Kappa 123"]]
        };
        localStorage[localStorageKey] = JSON.stringify(localStorageData);
    }
    console.log("Data was loaded");
}

function saveLocalStorage(){
    localStorage[localStorageKey] = JSON.stringify(localStorageData);
    console.log("Data was saved");
}

function downloadLocalStorage(){
    var blob = new Blob([localStorage[localStorageKey]],{type: "text/plain;charset=utf-8"});
    saveAs(blob, "localStorageSave.json");
}

function addButton(){

    $(".chat-buttons-container").append("<button id=TExChButton class=\"btnC button\"><b id=TExChButtonText>C</b></button>");
    console.log("BUTTON WAS ADDED");
}

function addDiv(){
    $(".chat-interface").append("\
   <div id=Options-Wrapper class=\"TExChDiv hidden \">\
    <div id=TExChTabs class=tabs>\
     <ul id=TExChTabsUL class=tab-links>\
            <li id=TExChTabsIL><a id=TExChTabsA href=#TExChFirst>Start</a></li>\
            <li id=TExChTabsIL><a id=TExChTabsA href=#TExChSecond>Mitte</a></li>\
            <li id=TExChTabsIL><a id=TExChTabsA href=#TExChLast>Ende</a></li>\
     </ul>\
       <div id=TExChTabs class=tab-content>\
        <div id=TExChFirst class=\"tab\">\
            <br><br><b id=TExChText1 style= \"margin-left : 10px\">Key</b><br>\
            <textarea id=TExChTextField1 class=TExChTextField1 ></textarea><button id=TExChClearFields class=AddButton>Clear</button>\
            <br><b id=TExChText2 style=\"margin-left : 10px\">Chatmessage</b><br>\
            <textarea id=TExChTextField2 class=TExChTextField2 ></textarea>  \
            <br><button id=TExChAddToStorage class=AddButton>Add Key</button> <button id=TExChGetStorage class=\"AddButton secondCol\">Get Storage</button> \
            <br><button id=TExChLoadFromStorage class=AddButton>Load Message</button> <button id=TExChSetStorage class=\"AddButton secondCol\">Set Storage</button> \
            <br> <button id=TExChDeleteFromStorage class=AddButton>Delete Entry</button> <button id=TExChLoadBackup class=\"AddButton secondCol\">L. Backup</button> \
            <br> <button id=TExChShowCommands class=AddButton>Show Keys</button> <button id=TExChReloadStorage class=\"AddButton secondCol\">Reload S.</button>\
        </div>\
        <div id=TExChSecond class=\"tab active\">\
            Mitte\
        </div>\
        <div id=TExChLast class=tab>\
            Ende\
        </div>\
        </div>\
        </div>\
      </div>");
    var Textbox1 = ".TExChTextField1";
    var Textbox2 = ".TExChTextField2";

    $("#TExChAddToStorage").click(function(){
        var newKey = $(Textbox1).val();
        var newMessage = $(Textbox2).val();
        var added = false;
        console.log(newKey);
        console.log(newMessage);

        for(var k = 0; k<localStorageData.array.length;k++){
            if(newKey == localStorageData.array[k][0]) {
                localStorageData.array[k][1] = newMessage;
                added = true;
            }
        }
        $(Textbox1).val("");
        $(Textbox1).val("");
        if(!added) localStorageData.array.push([newKey,newMessage]);
        saveLocalStorage();
        $(Textbox2).val("Key: "+ newKey +" was added");
    });

    $("#TExChLoadFromStorage").click(function(){
        var loadKey = $(Textbox1).val();
        for(var m = 0; m<localStorageData.array.length;m++){
            if(loadKey == localStorageData.array[m][0]) $(Textbox2).val(localStorageData.array[m][1]);
        }
    });

    $("#TExChDeleteFromStorage").click(function(){
        var deleteKey = $(Textbox1).val();
        for(var k = 0; k<localStorageData.array.length;k++){
            if(deleteKey == localStorageData.array[k][0])  localStorageData.array.splice(k,1);
        }
        $(Textbox1).val("");
        saveLocalStorage();
        $(Textbox2).val("Deleted: "+ deleteKey);
    });

    $("#TExChShowCommands").click(function(){
        var outputString = "";
        for(var l = 0; l<localStorageData.array.length;l++){
            outputString += localStorageData.array[l][0] +"\n";
        }
        $(Textbox2).val(outputString+"\nNumber of Commands: "+localStorageData.array.length);

    });
    $("#TExChClearFields").click(function(){
        $(Textbox1).val("");
        $(Textbox2).val("");
    });

    $("#TExChGetStorage").click(function(){
        try {
            $(Textbox2).val(localStorage[localStorageKey]);
        } catch(e) {
            $(Textbox2).val("Storage could no be loaded:\nError:\n"+ e);
        }
    });

    $("#TExChSetStorage").click(function(){
        localStorage["Backup"+localStorageKey] = localStorage[localStorageKey];
        localStorage[localStorageKey] = $(Textbox2).val();
        $(Textbox2).val("Storage was Set");
    });

    $("#TExChLoadBackup").click(function(){
        localStorage[localStorageKey] = localStorage["Backup"+localStorageKey];
        $(Textbox2).val("Loaded Backup");
    });
    $("#TExChReloadStorage").click(function(){
        loadLocalStorage();
        $(Textbox2).val("Storage was reloaded");
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
        if(e.which == 32) {         // Enter is 13, spacebar is 32
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
    $(".chat-buttons-container").append("<div id=myonoffswitchdiv class=onoffswitch><input type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch>    <label id=myonoffswitch-label class=onoffswitch-label for=myonoffswitch>   <span id=myonoffswitch-inner class=onoffswitch-inner></span> <span id = myonoffswitch-switch class=onoffswitch-switch></span> </label></div>");

    $("#myonoffswitch").change(function(){
        if($("#myonoffswitch").prop("checked")) attachEvent();
        else detachEvent();

    });

    console.log("SWITCH WAS ADDED");
}

function addTabsFunction(){
    $('.tabs .tab-links a').on('click', function(e)  {

        var currentAttrValue = jQuery(this).attr('href');
        console.log(currentAttrValue);
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).addClass('active').siblings().removeClass('active');
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    console.log("Tabs functionality was added")
}

function replaceTags(tag){


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
        addButton();
        addDiv();
        addSwitch();
        loadLocalStorage();
        changeTheme();
        addTabsFunction();

        $("#TExChButton").click(function(){
            $("#TExChTextField2").attr("maxlength","10000");
            $("#Options-Wrapper").toggleClass("hidden");
        });

       /* $('html').click(function (e) {
            if (e.target.id.substr(0,5) == "TExCh" ) {
                //do something
            } else {
                //console.log(e.target.id);
                $("#TExChOptions").hide("fast");
            }
        });*/

        $(document).mouseup(function (e) {
            var container = $("#Options-Wrapper");
            console.log(container.hasClass("hidden"));
            console.log(e.target.id);
            if (!container.hasClass("hidden") && e.target.id != "TExChButton" && e.target.id != "TExChButtonText") {
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.addClass("hidden");
            }
        }
        });
        clearInterval(IID);
        if($("#TExChButton").val() != 3){ clearInterval(IID)}
    },2000)
};






function manReload(){
    addButton();
    console.log("ADDED");
    addDiv();
    addSwitch();
    addTabsFunction();
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
}

function toggleClass(){
    $("#TExChAddToStorage").toggleClass("AddButton AddButton2");
    $("#TExChGetStorage").toggleClass("AddButton AddButton2");
    $("#TExChLoadFromStorage").toggleClass("AddButton AddButton2");
    $("#TExChSetStorage").toggleClass("AddButton AddButton2");
    $("#TExChDeleteFromStorage").toggleClass("AddButton AddButton2");
    $("#TExChLoadBackup").toggleClass("AddButton AddButton2");
    $("#TExChShowCommands").toggleClass("AddButton AddButton2");
    $("#TExChReloadStorage").toggleClass("AddButton AddButton2");
    $("#TExChClearFields").toggleClass("AddButton AddButton2");
    $("#Options-Wrapper").toggleClass("TExChDiv TExChDiv2");
    $("#TExChButton").toggleClass("btnC btnC2");
    $("#myonoffswitch-label").toggleClass("onoffswitch-label onoffswitch-label2");
    $("#myonoffswitch-inner").toggleClass("onoffswitch-inner onoffswitch-inner2");
    $("#myonoffswitch-switch").toggleClass("onoffswitch-switch onoffswitch-switch2");
    $("#myonoffswitch").toggleClass("onoffswitch-checkbox onoffswitch-checkbox2");
    $("#myonoffswitchdiv").toggleClass("onoffswitch onoffswitch2");
}

function changeTheme(){
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(request);
            if(request){
                if($("#myonoffswitchdiv").hasClass("onoffswitch2") ) toggleClass();
            } else {
                if($("#myonoffswitchdiv").hasClass("onoffswitch") ) toggleClass();
            }
        });
}


