



// Assignment-01 Answer ============================
 
  const  multiplicationTable = (num) => {

    for (let j = 1; j <= 10; j++) {

    let multiplicatons = `${num} * ${j} = ${num * j}`;

    console.log(multiplicatons);
  }
}

  for (let i = 1; i <= 10; i++) {

    console.log(`======= Mutliplication for ${i}=======`);
    
    multiplicationTable(i);
  }






