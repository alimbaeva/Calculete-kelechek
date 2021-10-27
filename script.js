
// window.addEventListener('load', function () {

//     const number = this.document.querySelectorAll('[data-number]');
//     const operetion = this.document.querySelectorAll('[data-operation]');
//     const equals = this.document.querySelector('[data-equals]');
//     const deletes = this.document.querySelector('[data-delete]');
//     const clear = this.document.querySelector('[data-all-clear]');
//     const previous = this.document.querySelector('[data-previous-operand]');
//     const current = this.document.querySelector('[data-current-operand]');
//     const point = this.document.querySelector('[data-point]');
//     var number1 = '';
//     var boolingN = false;
//     var boolingEnd = false;
//     var number2 = '';

//     number.forEach((num) => {
//         num.addEventListener('click', getNumber)
//     })

//     operetion.forEach((oper) => {
//         oper.addEventListener('click', addOperetion)
//     })

//     equals.addEventListener('click', equalsBtn)

//     deletes.addEventListener('click', del)

//     clear.addEventListener('click', ac)
//     // point.addEventListener('click', poi)

//     function getNumber(x) {
//         if (boolingEnd) {
//             number1 = '';
//             number2 = '';
//             boolingEnd = false;
//         }
//         let num = x.target.innerText;
//         if (boolingN === false) {
//             // number1 = current.innerText += num;
//             number1 += num
//             current.innerText = number1;
//             console.log(number1)
//         } else if (boolingN === true) {
//             // number2 = current.innerText += num;
//             number2 += num
//             current.innerText = number2;
//             console.log(number2)
//             console.log(current)
//         }


//     }

//     // function poi(x) {
//     //     let poin = x.target.innerText;
//     //     let str = current.innerText;
//     //     if (str.includes('.') === false) {
//     //         current.innerText += poin;
//     //     }
//     //     console.log(str.includes('.'));
//     // }

//     function addOperetion(x) {
//         op = x.target.innerText;
//         console.log(op)
//         // current.innerText = op;
//         console.log(number1)
//         boolingN = true;
//         console.log(op)
//     }


//     function equalsBtn(x) {
//         let eque = x.target.innerText;
//         if (op === '-') {
//             previous.innerText = +(number1) - +(number2);
//             boolingEnd = true;
//             boolingN = false;
//         } else if (op === '+') {
//             previous.innerText = +(number1) + +(number2);
//             boolingEnd = true;
//             boolingN = false;
//             boolingN = false;
//         } else if (op === '*') {
//             previous.innerText = +(number1) * +(number2);
//             boolingEnd = true;
//             boolingN = false;
//         } else if (op === '/') {
//             previous.innerText = +(number1) / +(number2);
//             boolingEnd = true;
//             boolingN = false;
//         }
//         console.log(previous);
//     }
//     function ac() {
//         number1 = '';
//         boolingN = false;
//         boolingEnd = false;
//         number2 = '';
//         previous.innerText = '';
//         current.innerText = '';
//     }

//     function del() {
//         if (boolingN === false) {
//             // const str2 = str.substring(0, str.length - 1);
//             number1 = number1.substring(0, number1.length - 1);
//             current.innerText = number1;
//         } else if (boolingN === true) {
//             number2 = number2.substring(0, number2.length - 1);
//             current.innerText = number2;
//         }
//     }

//     console.log(current)
//     console.log(boolingN)
// })


window.addEventListener('load', function () {

    const numbers = this.document.querySelectorAll('[data-number]');
    const operetions = this.document.querySelectorAll('[data-operation]');
    const equalsBtn = this.document.querySelector('[data-equals]');
    const deletesBtn = this.document.querySelector('[data-delete]');
    const clearBtn = this.document.querySelector('[data-all-clear]');
    const previousMemory = this.document.querySelector('[data-previous-operand]');
    const currentMemory = this.document.querySelector('[data-current-operand]');
    const pointBtn = this.document.querySelector('[data-point]');
    var CalculateMenory = '';
    var BoolingNumber = false;
    var BoolingMemory = false;
    var Oper = '';


    numbers.forEach((numBtn) => {
        numBtn.addEventListener('click', funNumbers)
    });

    operetions.forEach((operBtn) => {
        operBtn.addEventListener('click', funOperetions)
    });

    equalsBtn.addEventListener('click', funEqualsBtn)

    pointBtn.addEventListener('click', funPointBtn)
    clearBtn.addEventListener('click', funClearBtn)
    deletesBtn.addEventListener('click', funDeletesBtn)

    function funNumbers(e) {
        let num = e.target.innerText;
        if (currentMemory.innerText != '0' || currentMemory.innerText != '0.') {
            if (BoolingNumber) {
                if (BoolingMemory === true) {
                    currentMemory.innerText = num;
                    BoolingNumber = false;
                } else {
                    CalculateMenory = currentMemory.innerText;
                    console.log(CalculateMenory);
                    currentMemory.innerText = num;
                    BoolingNumber = false;
                }
            } else if (BoolingNumber === false) {
                currentMemory.innerText += num;
                console.log(currentMemory);
            }
        } else {
            currentMemory.innerText = num;
        }
    }

    function funOperetions(e) {
        Oper = e.target.innerText;
        BoolingNumber = true;
    }

    function funEqualsBtn(e) {
        if (Oper === '+') {
            CalculateMenory = +(CalculateMenory) + +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '-') {
            CalculateMenory = +(CalculateMenory) - +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '*') {
            CalculateMenory = +(CalculateMenory) * +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        } else if (Oper === '/') {
            CalculateMenory = +(CalculateMenory) / +(currentMemory.innerText);
            console.log(CalculateMenory);
            previousMemory.innerText = CalculateMenory;
            console.log(previousMemory);
            BoolingMemory = true;
        }
    }

    function funPointBtn(e) {
        let point = e.target.innerText;
        if (currentMemory.innerText.includes('.') === false || currentMemory.innerText === '0') {
            currentMemory.innerText += point;
        }

    }

    function funClearBtn(e) {
        CalculateMenory = '';
        BoolingNumber = false;
        BoolingMemory = false;
        Oper = '';
        currentMemory.innerText = '';
        previousMemory.innerText = '';
    }

    function funDeletesBtn(e) {
        currentMemory.innerText = currentMemory.innerText.substring(0, currentMemory.innerText.length - 1);
    }
})
