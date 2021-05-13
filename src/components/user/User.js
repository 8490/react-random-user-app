import { useEffect, useState, useMemo } from "react";

import man from "../../assets/man.svg"
import growman from "../../assets/growing-up-man.svg"
import woman from "../../assets/woman.svg"
import growwoman from "../../assets/growing-up-woman.svg"
import mail from "../../assets/mail.svg"
import map from "../../assets/map.svg"
import password from "../../assets/padlock.svg"
import phone from "../../assets/phone.svg"

import './User.css';


import axios from "axios";

// {gender: "female", name: {…}, location: {…}, email: "hedwig.edler@example.com", login: {…}, …}
// cell: "0171-1705268"
// dob: {date: "1974-03-29T08:23:59.944Z", age: 47}
// email: "hedwig.edler@example.com"
// gender: "female"
// id: {name: "", value: null}
// location: {street: {…}, city: "Buxtehude", state: "Thüringen", country: "Germany", postcode: 28685, …}
// login: {uuid: "620fea2f-3687-4dc1-a846-7e8ada7b3103", username: "greenladybug904", password: "criminal", salt: "yGE1YgjH", md5: "de747d1a600f59045200418d1f937303", …}
// name: {title: "Miss", first: "Hedwig", last: "Edler"}
// nat: "DE"
// phone: "0647-2002024"
// picture: {large: "https://randomuser.me/api/portraits/women/78.jpg", medium: "https://randomuser.me/api/portraits/med/women/78.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg"}
// registered: {date: "2013-12-16T00:44:30.432Z", age: 8}
// __proto__: Object

const User = () => {

  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const [option, setOption] = useState();
  const [desc, setDesc] = useState("");

  useEffect(() => {

    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res?.data?.results[0]));
  }, [user]);

  const newUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res?.data?.results[0]));
  }, [];


  
//   const newUser = useMemo(() => studentsList.filter(student => {
//     return student.name.toLowerCase().includes(search.toLowerCase())
//   }),[search, studentsList])

//   const add = useCallback(() => {
//     setStudentsList([...studentsList, {id: studentsList.length + 1, name: "Edward CW"}])
//   },[studentsList])



    return (
        <div>
            {/* <img src={user.picture.large} className="user-img" alt="logo" /> */}
            <div>
                <p>My {text} is</p>
                <p>{option} </p>

            </div>
            <div>
                <img onClick={() => {setText("name"); setOption(user?.name?.title + " " + user?.name?.first + " " + user?.name?.last); } } src={man} className="options" alt="logo" />
                <img onClick={() => {setText("e-mail"); setOption(user.email);}} src={mail} className="options" alt="logo" />
                <img onClick={() => {setText("age"); setOption(user.dob.age); }} src={growman} className="options" alt="logo" />
                <img onClick={() => {setText("country"); setOption(user.location.country);} }src={map} className="options" alt="logo" />
                <img onClick={() => {setText("phone"); setOption(user.phone);} }src={phone} className="options" alt="logo" />
                <img onClick={() => {setText("password"); setOption(user.login.password);} }src={password} className="options" alt="logo" />
            </div>
            <div>
                <button onClick={() => newUser()} >NEW USER</button>
                <button>ADD USER</button>
            </div>

            
        </div>
    )
}

export default User
