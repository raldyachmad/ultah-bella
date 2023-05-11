const btnCard = document.getElementById("btnCard");

const divBaru = document.createElement("div");
const divBaru2 = document.createElement("div");
btnCard.addEventListener("click", () => {
  // play music
  let audio = document.getElementById("audio");
  audio.currentTime = 9;
  audio.play();
  audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 27) {
      audio.pause();
      audio.currentTime = 9;
      audio.play();
    }
  });
  let divBaru3 = document.createElement('div');
  let header = document.querySelector('header');
  document.body.insertBefore(divBaru3, header);

  divBaru3.classList.add('notification');
  divBaru3.setAttribute("id", "notification");
  divBaru3.innerHTML=`<span class="kotak"></span>
  <span class="text">Stop Music</span>`;

  // stop music
  let notif = document.getElementById("notification");
  notif.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.body.removeChild(notif);
  });

  function addCard() {
    const script = document.getElementsByTagName("script")[0];

    document.body.insertBefore(divBaru, script);
    document.body.insertBefore(divBaru2, script);

    divBaru.classList.add("blur");
    divBaru2.classList.add("card");
  };
  function closeCard() {
    document.body.removeChild(blur);
    document.body.removeChild(card);
  };
  addCard();
  const card = document.querySelector("div.card");
  const blur = document.querySelector("div.blur");
  card.innerHTML = `<div class="textArea taCenter">
    <button id="close">×</button>
      <p class="arabic al-center">بَارَكَ اللَّهُ فِي عُمْرِكْ</p>
      <p class="latin al-center">Barakallah fii umrik</p>
      <p class="al-center">“Semoga Allah melimpahkan keberkahan dalam bertambahnya usiamu.”</p>
    </div>
  <div class="btnArea">
  <button id='lanjut1'>Lanjut!</button>
  </div>`;

  const btnClose = document.getElementById("close");
  btnClose.addEventListener("click", () => {
    closeCard();
  });
  // pesan 2
  const lanjut1 = document.getElementById("lanjut1");
  lanjut1.addEventListener("click", () => {
    closeCard();
    addCard();
    card.innerHTML = `<button id="close">×</button>
    <div class="textArea">
    <p>Mudah-mudahan sing janten :</p>
    <ul>
          <li>bageur,</li> 
          <li>sholehah,</li>
          <li>pinter,</li>
          <li>sukses,</li>
          <li>istrina miliyarder (miliyarder-na Raldy)😁.</li>
          </ul>
        <p>Pokoknya doa-doa terbaik buat ayang 🥰</p>
        <p class="arabic al-center">أٰمِيْنْ</p>
      </div>
      <div class="btnArea">
      <button id="lanjut2">Lanjut!</button>
      </div>`;
    const lanjut2 = document.getElementById('lanjut2');
    lanjut2.addEventListener('click',()=>{
      closeCard();
      addCard(); 
      card.innerHTML=`<button id="close">×</button>
        <div class="textArea">
        <p class="al-center gede">🎁</p>
        <p class="al-center">Hadiahnya diterima ya, walaupun ga mahal, terus ga mewah juga. maaf ya baru bisa ngasih ini 😥</p><br/>
        <p class="al-center">terus harus dipake juga ya, biar ada manfaatnya hehehe 😆</p>
        </div>
        <div class="btnArea">
          <button id="lanjut3">Lanjut!</button>
        </div>`;
      const btnClose = document.getElementById("close");
      btnClose.addEventListener("click", () => {
        closeCard();
      });
      const lanjut3 =document.getElementById('lanjut3');
      lanjut3.addEventListener('click',()=>{
        closeCard();
        addCard(); 
        card.innerHTML=`<button id="close">×</button>
        <div class="textArea">
        <p class="al-center">Pokoknya aku sayang sama ayang 🥰🥰🥰</p><br/>
        <p class="al-center">Ayang jangan bikin aku marah mulu ya , terus ayang juga jangan marah-marah mulu juga 🤗😋😘</p>
        </div>
        <div class="btnArea">
          <button id="lanjut4">Lanjut!</button>
        </div>`;
        const btnClose = document.getElementById("close");
        btnClose.addEventListener("click", () => {
          closeCard();
        });
        const lanjut4 =document.getElementById('lanjut4');
        lanjut4.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea">
          <p class="al-center gede">💖</p>
          <p class="al-center">Cintaku kepadamu melebihi cintaku kepada coding pokoknya 🤣🤣🤣</p>
          </div>
          <div class="btnArea">
            <button id="lanjut5">Lanjut!</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const lanjut5 =document.getElementById('lanjut5');
        lanjut5.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea">
          <p class="al-center gede">🥰</p><br/>
          <p class="al-center">Udah si... gitu aja😋</p>
          </div>
          <div class="btnArea">
            <button id="keluar">Keluar</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const keluar = document.getElementById("keluar");
          keluar.addEventListener("click", () => {
            closeCard();
          });
        });
        });
      });
    })
    // close
    const btnClose = document.getElementById("close");
    btnClose.addEventListener("click", () => {
      closeCard();
    });
  });
});
