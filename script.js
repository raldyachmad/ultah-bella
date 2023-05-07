const btnAlert = document.getElementById("alert");

btnAlert.addEventListener("click", () => {
  const divBaru = document.createElement("div");
  const divBaru2 = document.createElement("div");
  const script = document.getElementsByTagName('script')[0];
//   document.body.appendChild(divBaru);
//   document.body.appendChild(divBaru2);
    document.body.insertBefore(divBaru,script)
    document.body.insertBefore(divBaru2,script)

  divBaru.classList.toggle("shadow");
  divBaru2.classList.add("alert");
  
  const pAlert = document.querySelector('div.alert');

  pAlert.innerHTML=`<p>🎂</p>
  <p>Selamat Ulang Tahun</p>
  <button id="keluar">Keluar</button>`;

    const btnKeluar = document.getElementById('keluar');

  btnKeluar.addEventListener('click',()=>{
    const hapusD1 = document.querySelector('div.shadow');
    const hapusD2 = document.querySelector('div.alert');
    document.body.removeChild(hapusD1);
    document.body.removeChild(hapusD2);
  })
});

