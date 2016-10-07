import React from 'react';
import {
  Text,
  ListView
 } from 'react-native';

export class TaskList extends React.Component{
  constructor(props, context){
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }

  renderRow(todo){
    return(
      <Text>{todo.task}</Text>
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  };
};
