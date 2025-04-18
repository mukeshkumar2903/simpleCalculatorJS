let result;
        let text1 = document.querySelector("#text1");
        let text2 = document.querySelector("#text2");
        let operator = document.querySelector("#operator");
        let para = document.querySelector("p");
        operator.addEventListener("change", () => {
            // e.preventDefault()
            switch (operator.value) {
                case "+": {
                    result = Number(text1.value) + Number(text2.value);
                    para.innerHTML = result;
                } break;
                case "-": {
                    result = Number(text1.value) - Number(text2.value);
                    para.innerHTML = result;
                } break;
                case "*": {
                    result = Number(text1.value) * Number(text2.value);
                    para.innerHTML = result;
                } break;
                case "/": {
                    result = Number(text1.value) / Number(text2.value);
                    para.innerHTML = result;
                } break;
                case "%": {
                    result = Number(text1.value) % Number(text2.value);
                    para.innerHTML = result;
                } break;
                // default: {
                //     result=("Fill the right number");
                //     para.innerHTML=result;

                // }
            }
        })