// Define block class
class CodexBlock {
    // Delete block.
    remove() {
        this.element.remove();
    }
    // Get block friendly name.
    getFriendlyName() {
        if (block == "when_start") {
            return "Kiedy rozpoczęto";
        }
    }
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
        displayTooltip(value, this.element, "bottom", 3);
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
        }
    }
    constructor(block, element) {
        // Set variables.
        this.block = block;
        this.element = element;
        this.inputs = [];
        
        // Check block type
        if (this.block == "random_number") {
            this.type = "reporter";
        } else if (this.block == "display_text") {
            this.type = "command";
        } else if (this.block == "when_started") {
            this.type = "event";
        }
        // Handle activation: Right click
        element.oncontextmenu = () => {
            this.getInputs();
            this.activateBlock();
            return false;
        }
    }
}

var Blocks = [
    new CodexBlock("when_started", document.getElementById("a")),
    new CodexBlock("display_text", document.getElementById("b")),
    new CodexBlock("random_number", document.getElementById("c"))
];

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