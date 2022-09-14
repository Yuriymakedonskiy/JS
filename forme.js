let posle = n=>(n>=1 && n<=19683) ? 3*posle(n-1):1;
let i = 0;
while(i<10){
  document.write(posle(i)+' ')
  i++
}


// let kvad = n=> (n>0)? n*n:1;
// document.write(kvad(5));


// let fib = n => (n>2) ? fib(n-1)+fib(n-2):1;
// document.write(fib(7));

// let factorial1 = n => (n>0)? n*factorial1(n-1):1;
// document.write(factorial1(5));


// let func = function(number){
//   if (number<=0){
//     return 1;
//   }
//   else{
//     return (number*func(number-1))
//   }
// }
// document.write(func(parseInt(prompt(''))))




// let func = function(value){
//   if (value<=0){
//     return 1;
//   }
//   else{
//     return (value * func(value-1));
//   }
// };
// document.write(func(parseInt(prompt(''))))


// // let m =5;
// // x = factorial(m);
// // document.write(x);

// // function factorial(n){
// //   if(n<=1) return 1;
// //   result = 2;
// //   for(i = 3; i<=n; i++){
// //     result*=i
// //   }
// //   return result;
// // }

// // function f(counter) {
// //   counter--;
// //   document.write(counter + "<br/>");
// //   if (counter != 0){
// //     f(counter);
// //   }
// //   document.write(counter + "<br/>");
// // }
// // f(2);



// // let chislo,stepen;
// // function degree(chislo,stepen) { 
// // 	for(let result = 1; stepen > 0; stepen--) {
// //  		result *= chislo; 
// // 	} 
// // return  result;
// // }
// // alert(degree(2,5));


// // let chislo = parseInt(prompt('chislo')), stepen = parseInt(prompt('stepen'));

// // function degree(chislo,stepen){
// //   if (stepen){
// //     return chislo*degree(chislo,stepen-1);

// //   }
// //     return 1;
    
// // }
// // document.write(chislo,' в степени ', stepen, ' = ', degree(chislo,stepen));

// // let variable = "Глобальная переменная";
// // function f() {
// //   let variable = "Локальная переменная";
// //   document.write(variable + "<br/>");
// // }
// // f();
// // document.write(variable);


// // let solo = function(a){
// //     return a
// // }
// // let vizov = solo(parseInt(prompt))
// // document.write(vizov);


// // let a = parseInt(prompt("Сколько ворон на ветке?"));
// // function f(a){
// //     while(a){
// //         if (a==1){
// //             document.write(`На ветке сидит ${a} ворона`);
// //             break;
// //         }
// //         else if (a>1 && a<=4){
// //             document.write(`На ветке сидит ${a} вороны`);   
// //             break;   
// //         }
// //         else if (a>4 && a<=10){
// //             document.write(`На ветке сидит ${a} ворон`);
// //             break;
// //         }
// //         else{
// //             document.write("Слишком много ворон");
// //             break;
// //         }
// //     }
// // }
// // f(a);

// // // function sum(arg1,arg2)
// // // {
// // // 	let a=arg1+arg2;
// // // 	return a;
// // // }
// // // let b=sum(1,2);
// // // alert(b);
 
// // // function add()
// // // {
// // 	let c=1+sum(1,2);
// // 	return c;
// // }
// // let d=add();
// // alert(d);


// // let a = 5, b = 10, c = 20, d = 7;
// // function Sum1() {
// //  let result = a + b;
// //  document.write("Sum1: " + result + "<br/>");
// // }
// // function Sum2(x1, x2) {
// //  let result = x1 + x2;
// //  document.write("Sum2: " + result);
// // }
// // Sum1();
// // Sum2(c, d);



// // function raznost(){
// //     let a = parseInt(prompt(""))
// //     let b = parseInt(prompt(""))
// //     return a-b
// // }
// // let aa = raznost();
// // alert(aa);



// // function say() {
// //     document.write("Вы здесь?" + "<br/>");
// //  }
// //  do {
// //     say();
// //     povtor = confirm("Пройти заполнение ещё раз?")
// //  } while (povtor)

// // функция вычисляет математическое выражение
// // let x = eval(prompt(""));
// // document.write(x);


// // let arr=['Nikita','Bob'];
// // //добавляет в конец массива элемент
// // // arr.push('pp');
// // //удаляет первый элемент
// // // arr.shift();
// // // //добавляет первый элемент
// // // arr.unshift('ss');
// // console.log(arr)