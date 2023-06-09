export function dataURItoBlob(dataURI) {
    // let binary = atob(dataURI.split(',')[1]);
    let binary = Buffer.from(dataURI.split(',')[1]).toString()
    let array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}
