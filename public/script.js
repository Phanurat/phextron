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
