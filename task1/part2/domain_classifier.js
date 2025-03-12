const fs = require("fs");
const path = require("path");

// Define file paths
const domainsFile = path.join(__dirname, "domains.txt");
const files = {
  com: path.join(__dirname, "COM.txt"),
  org: path.join(__dirname, "ORG.txt"),
  edu: path.join(__dirname, "EDU.txt"),
};

// Initialize output files
Object.values(files).forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "", "utf8");
  }
});

// Read and process domains.txt
const domains = fs
  .readFileSync(domainsFile, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

domains.forEach((domain) => {
  const tld = domain.split(".").pop().toLowerCase();
  if (tld in files) {
    fs.appendFileSync(files[tld], domain + "\n", "utf8");
    console.log(`Appended ${domain} to ${tld.toUpperCase()}.txt`);
  } // Ignore other TLDs
});

console.log("Domain classification completed");
