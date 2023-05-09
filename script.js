const btnCard = document.getElementById("btnCard");

const divBaru = document.createElement("div");
const divBaru2 = document.createElement("div");
btnCard.addEventListener("click", () => {
  // playmusic
  let audio = document.getElementById('audio');
  audio.currentTime = 9
  audio.play();
  audio.addEventListener("timeupdate", function() {
    if (audio.currentTime >= 27) {
      audio.pause();
      audio.currentTime = 9;
      audio.play();
    }
  });

  function addCard(){
    const script = document.getElementsByTagName("script")[0];
  
    document.body.insertBefore(divBaru, script);
    document.body.insertBefore(divBaru2, script);
  
    divBaru.classList.add("blur");
    divBaru2.classList.add("card");

  };
  function closeCard(){
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
const lanjut1 = document.getElementById('lanjut1');
lanjut1.addEventListener('click',()=>{
  closeCard();
  addCard();
  card.innerHTML=`<button id="close">×</button>
  <div class="textArea">
  <p>Mudah-mudahan sing janten :</p>
  <ul>
        <li>bageur,</li> 
        <li>sholehah,</li>
        <li>pinter,</li>
        <li>sukses,</li>
        <li>istrina miliyarder (miliyarder-na Raldy)😁.</li>
        </ul>
      <p class="arabic al-center">أٰمِيْنْ</p>
    </div>
    <div class="btnArea">
    <button id="lanjut2">Lanjut!</button>
    </div>`;
    const btnClose = document.getElementById("close");
    btnClose.addEventListener("click", () => {
      closeCard();
    });
  })
});
