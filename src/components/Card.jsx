
function Card(props) {

    console.log(props)
    
    return(
            <div className='card'>
                <div className='card_title'>
                <header>Mental Health Facts</header>

                <p>{props.title}</p>
                
                </div>

                 <div className='card_content'>
                <p>{props.content}</p>

                <button onClick={props.getQuote}>Learn More</button>
                
                </div>

                

            </div>
        )
    }
    

    export default Card 





