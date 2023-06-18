// quetion-1

var a= "abcadeecfb"

            var b= new Set(a)
            b=[...b]
            let c= b.join('')
            console.log(c)


            // question-2

            function countAlphabets(str) {
                var alphabetMap = new Map();
                var charArray = str.split('');
                
               
                charArray.map(function(char) {
                
                  if (/[a-zA-Z]/.test(char)) {
                    
                    if (alphabetMap.has(char)) {
                      alphabetMap.set(char, alphabetMap.get(char) + 1);
                    }
                   
                    else {
                      alphabetMap.set(char, 1);
                    }
                  }
                });
                
                
                alphabetMap.forEach(function(value, key) {
                  console.log(key + '=' + value);
                });
              }
              
              var str = 'abcadeecfb';
              countAlphabets(str);