import './style.scss';
import React, {useEffect, useState} from 'react';
import Todo from './Components/Todo';
import DoneTodo from './Components/DoneTodo';
import AddIcon from './Components/AddIcon';
import GithubLogo from './Components/GithubLogo';
import ArrowForward from './Components/ArrowForward';

function App() {

    const [ todos, setTodos ] = useState( JSON.parse( localStorage.getItem('simpletodo-app-todos') ) || [] );
    const [ doneTodos, setDoneTodos ] = useState( JSON.parse( localStorage.getItem('simpletodo-app-done-todos') ) || [] );
    const [ newTodoName, setNewTodoName ] = useState( '' );

    useEffect( () => {
        const updateLocalStorageData = () => {
            localStorage.setItem('simpletodo-app-todos', JSON.stringify( todos ) );
            localStorage.setItem('simpletodo-app-done-todos', JSON.stringify( doneTodos ) );
        }
        updateLocalStorageData();
    }, [todos, doneTodos] )


    const handleAddTodo = () => {

        if( !( newTodoName.length > 0 ) ) return;
        if( todos.includes(newTodoName) ) return;

        const copyOfTodos = [...todos];
        const newTodosList = [newTodoName, ...copyOfTodos]; 
        setTodos( () => newTodosList );
        setNewTodoName( '' );
    }

    const removeTodo = ( val ) => {
        if( !val ) return;
        setTodos( () => [...todos].filter( todo => todo !== val ) );
    }
    
    const removeDoneTodo = ( val ) => {
        if( !val ) return;
        setDoneTodos( () => [...doneTodos].filter( todo => todo !== val ) );
    }

    const addToDone = ( val ) => {
        if( !val ) return;
        removeTodo( val );
        setDoneTodos( () => [...doneTodos, val] );
    }

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Simple To Do</h1>

                    <div className="add-todo">
                        <input placeholder="Learn Node JS"
                            role="button"
                            value={newTodoName}
                            type="text"
                            onChange={ (e)=>setNewTodoName( e.target.value ) }
                            onKeyPress={ e => ( e.key === 'Enter' && handleAddTodo( e.target.value ) ) }
                        >

                        </input>
                        <button onClick={ () => handleAddTodo() }><AddIcon /></button>
                    </div>


                    { todos?.map?.( todo => <Todo key={todo} todo={todo} removeTodo={removeTodo} addToDone={addToDone} /> )}
                    { doneTodos?.length > 0 && <h3 style={{paddingBottom: '1em', borderBottom: '1px solid #cecece', marginTop: '3em', marginBottom: '2em', maxWidth: '300px'}}>Done</h3> }
                    { doneTodos?.map?.( doneTodo => <DoneTodo key={doneTodo} doneTodo={doneTodo} removeDoneTodo={removeDoneTodo} /> )}

                </div>
                
                <div className="footer">
                    
                    <h3>This application uses the following:</h3>
                    <ul>
                        <li><ArrowForward />React</li>
                        <li><ArrowForward />SCSS</li>
                        <li><ArrowForward />window.localStorage</li>
                        
                    </ul>

                    <a className="git" href="">
                        <GithubLogo />
                        <span>
                            Github Repository
                        </span>
                    </a>
                </div>

            </div>
        </>
    );
}

export default App;
