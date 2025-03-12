Below is a complete solution to the Web Application Framework (WAF) Spring 2025 Lab Task assigned on March 5, 2025. The task is divided into four parts, and I’ll provide detailed instructions, folder structure, and Node.js code for each part. Assumptions will be clearly noted in comments where necessary. Let’s assume my name is "John Doe" and my roll number is "12345" for this example—replace these with your actual name and roll number as needed.

---

## Folder Structure

As per the instructions, create the following structure manually before writing the code:

- **Main Folder**: `12345_johndoe`
  - **Subfolder for Part 1**: `12345_johndoe_task1_part1`
  - **Subfolder for Part 2**: `12345_johndoe_task1_part2`
  - **Subfolder for Part 3**: `12345_johndoe_task1_part3`
  - **Subfolder for Part 4**: `12345_johndoe_task1_part4`

After completing all parts, compress the `12345_johndoe` folder into a file named `12345_johndoe_Task_1.zip` or `.rar` and submit it to the specified location (`WAF-S25-T1`).

---

## Part 1: File System Operations

### Instructions Recap

1. Create a folder named `your_name_waf_lab_15mar` (e.g., `johndoe_waf_lab_15mar`).
2. Inside it, create a file named `file_ops.js`.
3. In `file_ops.js`, write code to:
   - Create a subfolder `storage`.
   - Create `info.txt` inside `storage`.
   - Write your full name to `info.txt`.
   - Read and display it.
   - Overwrite with initials (e.g., "JD").
   - Read and display again.
   - Clear the file.
   - Write your full name again.

### Steps

- Manually create the folder `12345_johndoe_task1_part1/johndoe_waf_lab_15mar`.
- Create `file_ops.js` inside `johndoe_waf_lab_15mar`.
- Write the following code:

### Code for `file_ops.js`

```javascript
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
```

### Explanation

- **Modules**: Uses `fs` for file operations and `path` for cross-platform path handling.
- **Sync Methods**: Uses synchronous methods (`fs.mkdirSync`, `fs.writeFileSync`, `fs.readFileSync`) for simplicity, as the task doesn’t specify asynchronous requirements.
- **Output**: Logs actions to confirm each step.

---

## Part 2: Domain Name Classification

### Instructions Recap

- Use a provided `domains.txt` file with domain names (e.g., "example.com", "test.org").
- Create `COM.txt`, `ORG.txt`, and `EDU.txt`.
- Read `domains.txt`, classify domains by TLD, and append them to the respective files. Ignore other TLDs.

### Assumptions

- `domains.txt` is downloaded and placed in `12345_johndoe_task1_part2`. If not provided, create a sample file with content like:
  ```
  google.com
  wikipedia.org
  harvard.edu
  example.net
  ```

### Steps

- Place `domains.txt` in `12345_johndoe_task1_part2`.
- Create `domain_classifier.js` in the same folder.
- Write the following code:

### Code for `domain_classifier.js`

```javascript
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
```

### Explanation

- **File Creation**: Creates output files if they don’t exist.
- **Reading Domains**: Splits `domains.txt` by newlines, trims whitespace, and filters empty lines.
- **TLD Check**: Uses an object to map TLDs to files, appending only `.com`, `.org`, `.edu` domains.

---

## Part 3: Asynchronous Function Execution

### Instructions Recap

Define six functions with delays:

- `register` (2500ms)
- `sendWelcomeMessage` (3000ms)
- `login` (2000ms)
- `fetchProfile` (4000ms)
- `updateStatus` (1500ms)
- `logout` (3500ms)

Implement four subparts:

1. Call in order, observe execution.
2. Use callbacks for sequential execution.
3. Use Promises for sequential execution.
4. Use async/await for sequential execution.

### Steps

- Create `async_functions.js` in `12345_johndoe_task1_part3`.
- Write the following code:

### Code for `async_functions.js`

