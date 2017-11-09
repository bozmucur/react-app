import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {
  render() {
    let taskItems;
    if(this.props.tasks){
      taskItems = this.props.tasks.map(project => {
        //console.log(project);
        return(
          <TaskItem key={project.title}project={project}/>
        );
      });
    }
    return (
      <div className="Tasks">
      {taskItems}
      </div>
    );
  }
}

export default Tasks;
