

class Serie {

  serie = 0;
  primos = [];
  multiples = [];

  constructor (serie) {
    this.serie = serie;
  }

  getPrimos() {
    if(this.serie <= 0 )
      return 0

    for (let i = 2; this.primos.length < this.serie; i++) {

      let flag = 0;

      for (let div = 2; div <= i; div++) {
        if (i % div === 0 && i > div) {
          flag = 1;
        } else if (i % div === 0 && flag !== 1) {
          this.primos.push(i);
        }
      }
    }
    return this.primos;
  }

  getMultiplos() {
    if(this.serie <= 0 )
      return 0

    for (let i = 3; this.multiples.length < this.serie; i++) {

      let resto = i % 3;
      if(resto==0)
        this.multiples.push(i);
    }
    return this.multiples;
  }
}

export default Serie;