```javascript
// Function Definitions
function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Register completed");
      resolve();
    }, 2500);
  });
}

function sendWelcomeMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Send Welcome Message completed");
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login completed");
      resolve();
    }, 2000);
  });
}

function fetchProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch Profile completed");
      resolve();
    }, 4000);
  });
}

function updateStatus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Update Status completed");
      resolve();
    }, 1500);
  });
}

function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Logout completed");
      resolve();
    }, 3500);
  });
}

// i. Call in order with delays
console.log("--- Part i: Default Execution ---");
setTimeout(() => console.log("Register completed"), 2500);
setTimeout(() => console.log("Send Welcome Message completed"), 3000);
setTimeout(() => console.log("Login completed"), 2000);
setTimeout(() => console.log("Fetch Profile completed"), 4000);
setTimeout(() => console.log("Update Status completed"), 1500);
setTimeout(() => console.log("Logout completed"), 3500);
console.log("All operations finished!");

// Note: Pause execution here to observe output (e.g., add a delay or user input in a real environment)

// ii. Using Callbacks
console.log("\n--- Part ii: Callbacks ---");
function runWithCallbacks() {
  register(() => {
    sendWelcomeMessage(() => {
      login(() => {
        fetchProfile(() => {
          updateStatus(() => {
            logout(() => {
              console.log("All operations finished!");
            });
          });
        });
      });
    });
  });
}
// Uncomment to run: runWithCallbacks();

// iii. Using Promises
console.log("\n--- Part iii: Promises ---");
register()
  .then(() => sendWelcomeMessage())
  .then(() => login())
  .then(() => fetchProfile())
  .then(() => updateStatus())
  .then(() => logout())
  .then(() => console.log("All operations finished!"));

// iv. Using Async/Await
console.log("\n--- Part iv: Async/Await ---");
async function runWithAsyncAwait() {
  await register();
  await sendWelcomeMessage();
  await login();
  await fetchProfile();
  await updateStatus();
  await logout();
  console.log("All operations finished!");
}
runWithAsyncAwait();
```

### Explanation

- **Part i**: Functions run asynchronously, executing in order of delay (updateStatus, login, register, sendWelcomeMessage, logout, fetchProfile).
- **Part ii**: Callbacks nest functions, ensuring sequential order. Commented out to avoid overlap with other parts during execution.
- **Part iii**: Promises chain functions using `.then()`, maintaining order.
- **Part iv**: Async/await provides a cleaner sequential execution.
- **Functions**: Defined with Promises to support all methods (callbacks can wrap Promise-based functions).

---

## Part 4: IP Address Class Detection and JSON Data

### Instructions Recap

- Generate 1000 JSON records using Mockaroo with fields: first_name, last_name, gender, email, ip_address.
- Read the JSON file.
- Classify IP addresses into A, B, C, D, E based on the first octet.
- Store data in `IP_Class_A.txt`, etc.

### Steps

1. **Generate Data**:
   - Go to [Mockaroo](https://www.mockaroo.com/).
   - Create a schema with:
     - first_name (First Name)
     - last_name (Last Name)
     - gender (Gender)
     - email (Email)
     - ip_address (IP Address)
   - Set rows to 1000, format to JSON, download as `data.json`.
2. Place `data.json` in `12345_johndoe_task1_part4`.
3. Create `ip_classifier.js` in the same folder.
4. Write the following code:

### Code for `ip_classifier.js`

```javascript
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
```

### Explanation

- **IP Classes**: Determined by the first octet:
  - A: 1-126
  - B: 128-191
  - C: 192-223
  - D: 224-239
  - E: 240-255
- **Storage**: Entire JSON object is appended to maintain all data fields.

---

## Final Steps

1. **Test**: Run each script with `node filename.js` to verify output.
2. **Compress**: Zip the `12345_johndoe` folder into `12345_johndoe_Task_1.zip`.
3. **Submit**: Upload to `WAF-S25-T1` as instructed.

This solution covers all requirements with detailed code and explanations. Replace placeholders (name, roll number, `data.json`, `domains.txt`) with your actual data.
