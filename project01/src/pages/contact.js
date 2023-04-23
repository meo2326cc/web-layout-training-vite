//import  { useForm, useWatch } from "ReactHookForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer , Header } from "../App.js"


function Form () {
    return(<>
    <div className="container">
     <form> <div className="mb-3">
  <label htmlfor="exampleFormControlInput1" className="form-label">您的 Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" defaultValue="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">您的需求</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<button type="submit" class="btn btn-primary mb-3">送出</button>
</form>
</div>
    </>)

}

export default function Contact () {
    return(<>
    <Header/>
    <div className="container mt-5">
            <h2>聯絡我們</h2>
        </div>
        <Form/>
    <Footer/>
    </>)
}