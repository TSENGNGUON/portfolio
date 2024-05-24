import './card.css'

export default function Card({zIndex,zIndexFront,margin,title,number,content}){
    return(
        <div className='main_card' style={margin}>
            <div className='card_content' style={zIndexFront}>
                <div className='header_card'>
                    <div className='no'>
                        <h1>{number}</h1>
                    </div>
                </div>
                <div className='mid_card'>
                    <pre className='title'>{title}</pre>
                    <p>{content}</p>
                </div>
                <div className='footer_card'>
                    <a href="#">Lean More</a>
                </div>
            </div>

            <div className='bg_card' style={zIndex}></div>
        </div>
    )
}