//This module contains some general purpose help functions

//Fetch function - the file with the path <file> is fetched and the text is returned
//If the path <file> is not found, the error is "catched", and the error is logged to the console. If 'try' and 'catch' were not used, the script would stop when encountered an error.
async function getTextFile(file) {
    try {    
        const response = await fetch(file);
        const text = await response.text();
        return text;
    } catch(err) {
        console.log(err)
    }
}

//Debouncer function - the debounced <func> has to wait for <wait> milliseconds before running next time
function debounce(func, wait = 200, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
  };

