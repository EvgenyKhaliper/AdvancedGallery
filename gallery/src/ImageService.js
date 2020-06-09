async function getImages() {
    try {
        const response = await fetch('http://localhost:3001/');
        const searchTermData = await response.json();

        const searchTerm = searchTermData.term;
        const key = "16958619-be0bd9033af0b0f10d1aa30f1";
        const perPage = 9;

        const pixabayResponse = await fetch(`https://pixabay.com/api/?key=${key}&q=${searchTerm}&per_page=${perPage}`);
        const imagesJson = await pixabayResponse.json();
        const imagesOnly = imagesJson.hits.map((imagedata) => {
            return imagedata.largeImageURL;
        });
        return imagesOnly;
    } catch(e) {
        console.log("request failed",e);
    }
};

export default getImages;