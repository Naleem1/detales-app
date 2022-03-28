
function Card(props) {

    console.log(props)
    
    return(
            <div className='card'>
                <div className='card_title'>
                <header>Mental Health Facts</header>

                <p>{props.title}</p>
                
                </div>

                 <div className = 'card_content'>

                    <div className = 'quote_container'>
                    <p className = 'quote_text'>{props.content}</p>
                    </div>

                <button onClick={props.getQuote}>Learn More</button>

                </div>
                

                

            </div>
        )
    }
    

    export default Card 





