const upgradesConfig = [
    // --- KLICK UPGRADES (CPC) ---
    { id: 'u1', name: 'Finger-Training', desc: '+1 pro Klick', type: 'cpc', boost: 1, baseCost: 50 },
    { id: 'u2', name: 'Kupfer-Maus', desc: '+5 pro Klick', type: 'cpc', boost: 5, baseCost: 750 },
    { id: 'u3', name: 'Gaming-Tastatur', desc: '+15 pro Klick', type: 'cpc', boost: 15, baseCost: 5000 },
    { id: 'u4', name: 'Makro-Recorder', desc: '+50 pro Klick', type: 'cpc', boost: 50, baseCost: 25000 },
    { id: 'u5', name: 'Goldene Hand', desc: '+150 pro Klick', type: 'cpc', boost: 150, baseCost: 100000 },
    { id: 'u6', name: 'Diamant-Cursor', desc: '+500 pro Klick', type: 'cpc', boost: 500, baseCost: 750000 },
    { id: 'u7', name: 'Neuronale Verbindung', desc: '+2k pro Klick', type: 'cpc', boost: 2000, baseCost: 5000000 },
    { id: 'u8', name: 'Gedankenkontrolle', desc: '+10k pro Klick', type: 'cpc', boost: 10000, baseCost: 25000000 },

    // --- AUTO BOTS (CPS) ---
    { id: 'a1', name: 'Auto-Clicker v1', desc: '+1/sek', type: 'cps', boost: 1, baseCost: 250 },
    { id: 'a2', name: 'Sklaven-Bot', desc: '+8/sek', type: 'cps', boost: 8, baseCost: 2000 },
    { id: 'a3', name: 'Bot-Netzwerk', desc: '+25/sek', type: 'cps', boost: 25, baseCost: 12000 },
    { id: 'a4', name: 'Rechenzentrum', desc: '+75/sek', type: 'cps', boost: 75, baseCost: 60000 },
    { id: 'a5', name: 'KI-Core', desc: '+250/sek', type: 'cps', boost: 250, baseCost: 300000 },
    { id: 'a6', name: 'Satelliten-Link', desc: '+1k/sek', type: 'cps', boost: 1000, baseCost: 1500000 },
    { id: 'a7', name: 'Quanten-Rechner', desc: '+5k/sek', type: 'cps', boost: 5000, baseCost: 10000000 },
    { id: 'a8', name: 'Fusions-Generator', desc: '+20k/sek', type: 'cps', boost: 20000, baseCost: 75000000 },
    { id: 'a9', name: 'Mars-Basis', desc: '+100k/sek', type: 'cps', boost: 100000, baseCost: 500000000 },
    { id: 'a10', name: 'Galaktischer Hub', desc: '+500k/sek', type: 'cps', boost: 500000, baseCost: 2500000000 },
    { id: 'a11', name: 'Zeit-Krümmer', desc: '+2Mio/sek', type: 'cps', boost: 2000000, baseCost: 15000000000 },
    { id: 'a12', name: 'Dimensions-Portal', desc: '+10Mio/sek', type: 'cps', boost: 10000000, baseCost: 100000000000 },
];function formatNum(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + ' Mrd';
    if (num >= 1000000) return (num / 1000000).toFixed(2) + ' Mio';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return Math.floor(num).toLocaleString();
}const dummyGlobal = [
    { name: "Nexus_Prime", points: 500000000000 }, // 500 Milliarden
    { name: "ShadowLord", points: 10000000000 }    // 10 Milliarden
];// Beispiel für die CSS-Klasse im Button-Tag:
const canAfford = data.points >= cost;
const opacityClass = canAfford ? 'opacity-100' : 'opacity-40 cursor-not-allowed';
