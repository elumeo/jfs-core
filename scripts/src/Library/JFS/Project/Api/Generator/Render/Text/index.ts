class Text {
  static lines = (...lines: string[]) => lines.join('\n');
  static capitalize = (text: string) => text[0].toUpperCase() + text.substring(1);
}

export default Text;
