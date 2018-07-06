import React from 'react'
//You can make separate styling for each component and import it here


export default function DoSomething (props) {
    return (
        <div>
            <div>
                <div onClick={props.thisIsAProp}>Do Something</div>
            </div>
        </div>
    )
}
//This function is stateless because no constructor was used.