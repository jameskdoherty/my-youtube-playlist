/** 
 * @desc Truncate  - Filter to truncate video description
 * text that is too long with ellipsis, also removes
 * periods and commas in the sample text 
 */
angular.module('app').filter('truncate', function () {

        return function (textToTruncate, roundOffToWord, maximumCharacters, endCharacter) {
            
            if (!textToTruncate) return '';

            // check if maximum characters is number 
            maximumCharacters = parseInt(maximumCharacters, 10);

            // if NaN return the string
            if (!maximumCharacters) return textToTruncate;

            // if string is less than maximum characters specified return the string
            if (textToTruncate.length <= maximumCharacters) return textToTruncate;

            // truncate from maximum specified 
            textToTruncate = textToTruncate.substr(0, maximumCharacters);

            // if truncate should cut to whole words
            if (roundOffToWord) {
              
                // find whitespace
                var lastWhiteSpaceWholeWord = textToTruncate.lastIndexOf(' ');
                if (lastWhiteSpaceWholeWord !== -1) {
                  
                  //Also remove . and , 
                  if (textToTruncate.charAt(lastWhiteSpaceWholeWord-1) === '.' || textToTruncate.charAt(lastWhiteSpaceWholeWord-1) === ',') {
                    lastWhiteSpaceWholeWord = lastWhiteSpaceWholeWord - 1;
                  }
                  textToTruncate = textToTruncate.substr(0, lastWhiteSpaceWholeWord);
                }
            }

            return textToTruncate + (endCharacter || ' …');
        };
    });