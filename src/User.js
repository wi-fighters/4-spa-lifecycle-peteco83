import React from 'react'
import '../src/User.scss'

//tambien se puede poner props entre parentesis
export default function User({id,name,email}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    )
}
