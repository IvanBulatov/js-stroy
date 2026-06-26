let price1Node = document.querySelector(`#price1`);
let price2Node = document.querySelector(`#price2`);
let price3Node = document.querySelector(`#price3`);
let priceFinalNode = document.querySelector(`#priceFinal`);
let price1 = 50000;
let price2 = 100000;
let price3 = 8000;

price1Node.innerHTML = `${price1}₽`;
price2Node.innerHTML = `${price2}₽`;
price3Node.innerHTML = `${price3}₽`;

priceFinalNode.innerHTML = `${price1 + price2 + price3}₽`;


let promocodeContainerNode = document.querySelector(`#promocodeContainer`);
let promocodeNode = document.querySelector(`#promocode`);
let promocodeInputNode = document.querySelector(`#promocodeInput`);
let promocodeNameNode = document.querySelector(`#promocodeName`);
let invalidPromoNode = document.querySelector(`#invalidPromo`);
let promoBtnNode = document.querySelector(`#promoBtn`);


promoBtnNode.addEventListener(`click`, function() {
    //Мы хотим применять промокод независимо от регистра, поэтому нужно преобразовать пользовательский ввод в верхний регистр.

    if(promocodeInputNode.value.toUpperCase() == `ILOVEJS`) {
        promocodeContainerNode.classList.remove(`d-none`);
        promocodeNameNode.innerHTML = `ILOVEJS`;
        promocodeNode.innerHTML = `-100000₽`;
        priceFinalNode.innerHTML = `${price1 + price2 + price3 - 100000}₽`;
        invalidPromoNode.classList.remove(`d-block`)

    } else if(promocodeInputNode.value.toUpperCase() == `IHATEJS`) {
        promocodeContainerNode.classList.remove(`d-none`);
        promocodeNameNode.innerHTML = `IHATEJS`;
        promocodeNode.innerHTML = `А что ты хотел`;
        priceFinalNode.innerHTML = `${price1 + `` + price2 + `` + price3}₽`;
        invalidPromoNode.classList.remove(`d-block`)
    } else {
        //добавь в вёрстке этот блок под кнопку "Применить". Изначально он скрыт, нужно его показать.
        invalidPromoNode.classList.add(`d-block`)
    }
})