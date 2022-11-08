
if( typeof window === 'object' ){

    /// DOM IS LOADED: DOMContentLoaded
	window.addEventListener('DOMContentLoaded', function(){

		console.log('EL DOM SE CARGO')

        /// USER FORM ////////////////////////////////////////////

            /// Seleccionamos el formulario
            let formulario = document.querySelector('#user-data-form')
            
            /// Declare the Name
            let nameReady = document.querySelector('#name-ready')

            if (localStorage.getItem('username') != null) {
                formulario.style.display = 'none'
                nameReady.style.display = 'block'

                
                let infoNombre = document.querySelector('#infoNombre')
                let storageName = localStorage.getItem('username')
                
                infoNombre.innerHTML = `${storageName}`
                

            } else {
                /// Hide the Name
                formulario.style.display = 'block'
                nameReady.style.display = 'none'
            }
        
            /// Hide Name input when name is declared
            let editName = document.querySelector('#edit-name')

            editName.addEventListener('click', (e) =>{
                formulario.style.display = 'block'
                nameReady.style.display = 'none'
            })

            /// ERROR INPUT
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

            /// VALIDATE NAME INPUT
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

            /// SEND EVENT
            formulario.addEventListener('submit', function(e){

                e.preventDefault()
                /// SAVE INPUT DATA
                let nombre = document.querySelector('#nombre').value

                if( nombre ){

                        let infoNombre = document.querySelector('#infoNombre')

                        infoNombre.innerHTML = `${nombre}`
                        nameReady.style.display = 'block'
                        formulario.style.display = 'none'

                        localStorage.setItem('username', `${nombre}`);
                        
                } else {
                    alert('Debe llenar los campos')
                }
                
            })



        /// DEFINE TASK PRIORITIES ///////////////////////////////////////////////////////////////

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


/// MOOD PICKER //////////////////////////////////////////////////////////////////////////////////

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


/// SET TASK PRIORITY ////////////////////////////////////////////////////////////////////////////
    function setTaskPriority() {

        tasksingleOne = document.querySelectorAll('.task-single  .item-priority > input[type="radio"]')

        for (let i = 0; i < tasksingleOne.length; i++) {

            tasksingleOne[i].onclick = function( event ) {
                
                console.log('clicking radio button', this)

                let radioItemValue = event.target.value;

                let itemPriority = document.querySelector('.task-single .item-priority');
                itemPriority.closest('.task-single');

                this.closest('.task-single').className = 'task-single card mb-3';
                this.closest('.task-single').classList.add('selected');
                this.closest('.task-single').classList.add(radioItemValue);

                setColour = 'task-single card mb-3 selected'
                this.closest('.task-single').className = setColour
                localStorage.setItem('background', setColour);

                //this.checked = true;
            }

            // Store Priority Set
            if (localStorage.getItem('background') != null) {
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

                

            },500)

        });
        
    }

    setTaskPriority();


/// ADD TASKS TO LOCAL STORAGE //////////////////////////////////////////////////////////////////
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
                    localStorage.setItem( 'TaskName', newTaskName);
                    location.reload();
                }else{
                    alert('You need to write the new task name')
                }
            });

            
            let taskList = document.querySelector('#task-list');

            /// GO THROUGH ALL THE LOCALSTORAGE IWTH A FOR IN
            for( let i in localStorage ){

                if( typeof localStorage[i] == 'string'){
                    let taskSingle = document.createElement('article');

                    taskSingle.classList.add('task-single', 'card', 'mb-3');
                    taskSingle.innerHTML = `
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 task-single-name">
                                    <div class="input-group">
                                        <input class="form-control item-add-input" type="text" value="${localStorage[i]}" disabled>
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
                    
                }

            }

            /// DELETE TASK FROM LOCALSTORAGE AND FROM THE DOM
            removeTaskButton = document.querySelectorAll('.task-single-delete')

            for (let i = 0; i < removeTaskButton.length; i++) {

                removeTaskButton[i].onclick = function( event ) {
                    
                    console.log('deleting task', this)

                    this.closest('.task-single').remove();
                    
                }

            }

        })
    }


/// FETCH, ASYNC AND AWAIT //////////////////////////////////////////////////////////////////////
    if( typeof window === 'object'){

        window.addEventListener('DOMContentLoaded', () => {

            const taskSingle = document.querySelectorAll('.task-single');

            taskSingle.forEach(function(el) {

                let getTaskName = el.querySelector('.item-add-input').value;
                let taskNameToString = getTaskName.toString()

                /// OPTIONS
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': '35c63d6ea2msha05f90ff47e9c5bp1ba794jsn258349b87bb8',
                        'X-RapidAPI-Host': 'emodex-emotions-analysis.p.rapidapi.com'
                    },
                    body: `{"sentence":"${taskNameToString}"}`
                };
                
                /// DEFINE VARIABLE TO STORE FETCH DATA
                let dataGlobal;
    
                /// FETCH URL & GET DATA
                const getData = async () => {
                    const response = await fetch('https://emodex-emotions-analysis.p.rapidapi.com/rapidapi/emotions', options)
                    const data = await response.json();
                    dataGlobal = data;
                    return data;
                };
                
                /// ASYNC & AWAIT, THEN PASS DATA TO VARIABLE
                async function showData() {
                    await getData();
                    
                    let dataArray = dataGlobal.sentence
                    const dataArrayValues = Object.values(dataArray);
                    const dataArrayKeys = Object.keys(dataArray);
                    const dataArrayValuesSplice = dataArrayValues.splice(-1);
                    const dataArrayValueText = dataArrayValuesSplice.reverse()
                    const dataArrayValuesMax = Math.max(...dataArrayValues)
    
                    const indexOfHighestValue = dataArrayValues.indexOf(dataArrayValuesMax);
                    const wordOfHighestValue = Object.keys(dataArray)[indexOfHighestValue];
    
                    const tasks = await document.querySelectorAll('.task-single');
                    await tasks.forEach(async (el, i) => {
                        tasks[i].classList.add(wordOfHighestValue);
                        console.log('tasks',tasks[i])
                        
                    });

                    console.log('initial data', dataArray)
                    console.log('data global text', dataArrayValueText);
                    console.log('data global', dataArrayValues);
                    console.log('highest number', dataArrayValuesMax)
                    console.log('index of highest number', indexOfHighestValue);
                    console.log('word', wordOfHighestValue)
                    
                    return
                }


                showData()
                
            });

            

        })
    }