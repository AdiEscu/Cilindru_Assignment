function calculeazaVolumul () {
    let inaltimea = parseFloat(document.getElementById('inaltimea').value);
    let raza = parseFloat(document.getElementById('raza').value);
  
    let volum = Math.PI * raza ** 2 * inaltimea;
  
    document.getElementById('outputDiv').innerHTML =
      'Volumul cilindrului este: ' + volum.toFixed(3);
  }