// Syntax scheme

const nord = {
    nord0: '#2E3440',
    nord1: '#3B4252',
    nord2: '#434C5E',
    nord3: '#4C566A',
    nord4: '#D8DEE9',
    nord5: '#E5E9F0',
    nord6: '#ECEFF4',
    nord7: '#8FBCBB',
    nord8: '#88C0D0',
    nord9: '#81A1C1',
    nord10: '#5E81AC',
    nord11: '#BF616A',
    nord12: '#D08770',
    nord13: '#EBCB8B',
    nord14: '#A3BE8C',
    nord15: '#B48EAD'
}

const backgroundColor   = '#2E3440';
const foregroundColor   = '#D8DEE9';
const cursorColor       = '#E5E9F0';
const borderColor       = '#2E3440';
const colors            = {
      black             : backgroundColor,
      red               : '#BF616A',
      green             : '#A3BE8C',
      yellow            : '#EBCB8B',
      blue              : '#5E81AC',
      magenta           : '#B48EAD',
      cyan              : '#88C0D0',
      white             : foregroundColor,
      lightBlack        : '#4C566A',
      lightRed          : '#BF616A',
      lightGreen        : '#A3BE8C',
      lightYellow       : '#D08770',
      lightBlue         : '#77ABE7',
      lightMagenta      : '#CAA6EC',
      lightCyan         : '#8FBCBB',
      lightWhite        : foregroundColor
};

// Config
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        colors,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 12,
        fontFamily: config.fontFamily || '"Fira Code"',
        termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: #9198A2 !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            .cursor-node[focus=true]:not([hyper-blink-moving]) {
                animation: blink 1s ease infinite;
            }
            @keyframes blink {
                50% { opacity: 0 }
            }
            span {
                font-weight: normal !important;
            }
        `,
        css: `
            ${config.css || ''}
            ::selection {
                background: #9198A2 !important;
            }
        `
    });
};
