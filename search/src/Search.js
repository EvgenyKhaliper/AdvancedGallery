import React, { useState } from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
    const newTerm = searchTerm;
    setSearchTerm('');

    try {
        const response = await fetch('http://localhost:3001/', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: newTerm,
            })
        });
        const searchTermAtServer = await response.json();
        console.log(searchTermAtServer);
    } catch (e) {
        console.log("Request Faild",e)
    };

    return false;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <h1>What gallery would you like to search today?</h1>
            <label>
                Search:
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </label>
            <input type="submit" value="Search" />
        </form>
    </>
  );
}

export default Search;