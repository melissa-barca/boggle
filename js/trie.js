function Trie() {
  this.head = {
    key: '',
    children: {},
    word: false
  }
}

Trie.prototype.add = function (word) {
  var node = this.head;
  var newNode = null;

  for (var i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      newNode = {
        key: word[i],
        children: {}
      };
      node.children[word[i]] = newNode;
    }
    node = node.children[word[i]];
    if (i == word.length-1) {
      node.word = true;
    }
  }
} 

Trie.prototype.addList = function (list) {
  for (var i = 0; i < list.length; i++)
    this.add(list[i]);
}

Trie.prototype.isPrefixOrWord = function(prefix) {
  // returns 0 for neither, 1 for prefix, 2 for word

  var value = 0;
  var node = this.head;
  if (prefix.length<1)
   return false;
  for(var i = 0; i < prefix.length; i++) {
    if (node.children[prefix[i]])
     node = node.children[prefix[i]];
    else
      return false;
  }
  if (node.word)
   value=2;
  else
   value=1;
  return value;
};
