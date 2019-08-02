$(document).ready(function() {
 
  $('#submitButton').click( function() {
    var boggle = [
      [$('#1a').val().toLowerCase(), $('#1b').val().toLowerCase(), $('#1c').val().toLowerCase(), $('#1d').val().toLowerCase()],
      [$('#2a').val().toLowerCase(), $('#2b').val().toLowerCase(), $('#2c').val().toLowerCase(), $('#2d').val().toLowerCase()],
      [$('#3a').val().toLowerCase(), $('#3b').val().toLowerCase(), $('#3c').val().toLowerCase(), $('#3d').val().toLowerCase()],
      [$('#4a').val().toLowerCase(), $('#4b').val().toLowerCase(), $('#4c').val().toLowerCase(), $('#4d').val().toLowerCase()]
    ];

    var file = "./../data/dict.txt";
    var dictionary;
    $.get(file, function(data){
      $.getScript('./../js/trie.js', function() {
        dictionary = data.split('\n');
        var trie = new Trie();
        trie.addList(dictionary);
        let words = findWords(boggle, trie);
        $("#results .modal-body p").html(prettyJSON(words));
        $('#results').modal('show');
        console.log(JSON.stringify(words));
      });
    });
  });
});

const findWords = (boggle, trie) => {

  var str = '';
  var words = [];
  let boggleSize = boggle.length;
  var visited = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0] 
  ];
  for(var i = 0; i < boggleSize; i++) {
    for (var j = 0; j < boggleSize; j++)
      recursiveFindWords(boggle, trie, words, visited, i, j, str);
  }
  return(words);
};

const recursiveFindWords = (boggle, trie, words, visited, row, col, str) => {
    visited[row][col] = 1; 
    str = str + boggle[row][col]; 
    let classify = trie.isPrefixOrWord(str);
    if (classify>0) {
      if (classify>1 && !words.includes(str))
        words.push(str);
      for (var i = row - 1; i <= row + 1 && i < 4; i++) 
        for (var j = col - 1; j <= col + 1 && j < 4; j++) 
          if (i >= 0 && j >= 0 && !Boolean(visited[i][j])) 
            recursiveFindWords(boggle, trie, words, visited, i, j, str);
    }
    visited[row][col] = 0; 
};

const prettyJSON = (value) => {
  let dataArray  = value.map(function(e){
    return JSON.stringify(e);
  });
  let dataString = dataArray.join(", ");
  dataString = dataString.replace(/["']/g, "")
  return dataString;
}

function alphaOnly(event) {
  var key = event.keyCode;`enter code here`
  return ((key >= 65 && key <= 90) || key == 8);
};

