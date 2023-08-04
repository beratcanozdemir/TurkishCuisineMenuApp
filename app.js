const menu = [
    {
        id: 1,
        title: "Iskender Kebab",
        category: "Kebabs",
        price: "200 TL",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/ibvz-hero.jpg",
        desc: `Iskender Kebab is served with tomato sauce, butter and yoghurt.`
    },
    {
        id: 2,
        title: "Doner Kebab",
        category: "Kebabs",
        price: "180 TL",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/ins7-hero.jpg",
        desc: `Doner Kebab is served with pita bread, rice and salad.`
    },
    {
        id: 3,
        title: "Adana Kebab",
        category: "Kebabs",
        price: "180 TL",
        img: "https://icecektarifleri.net/wp-content/uploads/2023/06/evde-adana-kebap-nasil-yapilir.jpg",
        desc: `Adana Kebab is served with pita bread, rice and salad.`
    },
    {
        id: 4,
        title: "Kebab with Eggplant",
        category: "Kebabs",
        price: "180 TL",
        img: "https://listelist.com/wp-content/uploads/2022/09/antep.jpeg",
        desc: `Kebab with Eggplant is served with pita bread, rice and salad.`
    },
    {
        id: 5,
        title: "Pita with Ground Meat",
        category: "Pitas",
        price: "150 TL",
        img: "https://www.uzunlarkebap.com.tr/image/cache/catalog/16176170-12597-k%C4%B1ymal%C4%B1%20pide-1200x1200.jpg",
        desc: `Pita with Ground Meat is served with salad.`
    },
    {
        id: 6,
        title: "Pita with Cheese",
        category: "Pitas",
        price: "150 TL",
        img: "https://static.ticimax.cloud/54286/uploads/urunresimleri/buyuk/kasarli-pide--662a68.jpg",
        desc: `Pita with Cheese is served with salad.`
    },
    {
        id: 7,
        title: "Pita with Chopped Meat",
        category: "Pitas",
        price: "180 TL",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/bkdo-hero.jpg",
        desc: `Pita with Chopped Meat is served with salad.`
    },
    {
        id: 8,
        title: "Baklava",
        category: "Desserts",
        price: "150 TL",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/yp35-hero.jpg",
        desc: `Baklava is served with pistachio,`
    },
    {
        id: 9,
        title: "Rice Pudding",
        category: "Desserts",
        price: "120 TL",
        img: "https://www.uzunlarkebap.com.tr/image/cache/catalog/sutlac-1200x810w.jpg",
        desc: `Rice Pudding is served with hazelnut.`
    },
    {
        id: 10,
        title: "Kunefe",
        category: "Desserts",
        price: "120 TL",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/13/59/46/a7/photo0jpg.jpg",
        desc: `Kunefe is served with pistachio and cream.`
    },
];

const btnAll = document.createElement("button");
btnAll.type = "button";
btnAll.classList.add("btn", "btn-outline-light", "btn-item");
btnAll.textContent = "All";
btnAll.id = "all";

const container1 = document.querySelector('.btn-container');
container1.appendChild(btnAll);

const btnKebab = document.createElement("button");
btnKebab.type = "button";
btnKebab.classList.add("btn", "btn-outline-light", "btn-item");
btnKebab.textContent = "Kebabs";
btnKebab.id = "kebab";

const container2 = document.querySelector('.btn-container');
container2.appendChild(btnKebab);

const btnPita = document.createElement("button");
btnPita.type = "button";
btnPita.classList.add("btn", "btn-outline-light", "btn-item");
btnPita.textContent = "Pitas";
btnPita.id = "pita";

const container3 = document.querySelector('.btn-container');
container3.appendChild(btnPita);

const btnDessert = document.createElement("button");
btnDessert.type = "button";
btnDessert.classList.add("btn", "btn-outline-light", "btn-item");
btnDessert.textContent = "Desserts";
btnDessert.id = "dessert";

const container4 = document.querySelector('.btn-container');
container4.appendChild(btnDessert);

const section = document.querySelector('.section-center');

let allBtn = document.querySelector("#all");
allBtn.addEventListener("click", showAll);
const menu1 = document.querySelector(".section-center");
menu1.id = "menu";
function showAll() {
    let menuItems = menu.map(item => {
        return `
            <div class="menu-items col-lg-6 col-sm-12">
                <img 
                src=${item.img}
                alt=${item.title}
                class="photo"
                />
                <div class="menu-info">
                    <div class="menu-title">
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </div>
                    <div class="menu-text text-light">
                        ${item.desc}
                    </div>
                </div>
            </div>
        `
    });
    menuItems = menuItems.join("");
    section.innerHTML = menuItems;
};
showAll();

let kebabBtn = document.querySelector('#kebab');
kebabBtn.addEventListener("click", showKebabs);
function showKebabs() {
    let menuItems = menu.map(item => {
        if (item.category == "Kebabs") {
            return `
                <div class="menu-items col-lg-6 col-sm-12">
                    <img 
                        src=${item.img}
                        alt=${item.title}
                        class="photo"
                    />
                    <div class="menu-info">
                        <div class="menu-title">
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </div>
                        <div class="menu-text text-light">
                            ${item.desc}
                        </div>
                    </div>
                </div>
            `
        };
    });
    menuItems = menuItems.join("");
    section.innerHTML = menuItems;
};

let pitaBtn = document.querySelector('#pita');
pitaBtn.addEventListener("click", showPitas);
function showPitas() {
    let menuItems = menu.map(item => {
        if (item.category == "Pitas") {
            return `
                <div class="menu-items col-lg-6 col-sm-12">
                    <img 
                    src=${item.img}
                    alt=${item.title}
                    class="photo"
                    />
                    <div class="menu-info">
                        <div class="menu-title">
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </div>
                        <div class="menu-text text-light">
                            ${item.desc}
                        </div>
                    </div>
                </div>
            `
        };
    });
    menuItems = menuItems.join("");
    section.innerHTML = menuItems;
};

let dessertBtn = document.querySelector('#dessert');
dessertBtn.addEventListener("click", showDesserts);
function showDesserts() {
    let menuItems = menu.map(item => {
        if (item.category == "Desserts") {
            return `
                <div class="menu-items col-lg-6 col-sm-12">
                    <img 
                    src=${item.img}
                    alt=${item.title}
                    class="photo"
                    />
                    <div class="menu-info">
                        <div class="menu-title">
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </div>
                        <div class="menu-text text-light">
                        ${item.desc}
                        </div>
                    </div>
                </div>
            `
        };
    });
    menuItems = menuItems.join("");
    section.innerHTML = menuItems;
};