import { useEffect, useState } from "react";
import "./App.css";

function App() {
    //Any needed hooks
    //TODO
    const [result, setResult] = useState("");
    const [image, setImage] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [pictureURL, setPictureURL] = useState("");

    const [animalNameSearch, setAnimalNameSearch] = useState("");

    //Functions for API
    //upload
    async function upload(e) {
        e.preventDefault();

        // send to backend to upload
        console.log("UPLOAD");

        // format animalName and pictureURL to send to backend
        const data = {
            animalName: animalName,
            pictureURL: pictureURL,
        };

        console.log(data);
    }

    //search
    async function search(e) {
        e.preventDefault();
        // fetch from backend
        console.log("SEARCH");

        // format animalNameSearch to send to backend
        const data = {
            animalNameSearch: animalNameSearch,
        };
        console.log(data);
    }

    //clear
    async function clear(e) {
        e.preventDefault();
        // Clear the database
        console.log("CLEAR");
    }

    return (
        <div className="App">
            <h1>Animal Collection</h1>
            <h3>Add Animal</h3>
            <form onSubmit={upload}>
                <label htmlFor="name">Animal:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setAnimalName(e.target.value)}
                />

                <label htmlFor="picture">Picture URL:</label>
                <input
                    type="text"
                    name="picture"
                    id="picture"
                    onChange={(e) => setPictureURL(e.target.value)}
                />
                <button type="submit">Upload</button>
            </form>
            <h3>Search Animal</h3>
            <form onSubmit={search}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setAnimalNameSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {/* <p>{result}</p>
            <section>
                <img src={image} height={200} alt="Animal Image" />
            </section> */}
            <button onClick={clear}>Clear Animal Database</button>
        </div>
    );
}

export default App;
