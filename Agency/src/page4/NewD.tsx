import Card from './card'
import Data from './data'

function NewD(){

    return (
        <div>
            {Data.map(item => (
               <Card 
               speciality_1={item.speciality_1}
               speciality_2={item.speciality_2}
               speciality_3={item.speciality_3}
               speciality_4={item.speciality_4}
               speciality_5={item.speciality_5}
               header={item.header}
               image={item.image}
               ></Card>
            ))}
        </div>
    )

    

}

export default NewD;