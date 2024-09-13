declare module 'react-rnd' {
    import { Component } from 'react';
  
    interface RndProps {
      default?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
      };
      minWidth?: number;
      minHeight?: number;
      bounds?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export default class Rnd extends Component<RndProps> {}
  }