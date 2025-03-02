document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Blockchain Shopping App";
    root.appendChild(header);

    const mainSection = document.createElement("div");
    mainSection.classList.add("card");
    mainSection.innerHTML = `
        <p>Experience secure, decentralized shopping powered by blockchain technology.</p>
        <button id="shopButton">Start Shopping</button>
    `;
    root.appendChild(mainSection);

    document.getElementById("shopButton").addEventListener("click", () => {
        alert("Blockchain Marketplace Coming Soon!");
    });
});