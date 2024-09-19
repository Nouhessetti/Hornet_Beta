import Pdfrander from "./Pdfrander/Pdfrander"
import './Kata.css'
import Pdfilter from "./Pdffilter/Pdffilter"
export default function Kata (){
    return(
     <div className="kata_container">
        <Pdfilter />
        <Pdfrander />
     </div>
    )
}