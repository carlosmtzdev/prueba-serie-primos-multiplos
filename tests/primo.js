import primo from '../src/primo'

describe('Testing primo', () => {

  test('Find secuence prime numbers for 0', ()=>{

    let result = primo( 0 )

    expect(result).toEqual(0)

  })

  test('Find first prime number', ()=>{

    let result = primo(1)

    expect(result).toEqual([2])

  })

  test('Find 2 prime numbers', ()=>{

    let result = primo(2)

    expect(result).toEqual([2, 3])

  })


  test('Find 3 prime numbers', ()=>{

    let result = primo(3)

    expect(result).toEqual([2, 3, 5])

  })



  test('Find 4 prime numbers', ()=>{

    let result = primo(4)

    expect(result).toEqual([2, 3, 5, 7])

  })

  test('Find 5 prime numbers', ()=>{

    let result = primo(5)

    expect(result).toEqual([2, 3, 5, 7, 11])

  })


  test('Find 6 prime numbers', ()=>{

    let result = primo(6)

    expect(result).toEqual([2, 3, 5, 7, 11, 13])

  })


  test('Find 7 prime numbers', ()=>{

    let result = primo(7)

    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17])

  })

  test('Find 8 prime numbers', ()=>{

    let result = primo(8)

    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19])

  })

  test('Find 9 prime numbers', ()=>{

    let result = primo(9)

    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23])

  })


  test('Find 10 prime number', ()=>{

    let result = primo(2)

    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])

  })



})

