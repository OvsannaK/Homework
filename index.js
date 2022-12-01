// .   Task one (1)


if (8 < 0) {                    
    console.log (true);
} else {
    console.log (false);
}

if (0 < 0) {
    console.log (true);
} else {
    console.log (false);
}

if (-50 < 0) {
    console.log (true);
} else {
    console.log (false);
}

if (10 < 0) {
    console.log (true);
} else {
    console.log (false);
}

// .    Task one (2)

console.log (8 < 0) ? true : false; 

console.log (0 < 0) ? true : false;

console.log (-50 < 0) ? true : false;

console.log (10 < 0) ? true : false;


// .   Task two(1) 

let a = 8,
    b = 12;
[a, b] = [b, a];
console.log (`${a} ${b}`)

let aa = 10,
    bb= 20;
[aa, bb] = [bb, aa];
console.log (`${aa} ${bb}`)


// .  Task two (2)

let a1 = 8, 
   b1 = 12;  
                        //Bitwise operator 
   a1 = a1 ^ b1;

   b1= a1 ^ b1;
    
   a1 = a1 ^ b1;

console.log (a1, b1);

let a2 = 10,
    b2 = 20;

a2 = a2 ^ b2;

b2 = a2 ^ b2;

a2 = a2 ^ b2;

console.log (a2,b2);


// . Task three (1)

let x = 3;
let y = 14;

if (x % y) {
    console.log (1);
}
else {
    console.log (0);
}


let xx = 18;
let yy = 2;

if (xx % yy) {
    console.log (1);
}
else {
    console.log (0);
}

// . Task three (2)

console.log (3 % 14) ? 0 : 1;  // khi chi linum
console.log (18 % 2) ? 0 : 1;


// .  Task four

let x1 = 123;

if (x1 % 2 == 0) {
    console.log (true);
}
else {
    console.log (false);
}


let x2 = 18;

if (x2 % 2 == 0) {
    console.log (true);
}
else {
    console.log (false);
}

// .  Task five (1)

if (2 + 3 > 5) {
    console.log (true);
}
else {
    console.log (false);
}


if (3 + 4 > 5) {
    console.log (true);
}
else {
    console.log (false);
}

if (10 + 5 > 12) {
    console.log (true);
}
else {
    console.log (false);
}


// . Task five (2)

let x3 = 2,
    y3 = 3,
    n3 = 5;

console.log (x3 + y3 > n3) ? true : false;

let x4 = 3,
    y4 = 4,
    n4 = 5;

console.log (x4 + y4 > n4) ? true : false;

let x5 = 10,
    y5 = 5,
    n5 = 12;

console.log (x5 + y5 > n5) ? true : false;

// . Task six 

let n = "3";

console.log (n + 2*n + 3*n);

let n1 = "17";

console.log (n1 + 2*n1 + 3 * n1);

let n2 = "100";

console.log = (n2 + 2*n2 + 3 * n2);


