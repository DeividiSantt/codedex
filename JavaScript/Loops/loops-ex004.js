for (let i = 1; i < 50; i++) {
  if (i % 2 === 1) {
    continue;
  }else if(i === 42){
    break;
  }
  console.log(i);
}