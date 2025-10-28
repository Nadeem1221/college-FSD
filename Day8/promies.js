// Key Concepts of Promises:
// States: A Promise can be in one of three states:
// Pending: The initial state; the asynchronous operation has not yet completed.
// Fulfilled (or Resolved): The operation completed successfully, and the Promise has a resulting value.
// Rejected: The operation failed, and the Promise has an error reason.



// // let myPromise = new Promise((resolve, reject) => {
// //         // Simulate an asynchronous operation (e.g., fetching data)
// //         setTimeout(() => {
// //             let success = true; // Simulate success or failure
// //             if (success) {
// //                 resolve("Data fetched successfully!");
// //             } else {
// //                 reject("Error fetching data.");
// //             }
// //         }, 2000);
// //     });



const printMessage=(msg)=>{document.writeln(msg);}
const Wait=(msg,sec)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            printMessage(msg);
            resolve();
        },sec)  
    })
}
      




const bookTicket=()=>{
    printMessage("Welcome")
    Wait("loin successful",300)
       .then(()=> Wait("no seat",3000))
       .then(()=> Wait("seat select Successful",3000))    
     .then(()=> Wait("Payment Successful",3000))
     .then(()=> Wait("Ticket seat Successfully",3000))
      .then(()=> Wait("Ticket booked Successfully",3000))
     .then(()=> printMessage("thank you visit again"))
      
    // Wait("loin successful",3000);
    // Wait("Payment Successful",3000);
    // Wait("Ticket seat Successfully",3000);
    // Wait("Ticket booked Successfully",3000);
    // printMessage("thank you visit again");
}