const img = document.getElementById("gambar")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const ctn = document.getElementById("content")
const ucapan = document.getElementById("ucapan")
const btn = document.getElementById("btn")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")
const pesan = document.getElementById("link")
const kotak_pesan = document.getElementById("kotak-pesan")
const nm = document.getElementById("nama")
const nm_2 = document.getElementById("nama2")


const nomor_hp_yang_ngirim = "+6283854398656"
const nama_yang_ngirim = "icaaa"


const nama = "Kakanda Hanipunk"

let n = 0
const link_wa = `https://api.whatsapp.com/send?text=Aku udah terima ucapannya! &phone=${nomor_hp_yang_ngirim}`
nm.textContent = nama
nm_2.textContent = nama_yang_ngirim


const kata = [
  `Selamat ulang tahun uiii ${nama}, 🎂`,
  `Jaga kesehatan teruss! 🙃`,
  `Selalu tersenyum, apapun yang orang lakuin ke kita ya ${nama}`,
  `Jangan lupa di makan 🍰 nya, walau virtual ang ang ang`,
  `Sekali lagi selamat HBD ${nama} 🙌✨`
]

function gantiGambar(a) {
  atas.style.height = "40%"
  bawah.style.height = "60%"
  btn.style.display = "none"
  btn_2.style.bottom = "10px"
  btn_2.style.left = "10px"
  btn_2.style.width = "30%"
  btn.textContent = "next"
  ctn.style.backgroundColor = "rgba(255,255,255, .1"
  setTimeout(()=> {
    img.src = "kue_2.png"
  }, 100)
  ucapanCetak()
}

function musikPlay() {
  musik.play()
  musik.loop = true

}

function exit() {
  kotak_pesan.style.display = "none"
  musikPlay()
  fullLayar()
}

function ucapanCetak() {
  ucapan.textContent = kata[n]
  btn_2.textContent = "next"
  if (n == 3) {
    btn_3.style.width = "50%"
    btn_3.style.bottom = "20px"
    btn_3.style.display = "block"
    btn_3.textContent = "makan"
    btn_2.style.display = "none"
  } else if (n > kata.length - 1) {
    btn_2.style.display = "none"
    pesan.style.display = "block"
    ucapan.style.display = "none"
    atas.style.height = "70%"
    bawah.style.height = "30%"
    ctn.style.height = "320px"
    atas.style.height = "0"
    bawah.style.height = "100%"
    ctn.style.height = "200px"
    pesan.setAttribute("href", link_wa)
  }

  if(n == kata.length - 1){
    atas.style.height = "0"
    bawah.style.height = "100%"
    img.style.display = "none"
    ctn.style.height = "200px"
  }
  n++
}
function hapusKue(){
  btn_2.style.display = "block"
  btn_2.textContent = "Udah 😁"
  btn_3.style.display = "none"
  img.src = "love.gif"
  img.style.width = "200px"
}
function fullLayar() {
			var elem = document.documentElement;

			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}

		}