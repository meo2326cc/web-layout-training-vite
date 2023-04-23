import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap';
import "./main.css"
import hero1 from "./img/hero1.jpg";
import hero2 from "./img/hero2.jpg";
import hero3 from "./img/hero3.jpg";
import main1 from "./img/main1.png";
import main2 from "./img/main2.png";
import p01 from "./img/p01.png";
import p02 from "./img/p02.jpg";
import p03 from "./img/p03.jpg";



 function Hero(){
    return(<>
    <div className="title "><h2>讓您快樂聚會的好地方</h2> <p> 會議、工作坊、腦力激盪...讓您舒適執行生產力的出租辦公空間</p> </div>

<div className='position-relative'>
<div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100 heroHeight picFit" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero2} className="d-block w-100 heroHeight picFit" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={hero3} className="d-block w-100 heroHeight picFit" alt="..."/>
    </div>
  </div>
</div>
</div>

</>)
}

const text = [{h:'小團隊辦公的最佳解決方案',p:'在尋找可租賃的辦公空間嗎，或是聚會辦活的動臨時需要場地嗎，沒關係，交給快樂空間，我們提供完整的設備與多樣化的會議室，讓您選擇最合適的方案。'},
              {h:'舒適新穎的環境',p:'採光好，氣氛佳，加上全新的辦公桌椅，讓您做事開會更有效率！'},
            {h:'現在馬上預約',p:'我們有多種方案讓您選擇'}]

export function Intro (props) { return (<><div className="col-md-6">
                    <img src={props.pic} className='picFit mainPic rounded-3' alt=""/>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div>                    
                    <h3>{props.h}</h3>
                    <p>
                    {props.p}
                    </p>
                    </div>
                    </div>
        </> ) }



 export function Plain () {
    return(<>
            <div className="col-md-4">
                <div className="card" >
                    <img src={p01} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">4人討論室（400元/小時）</h4>
                            <p className="card-text">小間會議室提供簡單討論需求，並且價格經濟實惠</p>
                            <a href="..." className="btn btn-primary">立即預約</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" >
                    <img src={p02} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">10人會議室（800元/小時）</h4>
                            <p className="card-text">中型會議室，多人適用，並附設桌機與投影機</p>
                            <a href="..." className="btn btn-primary">立即預約</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" >
                    <img src={p03} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">100人演講廳（3000元/小時）</h4>
                            <p className="card-text">舉辦大型活動適用，若有外燴需求也可聯絡我們（費用另計）</p>
                            <a href="..." className="btn btn-primary">立即預約</a>
                    </div>
                </div>
            
    </div>

    </>)
}

function Board (props) {
    return(<>
        <div className="col-12 rounded-3 board py-5">
            <h3 className=' text-center'>{props.h}</h3>
            <p className='text-center'>{props.p}</p>
                <Link to="/plain"><button type='button' className='btn btn-primary mx-auto d-block'>立即預約</button>
                </Link>
        </div>
    </>)
}

export function MainStructure (props) {
    return <section>
        <div className="container">
            <div className={"row py-5" + props.s}>
                {props.children}
            </div>
        </div>
    </section>
}


export function Content () {
    return(<>
    <Hero/>
    <MainStructure s=" "><Intro h={text[0].h} p={text[0].p} pic={main1}/></MainStructure>
    <MainStructure s=" flex-row-reverse"><Intro h={text[1].h} p={text[1].p} pic={main2}/></MainStructure>
    <MainStructure s=" "><Board h={text[2].h} p={text[2].p}/></MainStructure>
    </>)
}