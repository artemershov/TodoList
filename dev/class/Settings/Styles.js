import defaultStyle from './param/defaultStyle';

export default class Styles {
  constructor(data = null) {
    this.setData(data || defaultStyle);
  }
  getData() {
    return {
      url: this.url,
      color: this.color,
      stretch: this.stretch,
    };
  }
  setBgUrl(data) {
    this.url = data;
  }
  setBgColor(data) {
    this.color = data;
  }
  setBgStretch(data) {
    this.stretch = data;
  }
  setData({ url, color, stretch } = defaultStyle) {
    this.url = url;
    this.color = color;
    this.stretch = stretch;
  }
}
