
import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = result => {
  // initialize jsPDF
  const doc = new jsPDF();



   const tableColumn = [ "Network", "Location", "Batteryvolt", "Voltage", "Batterytype", "Reading_time", "Batteryampere" ];
  
   const tableRows = [];

    result.forEach(ticket => {
    const ticketData = [
    
      ticket.network,
      ticket.location,
      ticket.batteryvolt,
      ticket.voltage,

         ticket.batterytype,
         ticket.reading_time,
         ticket.batteryampere,
      
     
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  console.log(tableRows , "sds")



  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows);
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left



  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;