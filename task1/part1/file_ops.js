const fs = require("fs");
const path = require("path");

// Define paths
const folderPath = path.join(__dirname, "storage");
const filePath = path.join(folderPath, "info.txt");
const fullName = "John Doe"; // Replace with your actual full name

// 3. Create 'storage' subfolder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log("Created storage folder");
}

// 4. Create 'info.txt' inside 'storage'
fs.writeFileSync(filePath, "", "utf8"); // Create empty file

// 5. Write full name to 'info.txt'
fs.writeFileSync(filePath, fullName, "utf8");
console.log("Wrote full name to info.txt");

// 6. Read and display content
let content = fs.readFileSync(filePath, "utf8");
console.log("Content of info.txt:", content);

// 7. Overwrite with initials
const initials = fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
fs.writeFileSync(filePath, initials, "utf8");
console.log("Overwrote with initials");

// 8. Read and display updated content
content = fs.readFileSync(filePath, "utf8");
console.log("Updated content of info.txt:", content);

// 9. Clear the file
fs.writeFileSync(filePath, "", "utf8");
console.log("Cleared info.txt");

// 10. Write full name again
fs.writeFileSync(filePath, fullName, "utf8");
console.log("Wrote full name again");
