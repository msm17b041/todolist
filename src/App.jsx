import React, { useState } from 'react';
import TodoList from "./TodoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';


const App = () => {
    const [inputList, setInputList] = useState("");
    const [itemList, setItemList] = useState([])
    const eventList = () => {

        setItemList((oldItems) => {
            return [...oldItems, inputList]

        });
        setInputList("");
    };


    const itemEvents = (event) => {
        setInputList(event.target.value);

    };
    const deleteItem = (id) => {

        setItemList((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <>
            <div id="main-div">
                <div id="centre_div">
                    <div className="header">
                        <h1 id="h11">TodoList</h1>
                    </div>
                    <br />
                    <input type="text" placeholder="Add a item" onChange={itemEvents} value={inputList}></input>
                    <button id="bt" className="btn btn-success" onClick={eventList}>+</button>
                    <br />

                    <ol>
                        {itemList.map((value, index) => {
                            return (
                                <TodoList
                                    text={value}
                                    id={index}
                                    key={index}
                                    onSelect={deleteItem}



                                />);
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};
export default App;