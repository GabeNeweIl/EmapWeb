
let arr = [
    {ratingRevievs: "264 отзыва", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"},
    {ratingRevievs: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"},
    {ratingRevievs: "426 отзывов", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"},
    {ratingRevievs: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"},
    {ratingRevievs: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"},
    {ratingRevievs: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"},
    {ratingRevievs: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GB Space Gray"},
    {ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"},
    {ratingRevievs: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"},
    {ratingRevievs: "1106 отзывов", price: "3 999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"},
    {ratingRevievs: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"},
    {ratingRevievs: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"},
    {ratingRevievs: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"},
    {ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"},
    {ratingRevievs: "709 отзывов", price: "2 799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"},
    {ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"},
    {ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"},
    {ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"},
    {ratingRevievs: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"},
    {ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"},
    {ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"},
    {ratingRevievs: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"},
    {ratingRevievs: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"},
    {ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"},
    {ratingRevievs: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"},
    {ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"},
    {ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"},
    {ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"},
    {ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"},
    {ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"},
    {ratingRevievs: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"},
    {ratingRevievs: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}
];
function slicer(num)
{
    end = num.indexOf("грн");
    num = num.slice(0,end);
    num = Number(num.replace(/\s+/g,''));
    return num; 
}
let temp;
let numi;
let numj;
for (let i = 0; i < Object.keys(arr).length-1;i++)
{
    for (let j = i+1; j < Object.keys(arr).length;j++)
    {
        if (typeof arr[i].price.newUan == "undefined")
        {
            if (typeof arr[j].price.newUan == "undefined")
            {
                numj = slicer(arr[j].price);
                numi = slicer(arr[i].price);
                if (numj < numi)
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            else 
            {
                numj = slicer(arr[j].price.newUan);
                numi = slicer(arr[i].price);
                if (numj < numi)
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        else
        {
            if (typeof arr[j].price.newUan == "undefined")
            {
                numj = slicer(arr[j].price);
                numi = slicer(arr[i].price.newUan);
                if (numj < numi)
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            else 
            {
                numj = slicer(arr[j].price.newUan);
                numi = slicer(arr[i].price.newUan);
                if (numj < numi)
                {
                     temp = arr[i];
                     arr[i] = arr[j];
                     arr[j] = temp;
                }
            }
        }
    }
}
"use strict";
function output()
{
    for (let i = 0; i < Object.keys(arr).length; i++)
    {
        if (typeof arr[i].price.newUan == "undefined")
            console.log(arr[i].price);
        else 
            console.log(arr[i].price.newUan);
    }
}
let current = 0;
const createContainer = document.createElement('div');
document.body.appendChild(createContainer);
createContainer.className = "container";

for (let i = 0; i <Object.keys(arr).length;i++)
{
    let createBlock = document.createElement("div");
    createBlock.className = "block";
    let container = document.getElementsByClassName("container")[0];
    container.appendChild(createBlock);

    let createBlock_in = document.createElement("div");
    createBlock_in.className = "block_in";
    let block = document.getElementsByClassName("block")[i];
    block.appendChild(createBlock_in);

    createImg = document.createElement("IMG");
    createImg.src = "image.png";
    let block_in = document.getElementsByClassName("block_in")[i];
    block_in.appendChild(createImg);

    createName = document.createElement("div");
    createName.className = "name";
    createName.innerHTML = arr[i].name;
    block_in.appendChild(createName);

    createRating = document.createElement("div");
    createRating.className = "raiting";
    createRating.innerHTML = arr[i].ratingRevievs;
    block_in.appendChild(createRating);

    if (typeof arr[i].price.newUan == "undefined")
    {
        createPrice = document.createElement("div");
        createPrice.className = "price";
        createPrice.innerHTML = arr[i].price;
        block_in.appendChild(createPrice);
    }
    else 
    {
        createPrice_block = document.createElement("div");
        createPrice_block.className = "price_block";
        block_in.appendChild(createPrice_block);
        createNewPrice = document.createElement("div");
        createNewPrice.className = "newPrice";
        createNewPrice.innerHTML = arr[i].price.newUan;
        let price_block = document.getElementsByClassName("price_block")[current];
        price_block.appendChild(createNewPrice);

        createOldPrice = document.createElement("div");
        createOldPrice.className = "oldPrice";
        createOldPrice.innerHTML = arr[i].price.oldUan;
        price_block = document.getElementsByClassName("price_block")[current];
        price_block.appendChild(createOldPrice);
        current ++;
    }
    
}