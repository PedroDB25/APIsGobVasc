function Carta({ nombre, descripcion, img }) {

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{(descripcion.lenght < 150 ? descripcion.lenght : (descripcion.substring(0, 150) + "..."))}</p>
                    <a href="#" className="btn btn-primary">Mira implementación</a>
                </div>
            </div>
        </>
    )
}

export default Carta