
    // Write a function that uppercases the first letter of any string passed into it

    function upperCaser(word){
        const firstLetter = word[0];
       
        console.log(firstLetter, "<--- first letter");
       
        const upperCaseLetter = firstLetter.toUpperCase();
      
        console.log(upperCaseLetter, "<--- uppercase letter");
       
        const restOfWord = word.slice(1);
       
        console.log(restOfWord, "<--- rest of word");
       
        return upperCaseLetter + restOfWord;
    }
    
    const upperCased = upperCaser("hardest1");
    console.log(upperCased, "<-- Hardest1");

// * 
   Let ply1 = ("you"); + ply2 = ("computer")
  
   console.log(randomNumber)
   function getRandomNumber (){
       return Math.floor(math.random()9);
   }
   function getAlternateRandomNum(){
       return Math.floor(Math.random()9);
   }
       console.log(randomNumber)