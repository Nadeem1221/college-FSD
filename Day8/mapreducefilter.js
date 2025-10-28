const arr=[1,2,3,4,5,6,7,8,9,10];
// const mapArr=arr.map((ele)=>{
//     return value*2;
// })
// console.log(mapArr);
// const sum=arr.reduce((acc,ele)=>{
//     return acc+ele;
// },0);
// console.log(sum);

//filter
// const filterArr=arr.filter((ele)=>ele%2===0);
// console.log(filterArr);
const data=[
    {productid:1,productname:"laptop",price:45000},
    {productid:2,productname:"mobile",price:25000},
    {productid:3,productname:"tv",price:55000} ]

    const mapData=data.map((ele)=>ele.productname);
    console.log(mapData);
    const filterData=data.filter((ele)=>ele.price<80000);
    console.log(filterData);
    const reduceData=data.reduce((acc,ele)=>acc+ele.price,0);
    console.log(reduceData);
    
    const filteronPrice=data.filter((ele)=>ele.price>30000).map((ele)=>ele.productname);
    console.log(filteronPrice);