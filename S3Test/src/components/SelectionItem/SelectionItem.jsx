
function SelctionItem(prpos){
    return(
        <button className="Seclet">
            
            <div className="SelectionColor" style={{backgroundColor: prpos.color}}>
            <img className="LogoImg" src={prpos.image} />
            </div>
        
        <label >{prpos.Lang}</label>
        </button>
    )
}

export default SelctionItem