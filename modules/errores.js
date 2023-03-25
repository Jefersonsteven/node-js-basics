function seRompe() {
  try {
    return 3 + z;
  } catch (err) {
    console.error('Ha fallado por esto: ', err);
    console.log('Sigamos!!');
  }
} // * asincrona

try { // * sincrona
  seRompe();
} catch (err) {
  console.error('Ha fallado por esto: ', err);
  console.log('Sigamos!!');
}

console.log('Seguimos entonces!!');