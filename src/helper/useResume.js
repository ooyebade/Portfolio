import { useEffect } from 'react';

function useResume() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resumeLink = 'https://drive.google.com/file/d/1GKTHIH9vQBKKG2gSfR8qmeLHUAXq_YXR/preview';
    
    useEffect(() => {
    fetch(proxyUrl + resumeLink)
    .then(response => response.blob())
    .then(blob => {
    const objectUrl = URL.createObjectURL(blob);
    window.open(objectUrl);
    })
    .catch(error => console.log(error));
    }, []);
}

    