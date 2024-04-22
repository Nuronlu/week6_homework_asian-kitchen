//A-***MENU BOLUMU-MENU ELEMANLARI(hazir gelen bolum)
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "./img/Tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "./img/Chicken Ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "./img/Bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "./img/Dan Dan Mian.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "./img/Yangzhou Fried Rice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "./img/Onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "./img/Jajangmyeon.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "./img/Ma Yi Shang Shu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "./img/Doroyaki.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


//B-***KATEGORILERE GORE BUTONLAR OLUSTURUP DOM'A EKLEME:

//B1- .btn-container class'li kapsayici div'i yakala:
let btnContainer = document.querySelector(".btn-container")
//B2- buton kategorilerine gore bir array olustur/menu'den category degerlerini filtreleyerek de yapabiliriz:
let btnCategory = ["All", "Korea", "Japan", "China"]

//B3- olusturdugumuz arrayin her bir ogesi icin: 
btnCategory.forEach(item => {
  //yeni bir buton olustur, 
  const btn = document.createElement("button");
  //butonun yazisi array elemaninin yazisiyla ayni olsun, 
  btn.textContent = item;
  //her birine stil versin,
  btn.classList.add("btn", "btn-outline-dark", "btn-item");
  //her birini DOM'a eklesin,
  btnContainer.appendChild(btn); 

  //her bir butona tiklandiginda su fonksyion calissin:
  btn.addEventListener("click", function() {
    //her biri icin butonunun metnini alip, btnCategory olustursun
    let btnCategory = this.textContent;
    //selectedMenu olustursun: eger btnCategory all'sa selectedMenu tum menuye esit olsun.Degilse selectedMenu, en ustte tanimlanan menu array'ini filtreleyerek gostersin (tum elemanlar yerine, category degeri, o sirada tiklanan btnCategory ile ayni olanlari gostersin):
    let selectedMenu;
    if (btnCategory === "All") {
      selectedMenu = menu;
    } else {
      selectedMenu = menu.filter(item => item.category === btnCategory); 
    }
    //asagida tanimlacak olan showMenu fonksiyonu kapsaminda selectedMenu tanimlamasini calistirsin:
    showMenu(selectedMenu);
  });
});

//C- ALL-FILTRESIZ MENU(BUTONLARA TIKLANMADIGINDA/BUTONLAR OLMASA DA)

//en ustteki menu array'ini kullanarak tum menu elemanlarini gosteren bir fonksiyon yazalim, degiskeni de menuItems olsun:
function showMenu(menuItems) {
  //#divParent idli kapsayici div'i yakala
  const divParent = document.querySelector("#divParent");
  //yeni sonuclari gostermeden once, yukardaki filtrelemeye gore yapilan sonuclarin silinmesi/cakisma olmamasi icin html icerigini temizle: 
  divParent.innerHTML = "";

  menuItems.forEach(item => {
    const menuItem = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div>
    `;
    divParent.innerHTML += menuItem; // Her bir menü öğesini DOM'a ekliyoruz
  });
}
// Sayfa yüklendiğinde fonksiyonu calistir:
showMenu(menu);



