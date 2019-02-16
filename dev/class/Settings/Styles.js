import defaultStyle from './param/defaultStyle';
import { bgColors } from './param/colors';

export default class Styles {
  constructor(data = null) {
    this.setData(data || defaultStyle);
  }
  getData() {
    return {
      url: this.url,
      color: this.color,
      strech: this.strech,
    };
  }
  setBgUrl(data) {
    this.url = data;
  }
  setBgColor(data) {
    this.color = data;
  }
  setBgStrech(data) {
    this.strech = data;
  }
  setData({ url, color, strech } = defaultStyle) {
    this.url = url;
    this.color = color;
    this.strech = strech;
  }
  updateStyle() {
    const body = document.body;
    body.classList.remove(...bgColors);
    body.classList.add('bg-' + this.color);
    if (this.url) {
      body.style.backgroundImage = 'url(' + this.url + ')';
      body.style.backgroundRepeat = 'repeat';
      body.style.backgroundAttachment = 'fixed';
      body.style.backgroundPosition = 'center';
      body.style.backgroundSize = this.strech ? 'cover' : 'auto';
    }
  }
}
