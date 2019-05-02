import React,{Component} from 'react'
import './main.css'

class App extends Component{

    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            location:''
        }
        this.Handling=this.Handling.bind(this)
    }

    Handling(event){
const {name,value,type,checked}=event.target
type==='checkbox'?this.setState({[name]:checked}):this.setState({[name]:value})

    }

    render(){
        return(<div className='style'>
            <form>
<input name='firstName' type='text' value={this.state.firstName} placeholder='First Name' onChange={this.Handling}/><br/>
<input name='lastName' type='text' value={this.state.lastName} placeholder='Last Name' onChange={this.Handling}/><br/>
<input name='age'  type='digit' value={this.state.age} placeholder='Age' onChange={this.Handling}/><br/>
<label>
Gender:<br/>
Male
<input name='gender' value='male' type='radio' checked={this.state.gender==='male'} onChange={this.Handling}/><br/>
Female
<input name='gender' value='female' type='radio' checked={this.state.gender==='female'} onChange={this.Handling}/><br/>

</label>

<select name='location' value={this.state.location} onChange={this.Handling}>
    <option value=''>Select Your Destination</option>
    <option value='goa'>GOA</option>
    <option value='vaishnav devi'>Vaishnav Devi</option>
    <option value='nainitaal'>Nainitaal</option>
</select>
            </form>
            <h1>User Details:</h1><br/>
            <p>Name:{this.state.firstName} {this.state.lastName}</p><br/>
            <p>Age:{this.state.age}</p><br/>
            <p>Gender:{this.state.gender}</p><br/>
            <p>Destination:{this.state.location}</p><br/>
        </div>)
    }



}

export default App 