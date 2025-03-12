const fs = require("fs");
const path = require("path");

// Define file paths
const jsonFile = path.join(__dirname, "data.json");
const classFiles = {
  A: path.join(__dirname, "IP_Class_A.txt"),
  B: path.join(__dirname, "IP_Class_B.txt"),
  C: path.join(__dirname, "IP_Class_C.txt"),
  D: path.join(__dirname, "IP_Class_D.txt"),
  E: path.join(__dirname, "IP_Class_E.txt"),
};

// Initialize output files
Object.values(classFiles).forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "", "utf8");
  }
});

// Read and parse JSON data
const data = JSON.parse(fs.readFileSync(jsonFile, "utf8"));

// Process each entry
data.forEach((entry) => {
  const ip = entry.ip_address;
  const firstOctet = parseInt(ip.split(".")[0], 10);
  let ipClass;

  if (firstOctet >= 1 && firstOctet <= 126) ipClass = "A";
  else if (firstOctet >= 128 && firstOctet <= 191) ipClass = "B";
  else if (firstOctet >= 192 && firstOctet <= 223) ipClass = "C";
  else if (firstOctet >= 224 && firstOctet <= 239) ipClass = "D";
  else if (firstOctet >= 240 && firstOctet <= 255) ipClass = "E";
  else return; // Skip invalid IPs (e.g., 0.x.x.x or malformed)

  fs.appendFileSync(classFiles[ipClass], JSON.stringify(entry) + "\n", "utf8");
});

console.log("IP classification completed");
