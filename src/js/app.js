import {searchByClick} from "./modules/search.js";
import {burgerByClick} from "./modules/burger.js";
import {validateAboutStudio} from "./modules/about-studio-validate.js";
import {validateContacts} from "./modules/contacts-validate.js";
import {closeMapsBlock} from "./modules/maps-block.js";
import {map} from "./modules/script-maps.js";

searchByClick();
burgerByClick();
validateAboutStudio();
validateContacts();
closeMapsBlock();
map();
