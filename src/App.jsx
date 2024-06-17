import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./Button/ProfilePicture";
import ColorPicker from "./ColorPicker";

import MyComponent from "./MyComponent";
import UpdaterFunction from "./UpdaterFunction";
import ToDoList from "./ToDoList";

function App() {

  const drinks = [{id: 1, name:"milk", calories: "haha"}, 
                  {id: 2, name:"chocholate", calories: 25}, 
                  {id: 3, name:"coffee", calories: 35}, 
                  {id: 4, name:"boba", calories: 365}];

  const vegetables = [{id: 5, name:"potatoes", calories: 26}, 
                      {id: 6, name:"celery", calories: 52}, 
                      {id: 7, name:"corn", calories: 171}, 
                      {id: 8, name:"carrots", calories: 43}];

  return(
    <>
      <Header/>

      <ToDoList/>
      <br></br>
      <UpdaterFunction/>

      <ColorPicker/>

      <MyComponent/>

      <Button/>
      <UserGreeting isLoggedIn={true} username="Nzro"/>

      {drinks.length > 2 ? <List items={drinks} category="drinks"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/> : null}

      <ProfilePicture />

      <Card/>
      <Card/>
      <Food/>
      <Student name="Luffy" age={30} isStudent={true}/>
      <Student name="Zoro" age={25} isStudent={false}/>
      <Student name="Sanji" age={15} isStudent={true}/>
      <Student /> 
      <Footer/>
    </>
  );

}

export default App
