// script.js
const button = document.getElementById("myButton");

button.addEventListener("click", async function() {
  try {
    // Check if the Phantom wallet is installed
    if (!window.solana || !window.solana.isPhantom) {
      throw new Error("Phantom wallet extension is not installed.");
    }

    // Request connection to the Phantom wallet
    await window.solana.connect();

    // Wallet is connected
    console.log("Wallet connected:", window.solana.publicKey.toString());

    // Perform additional actions with the connected wallet
    // ...

  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
});
