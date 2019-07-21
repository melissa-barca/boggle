# boggle

Javascript web app to solve the Boggle game using bootstrap 4 and node.js.

Where can we go from the initial attempt?
Validate input - should always be one alpha character or 'qu'.
Improve UI for displaying results. Implementing with React could help with this.
Iterating over over rows and columns currently does some unneccesary work - come up with a way to avoid this with clean code.
Storing the boggle can probably be done cleaner.
Take some lifting off the browser and don't reload dictionary into Trie with every Submit click. Eliminate need to keep passing the Trie between functions.
Make more sense of Succinct Data Structures and implement Trie in this way: http://stevehanov.ca/blog/index.php?id=120
Save complete dictionary, allow the user to select their own size grid and make adjustments depending on how this affect performanace.

Design sources & inspiration
- Boggle Wikipedia Page https://en.wikipedia.org/wiki/Boggle
- Loosely used web application I am developing in a Full Stack Development coursera course as template for front-end (https://github.com/mbranagan/Full-Stack-Coursera-Course)
- Trie search npm documentation. The trie-search package could've been used to implement the trie, but I wrote my own less-involved version to exclusively cover my needs. https://www.npmjs.com/package/trie-search

Dictionary (dict.txt) sources
http://www.gwicks.net/dictionaries.htm

Websites accumulated from Google searches along the way
sed command to remove lines shorter than 3 characters from file https://unix.stackexchange.com/questions/123243/how-to-remove-lines-shorter-than-xy
sed command to remove lines longer than 16 characters from file https://unix.stackexchange.com/questions/9981/how-to-delete-line-if-longer-than-xy?rq=1
jQuery getScript https://stackoverflow.com/questions/4634644/how-to-include-js-file-in-another-js-file
jQuery to pass results to bootstrap modal https://stackoverflow.com/questions/20057137/how-to-pass-a-string-to-a-bootstrap-modal
jQuery read text file https://www.sitepoint.com/jquery-read-text-file/
Refreshing memory on JS arrays https://www.w3schools.com/js/js_arrays.asp
Debugging JS undefined error https://css-tricks.com/%E2%80%8B%E2%80%8Bavoiding-those-dang-cannot-read-property-of-undefined-errors/
