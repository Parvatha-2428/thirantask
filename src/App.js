import { useState } from 'react';
import './App.css';
import firebase from "./firebase";

function App() {
  const [data, setData] = useState([]);
  const [apiUrlInput, setApiUrlInput] = useState('');

  const handleApiUrlChange = (event) => {
    setApiUrlInput(event.target.value);
  }

  const post = async () => {
    try {
      const response = await fetch(apiUrlInput);
      const jsonData = await response.json();
      setData(jsonData.result);
      console.log("jsonData", jsonData.result);

      let data = jsonData.result;
      const database = firebase.database();
      // Push data to Firebase
      data.map((x, y) => {
        database.ref("flower").push({
          "address": x.address,
          "amount": x.amount,
          "blockNumber": x.blockNumber,
          "timestamp": x.timestamp,
          "validatorIndex": x.validatorIndex,
          "withdrawalIndex": x.withdrawalIndex
        });
      });
      console.log("success");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Enter API to fetch Transaction History</h1>
        <input
          type="text"
          value={apiUrlInput}
          onChange={handleApiUrlChange}
          placeholder="Enter API URL"
          className="input-field"
        />
        <button onClick={post} className="fetch-button">
          Fetch data
        </button>
      </div>
      <div className="data-container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="Black">ADDRESS</th>
              <th className="Black">&nbsp;AMOUNT</th>
              <th className="black">&nbsp;BLOCKNUM</th>
              <th className="black">&nbsp;TIMESTAMP</th>
              <th className="black">VALIDINDEX</th>
              <th className="black">&nbsp;WITHDRAWINDEX</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="underline-cell">{item.address}</td>
                <td className="underline-cell">&nbsp;{item.amount}</td>
                <td className="underline-cell">&nbsp;{item.blockNumber}</td>
                <td className="underline-cell">&nbsp;{item.timestamp}</td>
                <td className="underline-cell">{item.validatorIndex}</td>
                <td className="underline-cell">{item.withdrawalIndex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
