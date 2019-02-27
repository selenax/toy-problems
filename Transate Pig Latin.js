
//['a','e','i','o','u']
//any words that start with a vowel, add 'way' to the end ***"algorithmway".
//words that doesnt start with a vowel
    //shift letter  from to back until letter is vowel
    //add 'ay' to the back


  function translatePigLatin(str) {
    var regex = /[aeiou]/gi;
    var string = '';
    if(str[0].match(regex)) {
        string = str + 'way';
        return string;
        
    }
    //locate vowels in string 
        //get index from original string of first vowel 
        //substring from vowelindex to end + substr from 0 to vowelindex 
    var indexVowel = str.indexOf(str.match(regex)[0]); //1
    string = str.substr(indexVowel) + str.substr(0, indexVowel);
        string + 'ay';
        return string;
  }

  console.log(translatePigLatin("algorithm"))
  console.log(translatePigLatin("consonant"));


