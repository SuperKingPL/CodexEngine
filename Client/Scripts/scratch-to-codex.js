// Tekst JSON projektu (project.json)
const projekt = JSON.parse('{"targets":[{"isStage":true,"name":"Stage","variables":{"x:sSPt{9zwORj-~aF$OO":["Zmienna 1",0],"$$):L:{$i%Yb)RUul!-:":["Zmienna 2",0],"d_u3m#@hhE:J]ruq?1dW":["Zmienna 3",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"Boardwalk","bitmapResolution":2,"dataFormat":"png","assetId":"de0e54cd11551566f044e7e6bc588b2c","rotationCenterX":480,"rotationCenterY":360}],"sounds":[],"volume":100,"layerOrder":0,"tempo":60,"videoTransparency":50,"videoState":"on","textToSpeechLanguage":null},{"isStage":false,"name":"Pierwszy duszek","variables":{"(lllB}k=ix..a.^/4{W-":["Zmienna lokalna 1",0],"h;wH5,/E_k+tD{bd1XAM":["Zmienna lokalna 2",0]},"lists":{},"broadcasts":{},"blocks":{"d":{"opcode":"event_whenflagclicked","next":"b","parent":null,"inputs":{},"fields":{},"shadow":false,"topLevel":true,"x":60,"y":340},"b":{"opcode":"control_forever","next":null,"parent":"d","inputs":{"SUBSTACK":[2,"a"]},"fields":{},"shadow":false,"topLevel":false},"a":{"opcode":"control_if","next":null,"parent":"b","inputs":{"CONDITION":[2,"c"],"SUBSTACK":[2,"e"]},"fields":{},"shadow":false,"topLevel":false},"f":{"opcode":"operator_add","next":null,"parent":"c","inputs":{"NUM1":[1,[4,"5"]],"NUM2":[1,[4,"5"]]},"fields":{},"shadow":false,"topLevel":false},"c":{"opcode":"operator_equals","next":null,"parent":"a","inputs":{"OPERAND1":[3,"f",[10,""]],"OPERAND2":[1,[10,"10"]]},"fields":{},"shadow":false,"topLevel":false},"e":{"opcode":"looks_say","next":null,"parent":"a","inputs":{"MESSAGE":[1,[10,"Cześć!"]]},"fields":{},"shadow":false,"topLevel":false}},"comments":{},"currentCostume":0,"costumes":[{"name":"kostium1","bitmapResolution":1,"dataFormat":"svg","assetId":"592bae6f8bb9c8d88401b54ac431f7b6","md5ext":"592bae6f8bb9c8d88401b54ac431f7b6.svg","rotationCenterX":44,"rotationCenterY":44}],"sounds":[],"volume":100,"layerOrder":4,"visible":true,"x":-25.999998346964624,"y":-24.99999788072392,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"},{"isStage":false,"name":"Drugi duszek","variables":{"?byK;ZyzNfyF9tW-=0=s":["Zmienna lokalna 1",0],"deV@e=!{2M8;Tek#MI$6":["Zmienna lokalna 2",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"building-a","bitmapResolution":1,"dataFormat":"svg","assetId":"e8c9508b1f6a0a432e09c10ef9ada67c","md5ext":"e8c9508b1f6a0a432e09c10ef9ada67c.svg","rotationCenterX":40,"rotationCenterY":30}],"sounds":[{"name":"pop","assetId":"83a9787d4cb6f3b7632b4ddfebf74367","dataFormat":"wav","format":"","rate":48000,"sampleCount":1123,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":3,"visible":true,"x":146.99999065399228,"y":34.99999703301349,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"},{"isStage":false,"name":"Trzeci duszek","variables":{"v_X4}gD|-Ed;ZO9{,Tl[":["Zmienna lokalna 1",0],"#X0)QZ/%GcCbv-1Mo_X.":["Zmienna lokalna 2",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"button1","bitmapResolution":1,"dataFormat":"svg","assetId":"21fb7fa07eac4794fded0be4e18e20a2","md5ext":"21fb7fa07eac4794fded0be4e18e20a2.svg","rotationCenterX":72,"rotationCenterY":72}],"sounds":[{"name":"pop","assetId":"83a9787d4cb6f3b7632b4ddfebf74367","dataFormat":"wav","format":"","rate":48000,"sampleCount":1123,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":5,"visible":true,"x":-163.99998957316146,"y":-103.99999118381152,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"},{"isStage":false,"name":"Czwarty duszek","variables":{"MG8r~W,#kdy,iFf;IUH0":["Zmienna lokalna 1",0],"H#)i~Dq4YRn^*.`4$RyB":["Zmienna lokalna 2",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"convertible","bitmapResolution":2,"dataFormat":"png","assetId":"5b883f396844ff5cfecd7c95553fa4fb","md5ext":"5b883f396844ff5cfecd7c95553fa4fb.png","rotationCenterX":180,"rotationCenterY":44}],"sounds":[{"name":"pop","assetId":"83a9787d4cb6f3b7632b4ddfebf74367","dataFormat":"wav","format":"","rate":48000,"sampleCount":1123,"md5ext":"83a9787d4cb6f3b7632b4ddfebf74367.wav"}],"volume":100,"layerOrder":2,"visible":true,"x":150.99999039967915,"y":129.9999889797644,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"},{"isStage":false,"name":"Piąty duszek","variables":{"s7$Y1@fAPG^o,u)Myc+}":["Zmienna lokalna 1",0],"Z|?YKJbZ1ZxKjtg[iE5]":["Zmienna lokalna 2",0]},"lists":{},"broadcasts":{},"blocks":{},"comments":{},"currentCostume":0,"costumes":[{"name":"cake-a","bitmapResolution":1,"dataFormat":"svg","assetId":"862488bf66b67c5330cae9235b853b6e","md5ext":"862488bf66b67c5330cae9235b853b6e.svg","rotationCenterX":64,"rotationCenterY":50}],"sounds":[{"name":"Birthday","assetId":"89691587a169d935a58c48c3d4e78534","dataFormat":"wav","format":"","rate":48000,"sampleCount":351364,"md5ext":"89691587a169d935a58c48c3d4e78534.wav"}],"volume":100,"layerOrder":1,"visible":true,"x":-168.99998925527004,"y":99.99999152289567,"size":100,"direction":90,"draggable":false,"rotationStyle":"all around"}],"monitors":[{"id":"(lllB}k=ix..a.^/4{W-","mode":"default","opcode":"data_variable","params":{"VARIABLE":"Zmienna lokalna 1"},"spriteName":"Pierwszy duszek","value":0,"width":0,"height":0,"x":5,"y":5,"visible":false,"sliderMin":0,"sliderMax":100,"isDiscrete":true},{"id":"h;wH5,/E_k+tD{bd1XAM","mode":"default","opcode":"data_variable","params":{"VARIABLE":"Zmienna lokalna 2"},"spriteName":"Pierwszy duszek","value":0,"width":0,"height":0,"x":5,"y":5,"visible":false,"sliderMin":0,"sliderMax":100,"isDiscrete":true}],"extensions":[],"meta":{"semver":"3.0.0","vm":"0.2.0","agent":""}}');

