import db from '../db/firestore';

// export const fetchChats = async () => {

//     const querySnapshot = await getDocs(collection(db, "chats"));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// }



export const fetchChats = () =>

    db
    .collection("chats")
    .get()
    .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    )