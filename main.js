'use strict';
//exercise 1
//let n=30;
//for(let i=1;i<=n;i++){
   // if(i%3==0 && i%5==0){
   //     console.log(i+' '+"FizzBuzz");
  //  }
   // else if(i%3==0){
   //     console.log(i+' '+"Fizz");
   // }
   // else if(i%5==0){
   //     console.log(i+' '+"Buzz");
   // }
   // else {
   //     console.log(i);
  //  }
//}
//exercise 2
//let a=[3,4,7,9,11,45,0];
//let n=a.length;
//for(let i=0;i<n;i++){
  //  for(let j=0;j<n-i-1;j++){
     //   if(a[j]>a[j+1]){
          //  let m=a[j];
          //  a[j]=a[j+1];
         //   a[j+1]=m;
      //  }
   // }
//}
//console.log(a);
// //exercise 3
// function shellSort(arr){
//     let n=arr.length;
//     for(let gap=Math.floor(n/2);gap>0;gap=Math.floor(gap/2)){
//         for(let i=gap;i<n;i++){
//             let temp=arr[i];
//             let j;
//             for(j=i;j>=gap && arr[j-gap]>temp;j-=gap){
//                 arr[j]=arr[j-gap];
//             }
//             arr[j]=temp;
//         }
//     }
//     return arr;
// }
// let myarray=[5,6,2,8,9,0];
// let sortedarray=shellSort(myarray);
// console.log(sortedarray);