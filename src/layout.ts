import {StyleSheet} from 'react-native';
import {n} from './normalize';

export const layoutStyle = StyleSheet.create({
  overflowVisible: {
    overflow: 'visible',
  },
  overflowHidden: {overflow: 'hidden'},
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  inset0: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  insetY0: {top: 0, bottom: 0},
  insetX0: {left: 0, right: 0},
  top0: {top: 0},
  bottom0: {bottom: 0},
  right0: {right: 0},
  left0: {left: 0},

  zIndex0: {zIndex: 0},
  zIndex10: {zIndex: 10},
  zIndex20: {zIndex: 20},
  zIndex30: {zIndex: 30},
  zIndex40: {zIndex: 40},
  zIndex50: {zIndex: 50},

  resizeCover: {resizeMode: 'cover'},
  resizeContain: {resizeMode: 'contain'},
  resizeStretch: {resizeMode: 'stretch'},
  resizeRepeat: {resizeMode: 'repeat'},

  borderSolid: {borderStyle: 'solid'},
  borderDotted: {borderStyle: 'dotted'},
  borderDashed: {borderStyle: 'dashed'},
  border: {borderWidth: 1},
  border0: {borderWidth: 0},
  border2: {borderWidth: 2},
  border4: {borderWidth: 4},
  borderX: {borderRightWidth: 1, borderLeftWidth: 1},
  borderY: {borderTopWidth: 1, borderBottomWidth: 1},
  borderT: {borderTopWidth: 1},
  borderB: {borderBottomWidth: 1},
  borderL: {borderLeftWidth: 1},
  borderR: {borderRightWidth: 1},

  borderX0: {borderRightWidth: 0, borderLeftWidth: 0},
  borderY0: {borderTopWidth: 0, borderBottomWidth: 0},
  borderT0: {borderTopWidth: 0},
  borderB0: {borderBottomWidth: 0},
  borderL0: {borderLeftWidth: 0},
  borderR0: {borderRightWidth: 0},

  borderX2: {borderRightWidth: 2, borderLeftWidth: 2},
  borderY2: {borderTopWidth: 2, borderBottomWidth: 2},
  borderT2: {borderTopWidth: 2},
  borderB2: {borderBottomWidth: 2},
  borderL2: {borderLeftWidth: 2},
  borderR2: {borderRightWidth: 2},

  borderX4: {borderRightWidth: 4, borderLeftWidth: 4},
  borderY4: {borderTopWidth: 4, borderBottomWidth: 4},
  borderT4: {borderTopWidth: 4},
  borderB4: {borderBottomWidth: 4},
  borderL4: {borderLeftWidth: 4},
  borderR4: {borderRightWidth: 4},

  rounded: {borderRadius: n(6)},
  roundedLg: {borderRadius: n(8)},
  roundedFull: {borderRadius: n(200)},

  roundedTLg: {borderTopLeftRadius: n(8), borderTopRightRadius: n(8)},
  roundedBLg: {borderBottomLeftRadius: n(8), borderBottomRightRadius: n(8)},
  roundedLLg: {borderTopLeftRadius: n(8), borderBottomLeftRadius: n(8)},
  roundedRLg: {borderTopRightRadius: n(8), borderBottomRightRadius: n(8)},
});
