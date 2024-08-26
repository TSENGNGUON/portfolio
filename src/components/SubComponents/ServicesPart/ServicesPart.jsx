import Card from '../../Card/Card'


export default function ServicesPart(){
    return(
        <div className='services'>
            <div className='header'>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolor? Porro cum id quasi fuga ipsam reprehenderit nihil tenetur enim iure? Officiis assumenda explicabo unde dolor. Facere nam laboriosam debitis.</p>
            </div>
            <div className='content'>
            <Card title={"Web Developer"} number={"1"} content={"Web developers can work for web design agencies, tech companies, e-commerce businesses, non-profits, and more. The role requires a mix of technical, creative, and problem-solving skills. Strong communication abilities are also important to work effectively with designers, project managers, and clients"} zIndex={{zIndex:1}} zIndexFront={{zIndex:3}} margin={{marginTop: 85}}/>
            <Card number={"2"} content={"Translating visual designs and wireframes into functional, responsive web pages using HTML, CSS, and JavaScri"} title={"FrontEnd"} zIndex={{zIndex:1}} zIndexFront={{zIndex:3}} margin={{marginTop:85}}/>
            </div>
        </div>
    )
}