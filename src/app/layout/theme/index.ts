import { selectAnatomy } from '@chakra-ui/anatomy';
import { extendTheme, createMultiStyleConfigHelpers, defineStyle, defineStyleConfig } from '@chakra-ui/react';
import defaultTheme from "@chakra-ui/theme"
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { color } from 'framer-motion';
import Tabs from './tabs';
import Accordion from './accordion';

const { definePartsStyle, defineMultiStyleConfig } =
createMultiStyleConfigHelpers(selectAnatomy.keys);

const colors = {
  primary: {
    100: '#FFF3F8',
    500: '#8D2048',
    600: '#7C1B3F',
    700: '#6B1736',
    800: '#5A122D',
    900: '#480E24',
  },
  yellow: {
    light: '#FFF1C1',
    dark: '#BF7506',
  },
  natural: {
    50: '#F7F4F6',
    100: '#F5F2F4',
    200: '#E6E3E5',
    300: '#DEDBDC',
    400: '#D4D1D3',
    500: '#BFBCBD',
    600: '#9F9D9E',
    700: '#858284',
    800: '#565355',
    900: '#383537',
  },
  success: '#15A808',
  alert: '#ED0404',
};

const textStyles = {
  h1: {
    fontSize: '40px',
    lineHeight: '120%',
  },
  h2: {
    fontSize: '32px',
    lineHeight: '120%',
  },
  h3: {
    fontSize: '28px',
    lineHeight: '120%',
  },
  h4: {
    fontSize: '24px',
    lineHeight: '120%',
  },
  h5: {
    fontSize: '20px',
    lineHeight: '120%',
  },
  h6: {
    fontSize: '16px',
    lineHeight: '120%',
  },
  t1: {
    fontSize: '40px',
    lineHeight: '150%',
  },
  t2: {
    fontSize: '32px',
    lineHeight: '150%',
  },
  t3: {
    fontSize: '28px',
    lineHeight: '150%',
  },
  t4: {
    fontSize: '24px',
    lineHeight: '150%',
  },
  t5: {
    fontSize: '20px',
    lineHeight: '150%',
  },
  t6: {
    fontSize: '16px',
    lineHeight: '150%',
  },
  t7: {
    fontSize: '14px',
    lineHeight: '150%',
  },
};

const fonts = {
  heading: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  body: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
};

const selectThemeMap = {
  primary: definePartsStyle({
    field:{
      fontSize: '20px',
      bg: 'white',
      padding: '17px 12px',
      height: 'fit-content',
      border: '1px',
      borderColor: 'natural.300',
      _focus:{
        borderColor: 'primary.100',
      },
    },
  }),
};

const buttonThemeMap = {
  outline: (props: StyleFunctionProps) => {
    const colorScheme = props?.colorScheme || 'primary'
    const isNatural = colorScheme === 'natural'
    return({
      ...defaultTheme.components?.Button?.variants?.outline(props),
      backgroundColor: isNatural ? 'white' : 'transparent',
      color: `${colorScheme}.${isNatural ? '800' : '500'}`,
      border: '1px',
      borderColor: `${colorScheme}.${isNatural ? '300' :'500'}`,
      _hover: {
        backgroundColor: 'natural.50',
      },
      _active: {
        backgroundColor: `${colorScheme}.500`,
        color: 'white',
      },
    })
  },
  solid({colorScheme = 'primary'} : {colorScheme: string}){
    return {
      backgroundColor: `${colorScheme}.500`,
      color: 'white',
      _hover: {
        bg: `${colorScheme}.600`,
      },
      _active: {
        bg: `${colorScheme}.700`,
      },
    }
  },
  light(props: StyleFunctionProps){
    const colorScheme = props.colorScheme === 'gray' ? 'natural' : props.colorScheme;
    return (
      {
        backgroundColor: `${colorScheme}.100`,
        color: `${colorScheme}.900`,
        _hover: {
          bg: `${colorScheme}.200`,
        },
        _active: {
          bg: `${colorScheme}.300`,
        },
      }
    )
  }
};

const checkThemeMap = {
  normal: defineStyle({
    control: {
      width: '20px',
      height: '20px',
    }
  }),
};
const Select = defineMultiStyleConfig({
  variants: selectThemeMap,
  baseStyle:{
    field:{
      backgroundColor: 'white',
      border: '1px',
      borderColor: 'natural.300',
      _focus:{
        borderColor: 'primary.100',
      },
    },
  },
  sizes:{
    md: {
      field: {
        fontSize: '20px',
        padding: '17px 12px',
        h: 'fit-content',
      },
    },
  },
});

// Button Theme
const Button = defineStyleConfig({
  variants: buttonThemeMap,
  baseStyle:{
    backgroundColor: `primary.500`,
    color: `white`,
    _hover: {
      bg: `primary.600`,
    },
    _active: {
      bg: `primary.700`,
    },
  },
  sizes: {
    md: {
      px: '24px',
      py: '12px',
      borderRadius: '8px',
      fontSize: '20px',
      h: 'auto',
    },
    sm:{
      padding: '12px',
      fontSize: '12px',
    }
  },
});

const Checkbox = defineStyleConfig({
  variants: checkThemeMap,
  sizes:{
    md: {
      control: {
        width: '20px',
        h: '20px',
      },
    },
  },
})

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  components: {
    Button,
    Tabs,
    Accordion,
    Checkbox,
    Select,
  },
});
export default theme;
