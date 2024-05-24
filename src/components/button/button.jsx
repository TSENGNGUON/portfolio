export default function Button({content,style,align}){
    return(
        <div className="frame" style={style}>
            <a href="#" style={style}>{content}</a>
            <div className="btn_color" style={align}></div>
        </div>
    )
}