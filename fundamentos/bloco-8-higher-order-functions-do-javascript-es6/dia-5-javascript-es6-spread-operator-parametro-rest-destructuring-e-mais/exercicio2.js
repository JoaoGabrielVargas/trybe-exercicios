const sum = (...args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  }

console.log(sum(1, 1, 1));
