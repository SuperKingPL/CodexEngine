function KompilujGre() {
    const gra = document.getElementById("project");
    if (gra.getContext) {
        const ctx = gra.getContext("2d");

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
              ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`;
              ctx.beginPath();
              ctx.arc(180 + j * 25, 160 + i * 25, 10, 0, 2 * Math.PI, true);
              ctx.stroke();
            }
        }
    }
}
KompilujGre();