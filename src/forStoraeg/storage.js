const getreadSttorage = () => {
 const storageRreadData = localStorage.getItem('Already-Read-Data');
 if(storageRreadData){
     return JSON.parse(storageRreadData);
 }  return [] ;
}

const savereaddata = id => {
 const storageRreadDatas = getreadSttorage ();
 const exist = storageRreadDatas.find(readId => readId === id);
 if(!exist){
    storageRreadDatas.push(id);
    localStorage.setItem('Already-Read-Data',JSON.stringify(storageRreadDatas))
 }
}

// export {getreadSttorage,savereaddata}
export {getreadSttorage,savereaddata}