const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.1.84"
});

printer.alignCenter();
printer.println("Hello world");
printer.printImage("./public/logo192.png");
printer.cut();

try {
  let execute = printer.execute();
  console.error("Print done!");
} catch (error) {
  console.log("Print failed:", error);
}
