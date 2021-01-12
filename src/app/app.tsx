import './app.scss';

import React, { useState } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';

import Header from '@/app/layout/header';
import Sim from '@/app/layout/sim';

import { loadTheme } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

loadTheme({
  palette: {
    themePrimary: "#fa983a",
    themeLighterAlt: "#f6b93b",
    themeLighter: "#fad390",
    themeLight: "#f8c291",
    themeTertiary: "#235a85",
    themeSecondary: "#3385c3",
    themeDarkAlt: "#cd6133",
    themeDark: "#e58e26",
    themeDarker: "#ff793f",
    accent: "#e15f41",

    neutralLighterAlt: '#282828',
    neutralLighter: '#313131',
    neutralLight: '#3f3f3f',
    neutralQuaternaryAlt: '#484848',
    neutralQuaternary: '#4f4f4f',
    neutralTertiaryAlt: '#6d6d6d',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#1f1f1f',
  },
  fonts: {
    small: {
      fontSize: '11px',
    },
    medium: {
      fontSize: '12px',
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold',
    },
    xLarge: {
      fontSize: '22px',
      fontWeight: 'semibold',
    },
  },
});

const code = 'const a = 0;';

const App = () => {
  const [ status, setStatus ] = useState(0);

  return (
    <div className="app">
      <Header {...{ status, setStatus }} />
      <div className="editor">
        <CodeMirror
          value='// X + Y = Z
LOD X
ADD Y
STO Z
HLT
          '
          options={{
            mode: 'xml',
            theme: 'material-darker',
            lineNumbers: true
          }}
        />
      </div>
      <Sim {...{ status, setStatus }} />
    </div>
  );
}

export default App;
