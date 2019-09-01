import _ from './util.js';

class Element {
  constructor(tagName, attrs, children) {
    if (!_.type(attrs) === 'object') {
      children = attrs;
      attrs = {};
    }
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children;
    this.key = attrs.key;
  }

  render() {
    let node = document.createElement(this.tagName);
    for (const key in this.attrs) {
      _.setAttr(node, key, this.attrs[key])
    }

    this.children.forEach((child) => {
      let childNode = child instanceof Element ? child.render() : document.createTextNode(child);
      node.appendChild(childNode);
    })
    return node;
  }
}

module.exports = function(tagName, attrs, children) {
  return new Element(tagName, attrs, children);
};