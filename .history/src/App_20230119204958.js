import { useState } from "react";
import app from './firebase'
import { getFirestore , collection, addDoc } from "firebase/firestore";

function App() {
  const db = getFirestore(app);
  let schema = {
    name : "" ,
    email : "" ,
    pno : "" ,
    pass :""
  }

  const [valuex , setValue] = useState(schema)

  function handleChange(event){
    const {name ,value} = event.target ;
    setValue ((prev) => ({...prev , [name] : value}))
  }


  async function sendData(){ 
    await addDoc(collection(db, "formData") , valuex).then(()=>{
      setValue(schema)
    }).catch((res)=>{
      console.log(res)
    })
  }


  return (
    <div className="App">
        <div >
          <div>
          <label>Name</label>
          <input onChange={handleChange} className=" border px-2 py-1" name="name" value={valuex.name} />
          </div>
          <div>
          <label>email</label>
          <input onChange={handleChange} className=" border px-2 py-1" name="email" value={valuex.email} />
          </div>
          <div>
          <label>Phone no</label>
          <input onChange={handleChange} className=" border px-2 py-1" name="pno" value={valuex.pno} />
          </div>
          <div>
          <label>Password</label>
          <input onChange={handleChange} className=" border px-2 py-1" name="pass" value={valuex.pass} />
          </div>
          <button onClick={sendData} className=" bg-indigo-600 text-white">Send Data</button>






        </div>
    </div>
  );
}

export default App;


{/* <form action="results.html" method="GET" enctype="multipart/form-data">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />
  </div>
  <div>
    <label for="age">Age</label>
    <input type="number" name="age" id="age" min="1" max="200" step="1" />
  </div>
  <div>
    <label for="date">Birthdate</label>
    <input type="date" name="date" id="date" min="2019-06-10" />
  </div>
  <div>
    Favorite Food
    <div>
      <label for="banana">Banana</label>
      <input type="checkbox" name="banana" id="banana" />
    </div>
    <div>
      <label for="apple">Apple</label>
      <input type="checkbox" name="apple" id="apple" />
    </div>
  </div>
  <div>
    Gender
    <div>
      <label for="male">Male</label>
      <input type="radio" name="gender" id="male" value="male" />
    </div>
    <div>
      <label for="female">Female</label>
      <input type="radio" name="gender" id="female" value="female" />
    </div>
  </div>
  <div>
    <label for="eyeColor">Eye Color</label>
    <select name="eyeColor" id="eyeColor" multiple>
      <option value="Green">Green</option>
      <option label="Red" value="Red"></option>
    </select>
  </div>
  <div>
    <label for="bio">Bio</label>
    <textarea id="bio" name="bio"></textarea>
  </div>
  <input type="hidden" name="hidden" value="hi" />
  <div>
    <label for="file">File</label>
    <input id="file" type="file" name="file" />
  </div>
  <div>
    <label for="phone">Phone</label>
    <input type="tel" name="phone" id="phone" />
  </div>
  <div>
    <label for="url">URL</label>
    <input type="url" name="url" id="url" />
  </div>
  <div>
    <label for="color">Color</label>
    <input type="color" name="color" id="color" />
  </div>
  <div>
    <label>
      Password
      <input type="password" name="password" required />
    </label>
  </div>
  <button type="reset">Reset</button>
  <button type="submit">Submit</button> */}