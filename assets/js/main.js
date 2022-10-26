
if( typeof window === 'object' ){

    /// DOM IS LOADED: DOMContentLoaded
	window.addEventListener('DOMContentLoaded', function(){

		console.log('EL DOM SE CARGO')

        /// USER FORM ////////////////////////////////////////////

            /// Seleccionamos el formulario
            let formulario = document.querySelector('#user-data-form')
            
            /// Declare the Name
            let nameReady = document.querySelector('#name-ready')
            /// Hide the Name
            nameReady.style.display = 'none'

            /// Hide Name input when name is declared
            let editName = document.querySelector('#edit-name')

            editName.addEventListener('click', (e) =>{
                formulario.style.display = 'block'
                nameReady.style.display = 'none'
            })

            /// Input de error
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

            /// Validamos el campo nombre
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

            /// INICIO DEL ENVIO
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
            /// CIERR DEL ENVIO DEL FORM


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

    /// DOM IS LOADED: DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {

        let addTask = document.querySelector('#form-add-task');

        addTask.addEventListener('submit', ( event ) => {
            
            /// Prevent the form to reload
            event.preventDefault();

            let newTaskName = document.querySelector('#add-task').value;
    
            /// Validate if the input is empty
            if ( newTaskName.length >= 1 ) {
                /// Add the Task Name to LocalStorage
                localStorage.setItem( newTaskName, newTaskName);
                location.reload();
            }else{
                alert('You need to write the new task name')
            }
        });
    
        let taskList = document.querySelector('#task-list');

        /// Go through all the LocalStorage with a for in
        for( let i in localStorage ){
            let key = localStorage.key(i);

            if( typeof localStorage[i] == 'string'){
                let taskSingle = document.createElement('article');

                taskSingle.classList.add('task-single', 'card', 'mb-3');
                taskSingle.innerHTML = `
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-7 task-single-name">
                                <div class="input-group">
                                    <input class="form-control item-add-input" type="text" value="${localStorage[i]}">
                                    <span class="input-group-text task-single-delete"><i class="fa-solid fa-trash-can"></i> Delete</span>
                                </div>
                                <div class="item-priority mt-4">
                                    <input type="radio" id="radio-low-priority" class="btn-check btn-success" name="priority-radio-group" autocomplete="off" value="0">
                                    <label class="btn btn-sm btn-success" for="radio-low-priority">Low Priority</label>
                                    
                                    <input type="radio" id="radio-medium-priority" class="btn-check btn-warning" name="priority-radio-group" autocomplete="off" value="50">
                                    <label class="btn btn-sm btn-warning" for="radio-medium-priority">Medium Priority</label>

                                    <input type="radio" id="radio-high-priority" class="btn-check btn-danger" name="priority-radio-group" autocomplete="off" value="100">
                                    <label class="btn btn-sm btn-danger" for="radio-high-priority">High Priority</label>
                                </div>
                            </div>
                            <div class="col-md-5 item-timelapse">
                                <div class="card m-0 p-0">
                                    <div class="card-body m-0 p-2">
                                        <div class="row align-items-end">
                                            <div class="col-md-4">
                                                <label for="fromTime"><small>From:</small></label>
                                                <input class="form-control fromTime" type="time" name="fromTime" value="13:30">
                                            </div>
                                            <div class="col-md-4">
                                                <label for="toTime"><small>To:</small></label>
                                                <input class="form-control toTime" type="time" name="toTime" value="14:30">
                                            </div>
                                            <div class="col-md-4">
                                                <button class="btn btn-secondary item-get-time">Get Total Time</button>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="item-sum-time">00:00</div>
                                            </div>
                                            <div class="col-md-4">
                                                <button class="btn btn-sm btn-secondary item-reset-time">Reset</button>
                                            </div>
                                        </div><!-- /row -->
                                    </div>
                                </div><!-- /card -->
                            </div><!-- /col-md-6 -->
                        </div><!-- /row -->
                    </div><!-- /card-body -->
                `
                taskList.append(taskSingle);
            }

        }

        /// Delete Task
    
        let removeTask = document.querySelector('.task-single-delete');
    
        removeTask.addEventListener('click', ( event ) => {

            console.log('Delete a task is working!')
            
            /// Select the input with the name of task, inside the task-single div
            let newTaskName = document.querySelector('.task-single .item-add-input').value;
    
            /// Validate if the input is empty
            if ( newTaskName.length >= 1 ) {
                localStorage.removeItem(newTaskName);
                location.reload();
            }
        });

    })
}


/// ADD TASK TIME ////////////////////////////////////////////

    if( typeof window === 'object' ){ 

        /// DOM IS LOADED: DOMContentLoaded
        window.addEventListener('DOMContentLoaded', () => {

        /// Calculate time to complete a task                
            var sum = document.querySelector(".item-sum-time");
            var reset = document.querySelector(".item-reset-time");

            function getTotalMinutesEachTask() {
                let fromTime = document.querySelector('.fromTime').value;
                let toTime = document.querySelector('.toTime').value;

                let [fromHours, fromMinutes] = fromTime.split(':');
                let [toHours, toMinutes] = toTime.split(':');
                
                // Total minutes worked is calculated by getting the difference in hours x 60 and adding the difference in minutes.
                return (toHours - fromHours) * 60 + (toMinutes - fromMinutes);
            }

            function convertTime() {
                let totalMinutes = getTotalMinutesEachTask();

                if (totalMinutes < 0) {
                    sum.innerHTML = "The To time should be later than From time"
                    return;
                }

                sum.innerHTML = "You Worked " + minutesToHoursAndMinutes(totalMinutes) + " hours";
                reset.style.opacity = 1;
            }

            function minutesToHoursAndMinutes(minutes) {
                let hours = Math.floor(minutes / 60);
                let mins = (minutes % 60);
                return (hours + '').padStart(2, '0') + ':' + (mins + '').padStart(2, '0')
            }

            document.querySelectorAll('.item-get-time').forEach(getTimeButton => {
                getTimeButton.addEventListener('click', function (e) {
                    e.stopPropagation();

                    console.log('Get time button clicked')

                    convertTime();
                });
            });              


            
            reset.onclick = (e)=> sum.innerHTML = "00:00"
        })
    }