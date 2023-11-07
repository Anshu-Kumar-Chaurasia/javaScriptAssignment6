// ASSIGNMENT-6:

// Q1.

const countCharacters = () =>
{
    let a="AbaDd";
    let count=" ";
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)>="A" && a.charAt(i)<="Z")
        {
            count+=" 1";
        }
    }
    console.log(count);
}
countCharacters();

// Q2.

const CountHead = () =>
{
    let a="prepbytes";
    let charcount={};
    let count="";
    for(let i=0;i<a.length;i++)
    {
        const char=a[i];
        if(charcount[char])
        {
            charcount[char]++;
        }
        else
        {
            charcount[char]=1;
        }
    }
    for(let char in charcount)
    {
        if(charcount[char]>1)
        {
            count+= char+charcount[char]+' ';
        }
    }
    return count;
}
console.log(CountHead());

// Q3.

const countVowel = (a) =>
{
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)=="a" || a.charAt(i)=="e" || a.charAt(i)=="i" || a.charAt(i)=="o" || a.charAt(i)=="u")
        {
            count++;
        }
    }
    return count;
}
console.log(countVowel("prepbytesa"));

// Q4.

const countvowel = (a) =>
{
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)=="a" || a.charAt(i)=="e" || a.charAt(i)=="i" || a.charAt(i)=="o" || a.charAt(i)=="u")
        {
            count++;
        }
    }
    return count;
}
console.log(countvowel("prepbytesa"));


// Q5.

const findlength = (a) =>
{
    return a.length;
}
console.log(findlength("CeDqe"));

// Q6.

const gameWinner = (a) =>
{
    let A=1;
    let D=1;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)=="A")
        {
            A++;
        }
        else
        {
            D++;
        }
    }
    if(A>D)
    {
        return "Aditya wins";
    }
    else if(A<D)
    {
        return "Danish wins";
    }
    else
    {
        return "Draw";
    }
}
console.log(gameWinner("ADDAAADDDAA"));

// Q7.

const joinString = (a,b) =>
{
    return a+b;
}
console.log(joinString("prepbytes","technologies"));

// Q8.

const palicheck = (a) =>
{
    let b=a.split('').reverse().join('');
    if(a==b)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(palicheck("naman"));

// Q9.

const reverseStirng = (a) =>
{
    return a.split('').reverse().join('');
}
console.log(reverseStirng("Hi my name is Anshu"));

// Q10.

const stringMatch = (a,b) =>
{
    if(a==b)
    {
        return "Yes";
    }
    else 
    {
        return "No";
    }
}
console.log(stringMatch("prep","bytes"));

// Q11.

const replace = (a) =>
{
    return a.replace('You', 'Prepbytes')
}
console.log(replace("Hi, I am You"));

// Q12.

const splitTheString = (a) =>
{
    return a.split('').toString();
}
console.log(splitTheString('Hello Bro'));

// Q13.

const countvocon = (a) =>
{
    let V=0;
    let C=0;
    for(let i=0;i<a.length;i++)
    {
        if(a.charAt(i)=="a" || a.charAt(i)=="e" || a.charAt(i)=="i" || a.charAt(i)=="o" || a.charAt(i)=="u")
        {
            V++;
        }
        else
        {
            C++;
        }
    }
    let b=[V,C]
    return b.toString();
}
console.log(countvocon("prepbytes"));