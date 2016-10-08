import React from 'react';
import {
  ListView,
  StyleSheet
 } from 'react-native';

import { TaskRow }  from './TaskRow'

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',        
  },
});

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
      <TaskRow todo={todo} />
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.container}
      />
    );
  };
};
