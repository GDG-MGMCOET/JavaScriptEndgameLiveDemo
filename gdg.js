// Hello Everyone! krliya session attend i hope acha laga ho 
// this program demonstrate krta hai javascript ke basic concepts ko jo aaj sikhe aur DOM manipulation bhi jo 2nd session mei sikhoge 
//es file ki hrr line ko ache se dyan se padha ye comment tum logo ko guide krne ke liye hai 
// Let's get started!

// This Create starfield background - peche jo taree dikh rhe hai na white dots vo hai ye - DOM Manipulation 
// ka use kiya hai 2nd session mei sikh jaoge tab tk loop pe dyan do kaise different position pe stars create kiye hai

        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div'); // star name ki ek div create kr rha hai -DOM manipulation (yani jo html mei dikh rha hai usko js se control krna)
            star.className = 'star'; // star class css mei define hai
            star.style.left = Math.random() * 100 + '%'; // random position pe star bna rha hai , left yani screen ke left se kitne dur
            star.style.top = Math.random() * 100 + '%'; //same
            star.style.animationDelay = Math.random() * 3 + 's'; // star ko timtimane ke liye
            starsContainer.appendChild(star); //ek class mei dusre class apend krdi , starContainer ko jake dekhoge toh pore space liya hoga screen ka 
        }

        // Variables demonstration (let, const, var) - ye counter wale ke liye hai
        let counter = 0; 
        const initialValue = 0;

        // Function to demonstrate operators and increment
        function incrementCounter() {
            counter++; // Increment operator counter ki value ko ek se badha dega jab bhi ye incrementCounter function call hoga
            document.getElementById('counter').textContent = counter; // DOM
            document.getElementById('operatorOutput').textContent = //DOM
                `Used ++ operator: ${counter - 1} became ${counter}`; // esko kehre hai template literal yani static value ke bech mei dynamic value daal skte hai 
        }

        // Function using operators and conditionals // ye khud samjho
        function decrementCounter() {
            counter--; // Decrement operator
            document.getElementById('counter').textContent = counter;
            
            // Ternary operator and truthy/falsy - esko maan lo - ye nahi toh vo show krta hai jaise ki 
            const message = counter === 0 ?  // kya counter ki value zero hai
                'Counter is back to zero! 🎯' : // yes ? ye dekha de bhai mere 
                `Used -- operator: ${counter + 1} became ${counter}`; // nahi toh ye dekha de 
            
            document.getElementById('operatorOutput').textContent = message; //DOM - jo answer aae vo show krega
        }

        // Function demonstrating const and reset
        function resetCounter() { // reset button ke liye hai - ese samjho counter ki value ko vapis 0 krdega using varibale mentioned above
            counter = initialValue; // Using const value
            document.getElementById('counter').textContent = counter;
            document.getElementById('operatorOutput').textContent = 
                `Reset to const initialValue: ${initialValue}`;
        }

        // Arrow function (ES6) --- vaise toh agge sikhoge ye but esa samjho ek bag mei 1 2 3 4 5 pada 
        // hai usme se , map yani number nikalna aur us number ko 2 se multiply krke vapis bag mei
        const demonstrateArrow = () => { 
            const result = [1, 2, 3, 4, 5].map(num => num * 2);
            document.getElementById('functionOutput').textContent = 
                `Arrow Function: [1,2,3,4,5].map(num => num * 2) = [${result}] ✨`;
        };

        // Higher-order function demonstration //chat gpt pe jao ache se padho esko khud se padhna is important ok 
        function demonstrateHigherOrder() {
            // Function that returns a function (closure)
            function createMultiplier(multiplier) {
                return function(num) {
                    return num * multiplier;
                };
            }
            
            const double = createMultiplier(2);
            const triple = createMultiplier(3);
            
            document.getElementById('functionOutput').textContent = 
                `Higher-Order Function: double(5) = ${double(5)}, triple(5) = ${triple(5)} 🎯`;
        }

        // Callback function demonstration // ye thoda complicated ho skta hai esa samjho 
        function demonstrateCallback() { // ek ladka hai jo dusre ladke ko bula kr kaam krwata hai (ladka yani function)
            // Anonymous function as callback
            function processArray(arr, callback) {   //neche dekho ek function hai processArray jo do argument leta hai , ek number jo ki ek array hai yani ek bag of numbers and ek anonymous function jo ki callback hai
                return arr.map(callback); // ye double krke vapis dal dega array mei yani bag mei 
            }
            
            const numbers = [1, 2, 3, 4];
            const squared = processArray(numbers, function(n) { return n * n; });
            
            document.getElementById('functionOutput').textContent =  // DOM ye print krdega
                `Callback Function: [${numbers}] squared = [${squared}] 🚀`;
        }

        // Loop demonstration with all loop types -- loop tumhe session mei better samjh aya hoga esko ignore kr skte ho filhal baki samjh kr dekhoo khud se
        function runLoopDemo() {
            const output = document.getElementById('loopOutput');
            let loopResults = [];
            
            // for loop
            for (let i = 1; i <= 3; i++) {
                loopResults.push(`for loop: i=${i}`); // ye array mei dalta jaa rha hai "push" agge padhoge
            }
            
            // while loop
            let j = 1;
            while (j <= 2) {
                loopResults.push(`while loop: j=${j}`); // ha ye string literal hai bhul toh nahi gae na
                j++;
            }
            
            // for...of loop
            const arr = ['a', 'b'];
            for (const item of arr) {
                loopResults.push(`for...of: ${item}`);
            }
            
            // Animation effect  // website pe jake run kro , jo dhere dhere likhe ki amination hai na vo ye hai 
            let index = 0; // ek index naam ka varibale mann liya
            const interval = setInterval(() => {
                if (index < loopResults.length) {
                    output.textContent = loopResults.slice(0, index + 1).join(' | '); // ye jo hai na output mei dikhayega , slice krke aur join krke
                    index++;
                } else {
                    clearInterval(interval);
                    output.textContent += ' ✅ All loops completed!';
                }
            }, 500);  // har 500 milliseconds pe ye function chalega esko kehte hai setInterval - Node padhoge tab bhi kam aaega
        }

        // Typing effect // ye boht creative hai , esko sabse upper dekh paoge website mei , aur samjhne ki kosis kro
        const phrases = [
            'console.log("Welcome to JavaScript!");',
            'let learning = "awesome";',
            'const mastery = "coming soon";',
            'function magic() { return "🎉"; }'
        ];
        let phraseIndex = 0;
        let charIndex = 0;

        function typeEffect() {  //esko samjhne ki kosis kro bss na samjh aae toh bhi koi baat nahi - dubara samjhna after 2nd session ok 
            const element = document.getElementById('typingText'); // ye jaha text dikhana hai uska id hai
            const currentPhrase = phrases[phraseIndex]; // array mei se current phrase le rha hai
            
            if (charIndex < currentPhrase.length) { // agar charIndex currentPhrase ki length se chota hai toh
                element.textContent = currentPhrase.substring(0, charIndex + 1); // substring function use kiya hai jisme 0 se leke charIndex +1 tak ka text le rha hai
                charIndex++; // charIndex ko ek se badha rha hai
                setTimeout(typeEffect, 100); // ye function ko 100 milliseconds ke baad firse call krdega , isse typing effect aayega
            } else {
                setTimeout(() => { 
                    charIndex = 0;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typeEffect();
                }, 2000); // 2 seconds ke baad next phrase pe jayega
            }
        }

        // Start typing effect
        typeEffect(); // ye hai function call , function khud se nahi chalega , dhaka dena pdta hai

        // Dynamic console demonstration // ye neche wala hai , jo ek ek krke hrr 3 sec pe nya show karega 
        setTimeout(() => {
            const outputs = [
                'Welcome to JavaScript! 🎉',
                'Variables: let, const, var 💾',
                'Functions are powerful! ⚡',
                'Loops make magic happen! 🔁'
            ];
            let outputIndex = 0;
            
            setInterval(() => {
                document.getElementById('liveOutput').textContent = 
                    outputs[outputIndex % outputs.length];
                outputIndex++;
            }, 3000);
        }, 1000);

        // typeof demonstration on page load // ye console mei show hoga
        console.log('=== JavaScript Types Demo ===');
        console.log('typeof 42:', typeof 42);
        console.log('typeof "hello":', typeof "hello");
        console.log('typeof true:', typeof true);
        console.log('typeof undefined:', typeof undefined);
        console.log('This website demonstrates all JS fundamentals! 🚀');