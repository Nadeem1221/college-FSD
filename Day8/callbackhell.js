const printMessage=(msg)=>{console.log(msg)}
const bookTicket=()=>{
    printMessage("Booking Ticket...")
    setTimeout(()=>{
        printMessage("login successful");
        setTimeout(()=>{
            printMessage("Payment Successful");
             setTimeout(()=>{
                printMessage("Ticket seat Successfully");
                  setTimeout(()=>{
                    printMessage("Ticket booked Successfully");
                    printMessage("thank you visit again");
             },3000)
        },3000)
    },3000)
},300)
}