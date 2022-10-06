// Find total Number of bits required to represent a number in binary.

function countBits(n)
{
    var count = 0;
    while (n != 0)
    {
        count++;
        n >>= 1;
    }
      
    return count;
}
  

var i = 55;
console.log(countBits(i));
  