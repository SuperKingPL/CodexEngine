// Define block class
class CodexBlock {
    // Delete block.
    remove() {
        this.element.remove();
    }
    // Run function
    runFunction(cmd) {
        if (this.type == "command") {
            this.enableBlock();
            cmd();
            this.disableBlock();
        }
    }
    disableBlock() {
        setTimeout(() => {
            this.element.style.filter = "unset";
        }, 100);
    }
    enableBlock() {
        this.element.style.filter = "blur(1px)";
    }
    reportValue(value) {
        this.enableBlock();
        Debug.tooltip(value, this.element, "bottom", 3);
        this.disableBlock();
    }
    getInputs() {
        this.inputs = [];
        var inputsList = [...this.element.querySelectorAll("input")];
        inputsList.forEach(input => {
            this.inputs.push(input.value);
        });
    }
    activateBlock() {
        if (this.block == "random_number") {
            this.reportValue(rand(this.inputs[0], this.inputs[1]));
        } else if (this.block == "display_text") {
            this.runFunction(() => {
                addTextToViewport(this.inputs[0], 50, "Sans-serif", 10, 50);
            });
        } else if (this.block == "sinus") {
            this.reportValue(Math.sin(this.inputs[0]));
        } else if (this.block == "divide") {
            this.reportValue(this.inputs[0] / this.inputs[1]);
        } else if (this.block == "multiply") {
            this.reportValue(this.inputs[0] * this.inputs[1]);
        } else if (this.block == "minus") {
            this.reportValue(this.inputs[0] - this.inputs[1]);
        } else if (this.block == "add") {
            this.reportValue(parseInt(this.inputs[0]) + parseInt(this.inputs[1]));
        } else if (this.block == "LogConsole") {
        this.runFunction(() => {
            log(this.inputs[0]);
        });
    }
    }
    constructor(element) {
        // Set variables.
        this.block = element.getAttribute("name");
        this.element = element;
        this.inputs = [];
        
        if (this.element.getAttribute("reporter") != null) {
            this.type = "reporter";
        } else if (this.element.getAttribute("command") != null) {
            this.type = "command";
        } else if (this.element.getAttribute("event") != null) {
            this.type = "event";
        }
        // Handle activation: Right click
        element.addEventListener("click", (e) => {
            if (e.shiftKey) {
                this.getInputs();
                this.activateBlock();
                return false;
            }
        });
        element.addEventListener("mouseover", (e) => {
            var br = document.createElement("br");
            var hightlight = document.createElement("block");
            hightlight.setAttribute("light", "");
            element.appendChild(hightlight);
            element.appendChild(br);
        });
    }
}

var Blocks = [
    new CodexBlock(document.getElementById("a")),
    new CodexBlock(document.getElementById("b")),
    new CodexBlock(document.getElementById("c")),
    new CodexBlock(document.getElementById("d")),
    new CodexBlock(document.getElementById("e")),
    new CodexBlock(document.getElementById("f")),
    new CodexBlock(document.getElementById("g")), 
    new CodexBlock(document.getElementById("h")),
    new CodexBlock(document.getElementById("i")),
];

// var a = document.getElementById("a");
// var blockArray = [
//     [
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//     ],
//     [
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//         new CodexBlock("when_start", a),
//     ]
// ]
// Draggable content
$("block").draggable({containment: "#menu"});

// Teleport blocks to positions (debug)
function randomBlockPosition() {
    const blocks = document.getElementsByTagName("block");

    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];

        var positionX = rand(195, 383);
        var positionY = rand(8, 739);

        block.style.left = positionX.toString() + "px";
        block.style.top = positionY.toString() + "px";
    }
}
randomBlockPosition();