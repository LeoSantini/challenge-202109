import "./index.css"

export function IdCard (props) {
    return (

        <div className="card">           

            <img src={props.picture} alt={props.alt}/>
            
            <div>

                <h3>
                    Full Name: {props.fullName}
                </h3>

                
                <h3>
                    Gender: {props.gender}
                </h3>

                <h3>
                    Birthdate: {props.birthday}
                </h3>

            </div>

        </div>
        
    )
};