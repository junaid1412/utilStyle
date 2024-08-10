import { StyleSheet } from 'react-native';
import { styleFlex } from './flex';
import { spaceStyle } from './space';
import { typography } from './typography';
import { layoutStyle } from './layout';
import { sizeStyle } from './size';
import { SizeSpace } from './config';

export const us = StyleSheet.create({
  ...spaceStyle,
  ...styleFlex,
  ...sizeStyle,
  ...typography,
  ...layoutStyle,
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
    gap: SizeSpace[0],
  },
  gap1: {
    gap: SizeSpace[1],
  },
  gap2: {
    gap: SizeSpace[2],
  },

  gap3: {
    gap: SizeSpace[3],
  },

  gap4: {
    gap: SizeSpace[4],
  },

  gap5: {
    gap: SizeSpace[5],
  },

  gap6: {
    gap: SizeSpace[6],
  },
});

export const utilStyle = us;
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
