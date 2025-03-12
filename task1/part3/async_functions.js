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
