import { ReactNode } from "react";
import './card.css'


function Card(props: { speciality_1: ReactNode, speciality_2: ReactNode, speciality_3: ReactNode, speciality_4: ReactNode, speciality_5: ReactNode, header: ReactNode }) {

  return (
    <section id="card">
      <div id="right">
        <div ></div>
        <h1 className="head">{props.header}</h1>
        <ul id="listings">
          {props.speciality_1 && <li>{props.speciality_1}</li>}
          {props.speciality_2 && <li>{props.speciality_2}</li>}
          {props.speciality_3 && <li>{props.speciality_3}</li>}
          {props.speciality_4 && <li>{props.speciality_4}</li>}
          {props.speciality_5 && <li>{props.speciality_5}</li>}
        </ul>
      </div>
      <div id="left">
        <img src=""></img>
      </div>
    </section>
  )
}

export default Card;