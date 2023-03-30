
const multiple = function ( n ) {

  let multiples  = [];

  if(n <= 0 )
    return 0

  for (let i = 3; multiples.length < n; i++) {

    let resto = i % 3;
    if(resto==0)
      multiples.push(i);
  }
  
  return multiples;

}

export default multiple