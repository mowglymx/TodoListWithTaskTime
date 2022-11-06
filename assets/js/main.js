
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

        /// DEFINE TASK PRIORITIES ////////////////////////////////////////////

            const priorityCheck = () => {
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
            }

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


/// SET TASK PRIORITY /////////////////////////////////////////////////////////////////////////
    function setTaskPriority() {

        tasksingleOne = document.querySelectorAll('.task-single  .item-priority > input[type="radio"]')

        

        for (let i = 0; i < tasksingleOne.length; i++) {

            tasksingleOne[i].onclick = function( event ) {
                
                console.log('clicking radio button', this)

                let radioItemValue = event.target.value;

                let itemPriorityWrapper = document.querySelector('.task-single .item-priority');
                let itemPriority = document.querySelector('.task-single .item-priority');
                itemPriority.closest('.task-single');

                this.closest('.task-single').className = 'task-single card mb-3';
                this.closest('.task-single').classList.add('selected');
                this.closest('.task-single').classList.add(radioItemValue);

                setColour = "task-single card mb-3 selected"
                this.closest('.task-single').className = setColour
                localStorage.setItem("background", setColour);
                
            }

            // Store Priority Set
            if (localStorage.getItem("background") != null) {
                getColour = localStorage.background;
                document.querySelector('.task-single').className = getColour;
            }

        }
        
    }





/// ASYNC PROCESS: UPDATE RADIO BUTTONS GROUP ON EACH TASK ///////////////////////////////////////
    function taskSingleID() {
        
        let singleTaskGet = document.querySelectorAll('.task-single');

        console.log('Total number of tasks:', singleTaskGet.length)

        singleTaskGet.forEach(function (singleTaskGet, index) {

            setTimeout( function onTimer(){

                singleTaskGet.setAttribute('id', 'task-single-'+index)

                setTaskPriority();

            },500)

        });
        
    }


/// ADD TASKS TO LOCAL STORAGE ////////////////////////////////////////////
    if( typeof window === 'object' ){ 

        /// DOM IS LOADED: DOMContentLoaded
        window.addEventListener('DOMContentLoaded', () => {
            

            let addTask = document.querySelector('#form-add-task');

            addTask.addEventListener('submit', ( event ) => {
                
                /// Prevent the form to reload on click submit
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
                                <div class="col-md-12 task-single-name">
                                    <div class="input-group">
                                        <input class="form-control item-add-input" type="text" value="${localStorage[i]}">
                                        <span class="input-group-text task-single-delete"><i class="fa-solid fa-trash-can"></i> Delete</span>
                                    </div>
                                    <div class="item-priority mt-4">
                                        <input type="radio" id="radio-low-priority-${[i]}" class="btn-check btn-success" name="priority-${[i]}" autocomplete="off" value="0">
                                        <label class="btn btn-sm btn-success" for="radio-low-priority-${[i]}">Low Priority</label>
                                        
                                        <input type="radio" id="radio-medium-priority-${[i]}" class="btn-check btn-warning" name="priority-${[i]}" autocomplete="off" value="50">
                                        <label class="btn btn-sm btn-warning" for="radio-medium-priority-${[i]}">Medium Priority</label>

                                        <input type="radio" id="radio-high-priority-${[i]}" class="btn-check btn-danger" name="priority-${[i]}" autocomplete="off" value="100">
                                        <label class="btn btn-sm btn-danger" for="radio-high-priority-${[i]}">High Priority</label>
                                    </div>
                                </div>
                            </div><!-- /row -->
                        </div><!-- /card-body -->
                    `
                    taskList.append(taskSingle);
                    taskSingleID();
                    deleteTask();
                }

            }
            

            /// DELETE TASK
            function deleteTask() {
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
            }

        })
    }

  
    

    if( typeof window === 'object'){

        window.addEventListener('DOMContentLoaded', () => {
    
            let getTaskName = document.querySelector('.item-add-input').value;
            console.log(getTaskName)
            let taskNameToString = getTaskName.toString()

            const options = {
                
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Accept: 'application/json',
                    'X-RapidAPI-Key': '35c63d6ea2msha05f90ff47e9c5bp1ba794jsn258349b87bb8',
                    'X-RapidAPI-Host': 'ekman-emotion-analysis.p.rapidapi.com'
                },
                body: `[{"id":"1","language":"en","text":"${taskNameToString}"}]`
            };
            
            fetch('https://ekman-emotion-analysis.p.rapidapi.com/ekman-emotion', options)
                .then(response => response.json())
                .then(response => console.log('task name emotion is: ', response[0].predictions[0].prediction))
                .catch(err => console.error(err));

                console.log(options)
        })
    }