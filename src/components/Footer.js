
const styleFooter = {
    maxWidth: '700px',
}

const getYear = () => new Date().getFullYear()

export default function Footer({description, icon}) {
    return (
        <div style={styleFooter}>
            <hr />  
            <p>{icon }{ getYear() }{ description}</p>
        </div>
    )
}
