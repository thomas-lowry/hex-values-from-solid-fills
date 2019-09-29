var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const colorStyles = figma.getLocalPaintStyles();
var nameAndHex, hexOnly, string = '';
var selection = [];
console.log(colorStyles);
// COMMANDS //////////
//
if (figma.command === 'hex') {
    hex();
}
else {
    namesAndHex();
}
function hex() {
    colorStyles.forEach(style => {
        let r = style.paints[0].color.r;
        let g = style.paints[0].color.g;
        let b = style.paints[0].color.b;
        let hex = makeHex(r, g, b);
        console.log(hex);
        string += '#' + hex.toString() + '\n';
    });
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({
                'family': 'Roboto',
                'style': 'Regular'
            });
            //create text object
            const textObject = figma.createText();
            textObject.name = 'List of hex values';
            textObject.characters = string;
            selection.push(textObject);
            figma.currentPage.selection = selection;
        });
    })();
    figma.closePlugin();
}
function namesAndHex() {
    colorStyles.forEach(style => {
        let name = style.name;
        let r = style.paints[0].color.r;
        let g = style.paints[0].color.g;
        let b = style.paints[0].color.b;
        let hex = makeHex(r, g, b);
        string += name + ': ' + '#' + hex.toString() + '\n';
    });
    (function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield figma.loadFontAsync({
                'family': 'Roboto',
                'style': 'Regular'
            });
            //create text object
            const textObject = figma.createText();
            textObject.name = 'List of hex values';
            textObject.characters = string;
            selection.push(textObject);
            figma.currentPage.selection = selection;
        });
    })();
    figma.closePlugin();
}
//helper functions
// convert 
function makeHex(r, g, b) {
    let red = rgbToHex(Math.round(255 * r));
    let green = rgbToHex(Math.round(255 * g));
    let blue = rgbToHex(Math.round(255 * b));
    return red + green + blue;
}
function rgbToHex(int) {
    var hex = Number(int).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}