// Klasa zmiennej Scratch.
class ScratchVariable {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// Pobiera wszystkie duszki z projektu
function getSprites(project) {
    var spritesList = [];
    for (var sprite in project["targets"]) {
        spritesList.push(project["targets"][sprite]["name"]);
    }
    return spritesList;
}

function getSpriteByName(project, name) {
    for (var sprite in project["targets"]) {
        if (project["targets"][sprite]["name"] === name) {
            return project["targets"][sprite];
        }
    }
}

// Pobiera duszek sceny.
function getScene(project) {
    for (var sprite in project["targets"]) {
        if (project["targets"][sprite]["isStage"] == true) {
            return project["targets"][sprite];
        }
    }
}

// Pobiera zmienne dla wszystkich duszków.
function getPublicVariables(scene) {
    var variables = [];

    for (var variable in scene["variables"]) {
        variables.push(new ScratchVariable(scene["variables"][variable][0], scene["variables"][variable][1]))
    }
    return variables;
}

// Pobiera zmienne dla duszka.
function getSpriteVariables(sprite) {
    var variables = [];

    for (var variable in sprite["variables"]) {
        variables.push(new ScratchVariable(sprite["variables"][variable][0], sprite["variables"][variable][1]))
    }
    return variables;
}
// Show variables from scratch project.
function showVariables() {
    var errorText = "";
    var variables = getPublicVariables(getScene(projekt));
    for (var i = 0; i < variables.length; i++) {
        errorText = errorText + "- " + variables[i].name + " | Wartość: " + variables[i].value + " <br>";
    }
    Debug.error("Zmienne w tym projekcie", errorText)
}
// Show sprites from Scratch project.
function showSprites() {
    var errorText = "";
    var variables = getSprites(projekt);
    for (var i = 0; i < variables.length; i++) {
        errorText = errorText + "- " + variables[i] + "<br>";
    }
    Debug.error("Duszki w tym projekcie", errorText)
}
// Open Scratch Project.
function openProject() {
    document.getElementById("fileopen").click();
}
// Open scratch project.
document.getElementById("fileopen").addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function() {
        try {
            projekt = JSON.parse(fr.result);
            console.log ("LOL");
        } catch {
            Debug.error("Nie udało się załadować projektu.", "Podany plik jest uszkodzony.")
        }
        
    }
    fr.readAsText(this.files[0]);
});