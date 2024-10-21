"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilStyle = exports.us = void 0;
const react_native_1 = require("react-native");
const flex_1 = require("./flex");
const space_1 = require("./space");
const typography_1 = require("./typography");
const layout_1 = require("./layout");
const size_1 = require("./size");
const config_1 = require("./config");
exports.us = react_native_1.StyleSheet.create({
    ...space_1.spaceStyle,
    ...flex_1.styleFlex,
    ...size_1.sizeStyle,
    ...typography_1.typography,
    ...layout_1.layoutStyle,
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    shadow0: {},
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    shadow2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    shadow3: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shadow4: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textinputbox: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    gap0: {
        gap: config_1.SizeSpace[0],
    },
    gap1: {
        gap: config_1.SizeSpace[1],
    },
    gap2: {
        gap: config_1.SizeSpace[2],
    },
    gap3: {
        gap: config_1.SizeSpace[3],
    },
    gap4: {
        gap: config_1.SizeSpace[4],
    },
    gap5: {
        gap: config_1.SizeSpace[5],
    },
    gap6: {
        gap: config_1.SizeSpace[6],
    },
});
exports.utilStyle = exports.us;
// const co = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12,16,20,24,28];
// const l = {
//   a: '',
//   l: 'Left',
//   r: 'Right',
//   x: 'Horizontal',
//   y: 'Vertical',
//   t: 'Top',
//   b: 'Bottom',
// };
// const sp = { p: 'padding', m: 'margin' };
// function d() {
//   return Object.entries(sp).reduce((spx, el) => {
//     let spp = Object.entries(l).reduce((aloc, [k, v]) => {
//       let dpo = co.reduce((t, e, i) => {
//         return { ...t, [`${el[0]}${k}${e}`]: { [`${el[1]}${v}`]: e } };
//       }, {});
//       return { ...aloc, ...dpo };
//     }, {});
//     return { ...spx, ...spp };
//   }, {});
// }
