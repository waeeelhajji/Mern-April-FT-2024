
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {

  const [Heroes, setHeroes] = useState([])

  // useEffect

  useEffect(() => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        //! -- axios wraps the res in it's own .data key
        console.log(res.data)
        setHeroes(res.data) // we know from the prev console log that this IS an Array of Data
      }).catch((err) => {
        console.log("❌❌❌❌❌❌", err)
      })
  }, [])


  // Vanilla Javascript
  const FetchHeroes = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => {
        return response.json()
        //do something
      }).then((JsonResponse) => {
        console.log(JsonResponse)
        setHeroes(JsonResponse)
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Fetching data with Axios 
  const AxiosHeroes = () => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        //! -- axios wraps the res in it's own .data key
        console.log(res.data)
        setHeroes(res.data) // we know from the prev console log that this IS an Array of Data
      }).catch((err) => {
        console.log("❌❌❌❌❌❌", err)
      })
  }



  return (
    <div className="App">
      <h1>🦹‍♂️🦹‍♀️Supper Heroes API 🦸🦸</h1>
      {/* {JSON.stringify(Heroes)} */}
      <p></p>
      <button onClick={FetchHeroes}>Fetch SupperHeroes</button>
      <button onClick={AxiosHeroes}>Axios SupperHeroes</button>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            Heroes.map((hero) => {
              return (
                <tr>
                  <td><img src={hero.images.sm} alt={hero.name} width="80px" /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>

              )
            })
          }

        </tbody>
      </table>

    </div>
  );
}

export default App;
