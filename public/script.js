const connectBtn = document.getElementById('connectBtn');
const menu = document.getElementById('menu');

connectBtn.onclick = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            connectBtn.innerText = `Connected: ${accounts[0].slice(0, 6)}...`;
        } catch (err) {
            alert('Connection failed.');
        }
    } else {
        alert('Install MetaMask to use this app.');
    }
};

const fromIcon = document.getElementById("fromIcon");
const toIcon = document.getElementById("toIcon");

function updateIcons() {
    const fromSelected = fromToken.options[fromToken.selectedIndex];
    const toSelected = toToken.options[toToken.selectedIndex];

    const fromIconSrc = fromSelected.getAttribute("data-icon");
    const toIconSrc = toSelected.getAttribute("data-icon");

    fromIcon.src = fromIconSrc;
    toIcon.src = toIconSrc;
}

fromToken.addEventListener("change", () => {
    updateRate();
    updateIcons();
});

toToken.addEventListener("change", () => {
    updateRate();
    updateIcons();
});

// เรียกตอนโหลดหน้า
updateRate();
updateIcons();