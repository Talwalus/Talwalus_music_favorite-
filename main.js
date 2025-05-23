const lagu = [
  ["Blue", "Yun Kai", 389, 10900, "blue.png"],
  ["Play", "Alan Walker", 7078, 140800, "play.png"],
  ["Sampai Akhir Waktu", "Yovie Nuno", 990, 12800, "sampai.png"],
  ["Bring Me To Life", "Evanescence", 1000, 16000, "bring.png"],
  ["Patience", "Take That", 1000, 16000, "cause.png"],
];
 
const konten = document.getElementById("app");
 
for (let i = 0; i < lagu.length; i++) {
  var judul = lagu[i][0];
  var penyanyi = lagu[i][1];
  var like = lagu[i][2];
  var view = lagu[i][3];
  var gambar = lagu[i][4];
 
  var template = `
    <div class="" style="background-image: url(${gambar}); border-radius: 16px;">
            <div class="card" >
                <h3 class="music-title" id="music-title-1">${judul}</h3>
                <br><p class="music-author" id="music-author-1">${penyanyi}</p>
                <img src="piringan.png" alt="" srcset="">
                <div class="footer-card">
                    <div class=""><i class="ph ph-heart"></i><p class="likes" id="likes-1">${like}</p></div>
                    <div class=""><i class="ph ph-play"></i><p class="play" id="play-1">${view}</p></div>
                </div>
            </div>
        </div>
  `;
 
  konten.innerHTML += template;
}
