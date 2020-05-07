const myTest10 = () => {
  let container = 1;
  for (let i = 1; i < 11; i++) {
    console.log(container);
    container++;
    container = container + i
  }
}

myTest10();
