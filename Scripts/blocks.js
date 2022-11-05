$("block").draggable({containment: "#menu"});

function randomBlockPosition() {
    const blocks = document.getElementsByTagName("block");
    const space = document.getElementById("menu");

    for (var i = 0; i < blocks.length; i++) {
        let block = blocks[i];

        var positionX = rand(195, 383);
        var positionY = rand(8, 739);

        block.style.left = positionX.toString() + "px";
        block.style.top = positionY.toString() + "px";
        console.log(block);
    }
}

randomBlockPosition();