import Card from './card'
import Data from './data'

function NewD() {

const items = Data.map(item => {
        return(
            <>
            <p></p>
            <h1></h1>
            <Card
            {...item}
            ></Card>
            </>
            
        )
    })

    {items}
   

}

export default NewD;