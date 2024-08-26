export default function Button({content,style,align,cv}){
    return(
        <div className="frame" style={style}>
            <a href={cv} style={style} download={cv}>{content}</a>
            <div className="btn_color" style={align}></div>
        </div>
    )
}