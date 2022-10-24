/**********************************************************
01 SINTAXIS Y VARIABLES 
**********************************************************/

//console.log('SINTAXIS Y VARIABLES ------->');
    
    // let userName = prompt(`What's your name?`);
    // let userFavoriteColor = prompt(`What's your favorite color?`);

    // console.log(`User name: ${userName} & User favorite color: ${userFavoriteColor}`);




if( typeof window === 'object' ){

    // DOM IS LOADED: DOMContentLoaded
	window.addEventListener('DOMContentLoaded', function(){

		console.log('EL DOM SE CARGO')

        /// USER FORM ////////////////////////////////////////////

            // Seleccionamos el formulario
            let formulario = document.querySelector('#user-data-form')
            
            // Declare the Name
            let nameReady = document.querySelector('#name-ready')
            // Hide the Name
            nameReady.style.display = 'none'

            // Hide Name input when name is declared
            let editName = document.querySelector('#edit-name')

            editName.addEventListener('click', (e) =>{
                formulario.style.display = 'block'
                nameReady.style.display = 'none'
            })

            // Input de error
            let error_nombre = document.querySelector('#error_nombre')

            error_nombre.style.display='none'

            const checkName = ( val )=>{
                console.log(/[a-zA-z]+$/.test(val))
                console.log( val.length >= 1 )
                if( /[a-zA-z]+$/.test(val) && val.length >= 1  ){
                    return true;
                }
                return false;
            }

            // Validamos el campo nombre
            nombre.addEventListener('input', (e)=>{
                let validaNombre = checkName( e.target.value )
                console.log(e.target.value)
                if( validaNombre ){
                    error_nombre.style.display = "none";
                    error_nombre.innerHTML = `` 
                }else{
                    error_nombre.style.display = "block";
                    error_nombre.innerHTML = `Debe ingresar sólo letras`   
                }
            })

            // INICIO DEL ENVIO
            formulario.addEventListener('submit', function(e){

                e.preventDefault()
                // guardamos datos que ingresamos en los input
                let nombre = document.querySelector('#nombre').value

                if( nombre ){

                        let infoNombre = document.querySelector('#infoNombre')

                        infoNombre.innerHTML = `${nombre}`
                        nameReady.style.display = 'block'
                        formulario.style.display = 'none'

                } else {
                    alert('Debe llenar los campos')
                }
                
            })
            // CIERR DEL ENVIO DEL FORM







            



        /**********************************************************
        02 CONTROL DE FLUJOS 
        **********************************************************/

        // console.log('CONTROL DE FLUJOS ------->');

            // Test if user name is not empty, and length of the name
                /* if (userName === ""){
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
                } */


            // Detect if the string first letter begins with M
                /* let userNameFirstLetter = nombre.charAt(0);

                console.log(`${userNameFirstLetter}`);

                if ( userNameFirstLetter.toUpperCase() === 'M' ){
                    console.log('Your name starts with M')
                } */

            // Test year of Todos 
                let currentYear = 2022;

                if(currentYear <= 2021){
                    console.log('These todos are from the past!');
                }else{
                    console.log('These todos are from the ' + currentYear)
                }



        /**********************************************************
        03 CICLOS E ITERACIONES
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


        /// DEFINE TASK PRIORITIES ////////////////////////////////////////////

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
        04 FUNCIONES
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
        05 OBJETOS
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

        let body = document.querySelector('#body');


       



    })
}


 /**********************************************************
08 DOM
**********************************************************/

    /// MOOD PICKER ////////////////////////////////////////////

    function moodPick() {
        let moodPickValue = document.querySelector('#mood-select').value;
        
            if (body.classList !== "") {
                console.log(`Mood is ${moodPickValue}`)
                body.className = '';
                body.classList.add(moodPickValue)
            } else {
                body.classList.add(moodPickValue)
            }

            return moodPickValue
        
    }


    /// ADD TASKS ////////////////////////////////////////////

    if( typeof window === 'object' ){ 

        // INICIO DEL DOMContentLoaded
        window.addEventListener('DOMContentLoaded', () => {
    
            let addTask = document.querySelector('#form-add-task');
    
            addTask.addEventListener('submit', ( event ) => {
                
                // Prevenir que el formulario se refresque
                event.preventDefault();
    
                // Seleccionamos el ID del input peliculas
                let newTaskName = document.querySelector('#add-task').value;
        
                // Validamos si el input biene vacio
                if ( newTaskName.length >= 1 ) {
                    // Ingresamos el Titulo de la pelicula al LocalStorage
                    localStorage.setItem( newTaskName, newTaskName);
                    location.reload();
                }else{
                    alert('You need to write the new task name')
                }
            });
        
        
            let taskList = document.querySelector('#task-list');
    
            taskList.classList.add('list-group', 'list-group-flush');
    
            // Recorremos el LocalStorage con un for in
            for( let i in localStorage ){
                // console.log('Salida de localStorage--->', i)

                if( typeof localStorage[i] == 'string'){
                    let taskSingle = document.createElement('article');
                    let counter = 0;
                    uniqueTaskID = Date.now() + counter++;
                    taskSingle.classList.add('task-single' + 'task-single-' + uniqueTaskID);
                    taskSingle.innerHTML = `
                        <div class="item-priority">
                            <input type="radio" class="btn-check" name="priority-radio-group-${uniqueTaskID} radio-low-priority" autocomplete="off" value="0">
                            <label class="btn btn-secondary" for="radio-low-priority">Low Priority</label>
                            
                            <input type="radio" class="btn-check" name="priority-radio-group-${uniqueTaskID} radio-medium-priority" autocomplete="off" value="50">
                            <label class="btn btn-secondary" for="radio-medium-priority">Medium Priority</label>

                            <input type="radio" class="btn-check" name="priority-radio-group-${uniqueTaskID} radio-high-priority" autocomplete="off" value="100">
                            <label class="btn btn-secondary" for="radio-high-priority">High Priority</label>
                        </div>
                        <div class="task-single-name">
                            ${localStorage[i]} <i class="fa-solid fa-trash-can"></i>
                        </div>
                    `
                    taskList.append(taskSingle);
                }

            }
        
        
            let removeTask = document.querySelector('#formBorrarPeliculas');
        
            removeFormulario.addEventListener('submit', ( event ) => {
                
                // Seleccionamos el ID del input peliculas
                let tituloPelicula = document.querySelector('#removePelicula').value;
        
                // Validamos si el input biene vacio
                if ( tituloPelicula.length >= 1 ) {
                    // Ingresamos el Titulo de la pelicula al LocalStorage
                    localStorage.removeItem(tituloPelicula);
                    location.reload();
                }
            });
    

            // OBJETOS CON LOCAL STORAGE
            let usuario = {
                nombre: 'Alejandro Becerra',
                email: 'abcerraguz@gmail.com',
                web: 'http:www.abecerrafrontend.cl'
            }
    
            /* 
                Para guardar objetos en el local Storage, importante para guardar datos estos
                deben ser convertidos a un string si no el objeto quedaria como
                Indefinido. Para esto se utiliza la propiedad JSON.stringfy().
            */
    
            localStorage.setItem('usuario',  usuario );
    
        })
    }