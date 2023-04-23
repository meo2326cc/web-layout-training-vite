
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainStructure , Intro} from "../main.js"
import { Header , Footer} from "../App.js"
import f01 from "../img/f01.png";
import f02 from "../img/f02.png";




 

export default function Feature () {
    return(
        <>
        <Header/>
        <div className="container mt-5">
            <h2>特色</h2>
        </div>
        <MainStructure s=''>
            <Intro h='各式設備應有盡有' p='會議需要的設備這裡應有盡有，投影機？電腦？沒問題！' pic={f01}/>
        </MainStructure>
        <MainStructure s=' flex-row-reverse'>
            <Intro h='絕佳的環境' p='採光佳，整潔的空間與大面積的對外窗，讓您保持工作效率。' pic={f02}/>
        </MainStructure>
        <Footer/>
        </>
    )
}
