const yearOfBirth = +prompt('Enter your year of birth');

if (yearOfBirth !== null){
    const currentCity = prompt('What city do you live in?');
    
    if (currentCity !== null){
        const favouriteSport = prompt('What is your favourite sport?');

        if (favouriteSport !== null){
            let age = 2021 - yearOfBirth;

            let capitalOfCountry;
            switch (currentCity) {
            case 'Kiev':
                capitalOfCountry = 'You live in the capital of Ukraine';
                break;
            case 'Moscow':
                capitalOfCountry = 'You live in the capital of Russia';
                break;
            case 'Minsk':
                capitalOfCountry = 'You live in the capital of Belarus';
                break;
            default:
                capitalOfCountry = `You live in ${currentCity}`;
            }

            let sportsChampion;
            switch (favouriteSport) {
            case 'basketball':
                sportsChampion = 'Cool! You wanna be like Michael Jordan';
                break;
            case 'football':
                sportsChampion = 'Cool! You wanna be like Cristiano Ronaldo';
                break;
            case 'hockey':
                sportsChampion = 'Cool! You wanna be like Alexander Ovechkin';
                break;
            default:
                sportsChampion = `Cool! Great sport!`;
            }
            
            alert(`You are ${age} years old, ${capitalOfCountry}, ${sportsChampion}`);
        } else {
            alert('It is a pity that you did not want to enter your favorite sport');
        }
    } else {
        alert('It is a pity that you did not want to enter ​the city you live in');
    }
} else {
    alert('It is a pity that you did not want to enter your year of birth');
}