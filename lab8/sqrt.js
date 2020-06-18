function sqrt(num)
{
  try {
    if (num <= 0) {
      throw "XequalZero";
    }
    else{
      console.log(`sqrt ${num} equal ${Math.sqrt(num).toFixed(2)}`);
    }
  }
  catch (x){
    if (x=="XequalZero"){
      console.log("f(x)<=0");
    }
    else{console.error(x);}
  }
}
console.log("correct f(x)");
sqrt(25);
console.log("error");
sqrt(-5);