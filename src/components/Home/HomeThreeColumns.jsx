import { db } from '../../firebase.js'
import { doc, getDoc } from "firebase/firestore";
const HomeThreeColumns = () => {

    const getData = async () => {
        const docRef = doc(db, "forms", "SF");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    return (
        <div className="container container__threeColumns">
            <div className="container__columns">
                <div className="box__column">
                    <p className="title">10</p>
                    <p className="subtitle">ODDANYCH WORKÓW</p>
                    <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="box__column">
                    <p className="title">5</p>
                    <p className="subtitle">WSPARTYCH ORGANIZACJI</p>
                    <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
                <div className="box__column">
                    <p className="title">7</p>
                    <p className="subtitle">ZORGANIZOWANY ZBIÓREK</p>
                    <p className="text"> Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.</p>
                </div>
            </div>
        </div>
    )
}
export default HomeThreeColumns;