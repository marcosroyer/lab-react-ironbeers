

function Choice({image, title, texto}){

    return (
        <div className='Choice'>
            <img src={image} alt="all beers" />
            <h1 className='Choice'>{title}</h1>
            <p className='Choice'>{texto}</p>
        </div>
    )
}

export default Choice