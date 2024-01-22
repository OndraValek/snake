class Snake {
  
  // Konstruktor třídy Snake, který inicializuje hada
  constructor() {
      this.body = [];  // Pole, které reprezentuje tělo hada
      this.body[0] = createVector(floor(w/2), floor(h/2));  // Počáteční pozice hlavy hada
      this.xdir = 0;  // Směr pohybu na ose x
      this.ydir = 0;  // Směr pohybu na ose y
      this.len = 0;   // Aktuální délka hada
  }
  
  // Metoda pro nastavení směru pohybu hada
  setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
  }
  
  // Metoda pro aktualizaci pozice hada
  update() {
      let head = this.body[this.body.length-1].copy();  // Kopie posledního segmentu hada (hlava)
      this.body.shift();  // Odstranění prvního segmentu hada
      head.x += this.xdir;  // Aktualizace x-ové pozice hlavy
      head.y += this.ydir;  // Aktualizace y-ové pozice hlavy
      this.body.push(head);  // Přidání nové hlavy na konec hada
  }
  
  // Metoda pro zvětšení délky hada
  grow() {
      let head = this.body[this.body.length-1].copy();  // Kopie posledního segmentu hada (hlava)
      this.len++;  // Zvětšení délky hada
      this.body.push(head);  // Přidání nové hlavy na konec hada
  }
  
  // Metoda pro kontrolu konce hry
  endGame() {
      let x = this.body[this.body.length-1].x;  // x-ová pozice posledního segmentu hada
      let y = this.body[this.body.length-1].y;  // y-ová pozice posledního segmentu hada
      
      // Kontrola, zda se had dostal mimo hrací pole
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
          return true;
      }
      
      // Kontrola kolize hada se sebou samým
      for(let i = 0; i < this.body.length-1; i++) {
          let part = this.body[i];
          if(part.x == x && part.y == y) {
              return true;
          }
      }
      
      return false;  // Hra neskončila
  }
  
  // Metoda pro kontrolu, zda had sežral potravu
  eat(pos) {
      let x = this.body[this.body.length-1].x;  // x-ová pozice posledního segmentu hada (hlava)
      let y = this.body[this.body.length-1].y;  // y-ová pozice posledního segmentu hada (hlava)
      
      // Kontrola, zda je hlava hada na stejné pozici jako potrava
      if(x == pos.x && y == pos.y) {
          this.grow();  // Zvětšení délky hada
          return true;
      }
      
      return false;  // Had nesežral potravu
  }
  
  // Metoda pro vykreslení hada na herním poli
  show() {
      for(let i = 0; i < this.body.length; i++) {
          fill(0);  // Nastavení barvy (černá)
          noStroke();  // Bez obrysu
          rect(this.body[i].x, this.body[i].y, 1, 1);  // Vykreslení jednoho segmentu hada (velikost 1x1)
      }
  }

}
