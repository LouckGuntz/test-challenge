const dna = {
    canonical(dnaString){
        str=dnaString.toString();
        str = str.split('');
        console.log(str);
        const result = [];
       
        str.forEach((item)=>{
            //pushes only unique element
            // console.log(item.toUpperCase());
            if(!result.includes(item) && (item == item.toUpperCase())){
                result.push(item);
            }

        })
        return result.toString();
    }

 }
 
//  console.log(dna.canonical('CTAGGgGcCccA'));
 
 module.exports = dna;