import { createGlobalStyle } from 'styled-components';
import defaultStyle from '../../class/Settings/param/defaultStyle';
import colors from '../../class/Settings/param/colors';

const shadeHexColor = (color, percent) => {
  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = f >> 16;
  const G = (f >> 8) & 0x00ff;
  const B = f & 0x0000ff;
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
};

const Styles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0.25rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  body {
    background-position: center;
    background-attachment: fixed;
  }
  ${props => {
    const color = colors[props.color || defaultStyle.color];
    const darkenColor = shadeHexColor(color, -0.25);
    const image = props.bg ? `url(${props.bg})` : 'none';
    const size = props.stretch ? 'cover' : 'auto';
    return `
      ::-webkit-scrollbar-thumb { background-color: ${color} }
      body {
        background-color: ${color};
        background-image: ${image};
        background-size: ${size};
      }
      a, .btn-link { color: ${color} }
      a:hover, .btn-link:hover { color: ${darkenColor} }
    `;
  }}
`;

export default Styles;
