import {db} from '../../firebase.js'
import {doc, getDoc} from "firebase/firestore";
import {collection, getDocs} from "firebase/firestore";
const HomeThreeColumns = () => {

    // const getData = async () => {
    //     const docRef = doc(db, "form", "2023-09-19T10:57:24.253Z");
    //
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    // }

   const getCollection = async () => {
       const querySnapshot = await getDocs(collection(db, "form"));
       querySnapshot.forEach((doc) => {
           const collectionData = doc.data();
           const collectionUser = doc.data().user;
           const collectionNumberBags = doc.data().numberBags;

           console.log(collectionData);
           console.log(collectionNumberBags);
           console.log(collectionUser);

       });
   }
console.log(getCollection());

return (
    <div className="container container__threeColumns">
        <div className="container__columns">
            <div className="box__column">
                <p className="title">10</p>
                <p className="subtitle">DONATED BAGS</p>
                <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className="box__column">
                <p className="title">5</p>
                <p className="subtitle">SUPPORTED ORGANIZATIONS</p>
                <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className="box__column">
                <p className="title">7</p>
                <p className="subtitle">ORGANIZED CHARITY COLLECTIONS</p>
                <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                    viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
        </div>
    </div>
)
}
export default HomeThreeColumns;