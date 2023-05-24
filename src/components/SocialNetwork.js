import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const styleSocialNetwork = {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 10px',
    gap: '10px',
    alignItems: 'start',
    justifyContent: 'start',
    maxWidth: '700px',
}

const styleLink = {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '700',
    fontSize: '1.2rem',
}


export default function SocialNetwork({image, name, link}) {
    return (
        <div className='social-network' style={styleSocialNetwork}>
            <div className='social-image'>
                <Image src={image} alt={name} width={50} height={50} />
            </div>
            <div className='social-name'>
                <Link href={link} target='_blank' style={styleLink}>
                    <p>{ name }</p>
                </Link>
            </div>
        </div>
    )
}
