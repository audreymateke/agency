
interface CardProps {
    speciality_1: string;
  }
  

function Card(props : CardProps){

   console.log(props.speciality_1)
   return(
    <>
   <div>{props.speciality_1}</div>
   </>
   )
}

export default Card;