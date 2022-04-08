// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var vowels=0
    for (var i=0; i < str.length; i++){
        if (str="a"||"e"||"i"||"o"||"u")
        vowels++;
    }
    return vowels
};
