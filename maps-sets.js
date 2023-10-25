//1.
{1,2,3,4}

//2
'ref'

//3
{Array(3) => true, Array(3) => false}

//4

function hasDuplicate(arr){
    return new Set(arr).size !== arr.length
}

//5
function isVowel(char){
    return 'aeiou'.includes(char);
}