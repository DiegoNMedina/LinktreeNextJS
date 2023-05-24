import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styleImage = {
    borderRadius: '50%',
    border: '5px solid #fff',
    boxShadow: '0 0 0 5px #fff',
    objectFit: 'cover',
}

const styleContentHeader = {
    display: 'flex',
    alignItems: 'center',
}

const styleHeader = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    maxWidth: '700px',
}

const styleH1 = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: '0',
}

const pContent = {
    fontSize: '1.2rem',
    margin: '10px 0px 30px 0px',
    textAlign: 'left',
}

const styleUser = {
    fontSize: '0.9rem',
    margin: '-20px 0',
    color: '#999',
}
 
export default function Header({name, title, image, description, user}) {
    return (
        <div className='row' style={styleHeader}>
            <div style={styleContentHeader}>
                <Image src={image} alt={name} width={100} height={100} style={styleImage} />
                <div>
                    <h1 style={styleH1}>{name}</h1>
                    <p>{title} </p>
                    <p style={styleUser}>{user}</p>
                </div>
            </div>
            <div>
                <p style={pContent}>{description}</p>
            </div>
            <hr />
        </div>
    )
}
