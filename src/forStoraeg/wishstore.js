const getWishSttorage = () => {
    const storageWishdData = localStorage.getItem('Already-Wish-Data');
    if (storageWishdData) {
        return JSON.parse(storageWishdData);
    } return [];
}

const saveWISHdata = id => {
    const storageWishdDatas = getWishSttorage();
    const exist = storageWishdDatas.find(WishId => WishId === id);
    if (!exist) {
        storageWishdDatas.push(id);
        localStorage.setItem('Already-Wish-Data', JSON.stringify(storageWishdDatas))
    }
}

// export {getWishSttorage,saveWISHdata}
export { getWishSttorage, saveWISHdata }