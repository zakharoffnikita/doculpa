function springAnimation(x0, v0, k, b) {
  let x = x0;
  let v = v0;
  let t = 0;

  function update() {
    let F_spring = -k * x;
    let F_damping = -b * v;
    v = v + (F_spring + F_damping) / m;
    x = x + v;
    t++;
    return x;
  }

  return function() {
    return update();
  };
}

let animation = springAnimation(1, 0, 0.1, 0.05);
setInterval(() => {
  let x = animation();
  console.log(x);
}, 16);
