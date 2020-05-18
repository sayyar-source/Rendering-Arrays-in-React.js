import React from 'react';
import ReactDOM from 'react-dom';


class  FetchUser extends React.Component{
 
  state=
  {
    loding:true,
    people:[],
  };

async componentDidMount(){
  const url="https://api.randomuser.me/?results=10";
  const response=await fetch(url);
  const data=await response.json();
  //this.setState({person:JSON.stringify(data)})
  this.setState({people:data.results,loding:false});

}

render()
{
if(this.state.loding)
{
return <div>loding...</div>
}
if(!this.state.people.length)
{
return <div>did not get person!</div>
}
return (

<div style={{color:'blue'}}>
  {this.state.people.map(person=>(
    <div key={person.login.uuid}>
    <img src={person.picture.large} alt={person.login.username}></img>
   <div>Title:{person.name.title}</div>
   <div>first:{person.name.first}</div>
   <div>last:{person.name.last}</div>
   <div>phone:{person.phone}</div>
   <div>email:{person.email}</div>
   </div>
  ))}
 


   
</div>
);
}

}

ReactDOM.render(

  <FetchUser />,

document.getElementById('root')
);