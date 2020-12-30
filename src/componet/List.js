import React from 'react';
import axios from 'axios';



export class List extends React.Component {
 constructor(){
     super()
     this.state ={
         data:[]
     }
 }

  componentDidMount() {
    axios.get('/home')
      .then(res => {
      this.setState({
          data:res.data
      })
      })
  }


  render() {
    const lists = this.state.data
    return (
      <ul>
       {lists.map(list =>
       <>
            <div key={list._id}>
            <p >{list.firstName}</p>
            <p>{list.lastName}</p>
            </div>
        </>
        )}
      </ul>
    )
  }
}

export default List
