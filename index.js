import cowsay from "cowsay";
import "dotenv/config";
console.log(
  cowsay.say({
    text: process.env.NAME + process.env.CAMPUS,
    e: "oO",
    T: "U ",
  })
);
