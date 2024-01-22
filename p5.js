let snake;  // Instance třídy Snake reprezentující hada
let rez = 20;  // Velikost jednoho čtverečku na herním poli
let food;  // Pozice potravy
let w;  // Počet čtverečků na ose x
let h;  // Počet čtverečků na ose y

function setup() {
  createCanvas(800, 800);  // Vytvoření kreslícího plátna s rozměry 800x800 pixelů
  w = floor(width / rez);  // Vypočítání počtu čtverečků na ose x
  h = floor(height / rez);  // Vypočítání počtu čtverečků na ose y
  frameRate(5);  // Nastavení počtu snímků za sekundu
  snake = new Snake();  // Inicializace hada
  foodLocation();  // Nastavení pozice potravy
}

function foodLocation() {
  let x = floor(random(w));  // Náhodná pozice x pro potravu
  let y = floor(random(h));  // Náhodná pozice y pro potravu
  food = createVector(x, y);  // Vytvoření vektoru reprezentujícího pozici potravy
}

function keyPressed() {
  // Funkce volaná při stisknutí klávesy
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);  // Nastavení směru hada doleva
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);  // Nastavení směru hada doprava
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);  // Nastavení směru hada dolů
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);  // Nastavení směru hada nahoru
  } else if (key == ' ') {
    snake.grow();  // Sežrání potravy a zvětšení hada (pokud je stisknuta mezerník)
  }
}

function draw() {
  scale(rez);  // Nastavení měřítka pro kreslení
  background(220);  // Nastavení pozadí na světle šedou barvu

  if (snake.eat(food)) {
    foodLocation();  // Pokud had sežral potravu, nastav novou pozici potravy
  }

  snake.update();  // Aktualizace pozice hada
  snake.show();  // Vykreslení hada

  if (snake.endGame()) {
    print("END GAME");  // Pokud došlo ke konci hry, vypíše zprávu o konci hry do konzole
    background(255, 0, 0);  // Nastaví pozadí na červenou barvu
    noLoop();  // Zastavení animace
  }

  noStroke();  // Bez obrysu
  fill(255, 0, 0);  // Barva potravy (červená)
  rect(food.x, food.y, 1, 1);  // Vykreslení potravy (velikost 1x1)
}
