import {Header , Footer} from "../App.js"
import {Plain , MainStructure} from "../main.js"

export default function P () {

    return(<>
    <Header/>
    <div className="container mt-5">
            <h2>方案選擇</h2>
        </div>
    <MainStructure s=" "><Plain/></MainStructure>
    <Footer/>
    </>

    )

}