import React, { Component } from 'react';

class AddTask extends Component {
  static defaultProps = {
    categories: ['Task One', 'Task Two', 'Task three']
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value = "category">{category}</option>
    });
    return (
      <div>
        <h3>Add Task</h3>
        <form>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
