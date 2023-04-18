import "./index.html";
import "./pets.html";
import "./index.scss";

import "./data/pets.json";

import "./assets/img/pets-charly.png";
import "./assets/img/pets-freddie.png";
import "./assets/img/pets-jennifer.png";
import "./assets/img/pets-katrine.png";
import "./assets/img/pets-scarlett.png";
import "./assets/img/pets-sophia.png";
import "./assets/img/pets-timmy.png";
import "./assets/img/pets-woody.png";

import "./modules/grade.js";
import "./modules/burger-menu.js";
import "./modules/slider.js";
import "./modules/pagination.js";

import { runModal } from "./modules/run-modal";

const getData = async() => {
    try { 
    const path = "./data/pets.json";
    const res = await fetch(path);
    const data = await res.json();
    return data;
    }
    catch(err) {
        console.error(err);
    }    
}

(async () => {
    //Получим данные
    const pets = await getData();

    //Обработаем клик по карточке
    !document.location.href.includes("pets") ? runModal(pets,"slider__container","slider__item") : runModal(pets,"gallery","gallery__item");
})()