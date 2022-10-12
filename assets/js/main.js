/**********************************************************
   SINTAXIS Y VARIABLES 
**********************************************************/

console.log('SINTAXIS Y VARIABLES ------->');
    
    let userName = prompt(`What's your name?`);
    let userFavoriteColor = prompt(`What's your favorite color?`);

    console.log(`User name: ${userName} & User favorite color: ${userFavoriteColor}`);

/**********************************************************
   CONTROL DE FLUJOS 
**********************************************************/

console.log('CONTROL DE FLUJOS ------->');

    // Test if user name is not empty, and length of the name
        if (userName === ""){
            alert("You need to give your name");
            // return false;
        }else if ( userName.length > 15 ){
            alert("Your name is too long, try a shorter one");
            // return false;
        }else if ( userName.length < 3 ){
            alert("Your name is too short, try a longer one");
            // return false;
        }else if ( !( /^[a-zA-Z]+$/.test(userName) ) ){
            alert("You only need to provide letters");
            // return false;
        }

    console.log(`New User: ${userName}`);

    // Detect if the string first letter begins with M
        let userNameFirstLetter = userName.charAt(0);

        console.log(`${userNameFirstLetter}`);

        if ( userNameFirstLetter.toUpperCase() === 'M' ){
            console.log('Your name starts with M')
        }

    // Test year of Todos 
        let currentYear = 2022;

        if(currentYear <= 2021){
            console.log('These todos are from the past!');
        }else{
            console.log('These todos are from the ' + currentYear)
        }


/**********************************************************
    CICLOS E ITERACIONES
**********************************************************/

console.log('CICLOS E ITERACIONES ------->');

    // Years since you started your My Todo
        let startYear = 2020;

        for(var e = startYear; e <= currentYear;  e++ ){
            console.log(`Years since ${startYear}: `+e);
            //debugger;
        }

        do{
            console.log(startYear);
            startYear--;
        }while(startYear > 2020)


    // Define the todos priority

        let priorityNumber = 50;
        let priorityPrint;

        switch(priorityNumber) {
            
            case 0:
            priorityPrint = 'Low Priority';
            break;
            
            case 50:
            priorityPrint = 'Medium Priority';	
            break;
                
            case 100:
            priorityPrint = 'High Priority';	
            break;

            default:
            priorityPrint = 'Your todo does not has priority set';
        }

        console.log(priorityPrint);

        
/**********************************************************
    FUNCIONES
**********************************************************/

console.log('FUNCIONES ------->');

    // Calculate time to complete a task
        var btn = document.querySelector(".btn");
        var sum = document.querySelector(".sum");
        var reset = document.querySelector(".reset");
        btn.onclick = convertTime;

        function getTotalMinutesEachTask() {
            const fromTime = document.querySelector('.fromTime').value;
            const toTime = document.querySelector('.toTime').value;

            const [fromHours, fromMinutes] = fromTime.split(':');
            const [toHours, toMinutes] = toTime.split(':');
            
            // Total minutes worked is calculated by getting the difference in hours x 60 and adding the difference in minutes.
            return (toHours - fromHours) * 60 + (toMinutes - fromMinutes);
        }

        function convertTime() {
            const totalMinutes = getTotalMinutesEachTask();
            if (totalMinutes < 0) {
                sum.innerHTML = "The To time should be later than From time"
                return;
            }

            sum.innerHTML = "You Worked " + minutesToHoursAndMinutes(totalMinutes)  + " hours";
            reset.style.opacity = 1;
        }

        function minutesToHoursAndMinutes(minutes) {
            const hours = Math.floor(minutes / 60);
            const mins = (minutes % 60);
            return (hours + '').padStart(2, '0') + ':' + (mins + '').padStart(2, '0')
        }

        reset.onclick = (e)=>sum.innerHTML = "00:00"


/**********************************************************
    OBJETOS
**********************************************************/

console.log('OBJETOS ------->');

function Task( name, priority ){

    this.name = name
    this.priority = priority

    // METODO
    this.showTask = function(){
        console.log(`Task Name: ${name} & Priority ${priority}`)
    }
}

    let task1 = new Task('Task X', 'Medium Priority')

    console.log(task1);
    task1.showTask();