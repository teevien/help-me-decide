import React, { Component } from 'react';
import firebase from '../firebase';

const dbRef = firebase.database().ref('tasks');
console.log(dbRef);

class AddOption extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            tasks: []
        }
    };

    componentDidMount() {
        dbRef.on('value', (snapshot) => {
            // console.log(snapshot.val());
            const firebaseData = snapshot.val();
            if (firebaseData !== null) {
                const newTaskItems = Object.keys(firebaseData).map((key) => {
                    // console.log(key);
                    // console.log(firebaseData[key]);
                    return {
                        key: key,
                        data: firebaseData[key].task
                    }
                });
                // console.log(newTaskItems);
                this.setState({
                    tasks: newTaskItems
                })
            };
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let stateTasks = Array.from(this.state.tasks);
        let newTask = {
            task: this.state.input,
            complete: false
        }

        dbRef.push(newTask);
        // stateTasks.push(newTask);
        if (this.state.input !== null && this.state.input !== '') {
            this.setState({
                // tasks: stateTasks, *put in component did mount*
                input: ''
            });
        };
    };

    removeTask = e => {
        console.log(e);
        console.log(firebase.database().ref(`tasks`));
    //    const currentTasks = Array.from(this.state.tasks);
    //    console.log(currentTasks);
    //    const indexOfItemToRemove = currentTasks.indexOf('')
    //    console.log(indexOfItemToRemove);
        
    };

    render() { 

        const task = this.state.tasks.map((task, index) => {
            console.log(task);
            return (
                <div key={task.key}>
                    <p>{index + 1}. {task.data}</p>
                    <button onClick={this.removeTask}>Remove Task</button>
                </div>
            );
        });

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input 
                        type="text" 
                        placeholder="Add Task" 
                        onChange={this.handleChange} 
                        name="input" 
                        value={this.state.input}
                    />
                    <label></label>
                    <button>Add Task</button>
                </form>
                {task}
            </div>
        );
    };
};

export default AddOption;