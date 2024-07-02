import './Selctions.css'
import SelctionItem from '../SelectionItem/SelectionItem'
import HTMLIMG from '../../assets/images/icon-html.svg'
import CSSIMG from '../../assets/images/icon-css.svg'
import JsIMG from '../../assets/images/icon-js.svg'
import AccIMG from '../../assets/images/icon-accessibility.svg'
function Selections(){
    return(
<div id='SelectionDiv'>

      <SelctionItem Lang = "HTML" image = {HTMLIMG} color="rgb(236, 224, 224)"></SelctionItem>
      <SelctionItem Lang = "CSS" image = {CSSIMG} color="rgb(214, 223, 214)"></SelctionItem>
      <SelctionItem Lang = "JavaScript" image = {JsIMG} color="rgb(206, 210, 213)"></SelctionItem>
      <SelctionItem Lang = "Accessability" image = {AccIMG} color="rgb(227, 216, 226)"></SelctionItem>
    
</div>
    )
}
export default Selections