const SQUARE_SIZE = 100
const GRID_W = 4
const GRID_H = 4

let CENTER_W = 0
let CENTER_H = 0

let color_table = ["g","g","g","","g","","","","g","","","","","","",""]

function setup() {
    createCanvas(1270, 720);

    CENTER_W = width/2-(GRID_W/2)*SQUARE_SIZE
    CENTER_H = height/2-(GRID_H/2)*SQUARE_SIZE
}

function draw() {
    background(220);

    fill("black")
    textSize(30)
    text("Message: ", width/2-100, height/2-290)
    text("0101 0101 010", width/2-100, height/2-250) // 682 in decimal

    createGrid(CENTER_W, CENTER_H)
}

// A square is one piece of a grid, 
// it contains a binary digit and the background can change.
function createSquare(x, y, size, digit="", bg_color="white") {
    fill(color(bg_color))
    square(x, y, size)
    if(digit !== "") {
        fill("black")
        textSize(90)
        text(digit, x+25, y+size-20)
    }
}

// For now follows H(16,11)
function createGrid(px, py, grid_w=4, grid_h=4) {
    for (let y = 0; y < grid_h; y++) {
        for (let x = 0; x < grid_w; x++) {
            bg_color = "white"
            if(color_table[x*grid_w+y] == "g") {
                bg_color = color(103, 235, 52) //Light green color
            }

            createSquare(x*SQUARE_SIZE+px, y*SQUARE_SIZE+py, SQUARE_SIZE, 0, bg_color)
        }
    }
}