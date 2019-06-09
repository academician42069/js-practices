class MyString {

    reverse(usrString) {
        let tempStrArray = Array.from(usrString);
        let temp = 0;
        let i = 0;
        let j = tempStrArray.length - 1;
        while (i < j){
            temp = tempStrArray[i];
            tempStrArray[i] = tempStrArray[j];
            tempStrArray[j] = temp;
            i++;
            j--;
        }
        return tempStrArray.join('');
    }

    ucFirst(usrString) {
        return usrString.replace(usrString.charAt(0), (usrString.charAt(0)).toUpperCase()); 
    }

    ucWords(usrString) {
        let tempStrArray = usrString.split(' ');
        for (let i = 0; i < tempStrArray.length; i++){
            tempStrArray[i] = this.ucFirst(tempStrArray[i]);
        }
        return (tempStrArray.join(' '));
    }

}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
