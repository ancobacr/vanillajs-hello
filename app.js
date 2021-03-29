window.onload= () => {    

    document.querySelector('.card-number').innerHTML = generateRandomNumber();
    document.querySelector('.top-suit').innerHTML =generateRandomSuit();
    document.querySelector('.bottom-suit').innerHTML =generateRandomSuit();
    
};

    let generateRandomNumber = () => {
        let numbers = ["A", "2","3","4","5","6","7","8","9","10", "J","Q","K"];
        let indexNumbers = Math.floor(Math.random() * numbers.length);
        return numbers[indexNumbers];
    }

    let generateRandomSuit = () => {
        let suit = ["♦", "♥", "♠", "♣"];
        let indexSuit = Math.floor(Math.random() * suit.length);
            if (indexSuit === 0 || indexSuit === 1 ) {
                document.querySelector(".card").classList.add("color-red");
                }
            else{
                document.querySelector(".card").classList.add("color-black");
                }
            return suit[indexSuit];
    }