import './Main.css'



function Main (){
    return(
    <div style={{marginRight:"auto", marginLeft:"auto", marginTop:"10%", width:"50%", textAlign:"center" }}>
        <a href='/News' style={{textDecoration:'none'}}>
            <div className="main-page-item">
                <p className="main-page-item__description">Новости</p>
            </div>
        </a>
        <a href='/InfoCenter' style={{textDecoration:'none'}}>
            <div className="main-page-item">
                <p className="main-page-item__description">Инфо Центр</p>
            </div>
        </a>
        <a href='/Notifications' style={{textDecoration:'none'}}>
            <div className="main-page-item">
                <p className="main-page-item__description">Уведомления</p>
            </div>
        </a>
        <a href='/FAQ' style={{textDecoration:'none'}}>
            <div className="main-page-item">
                <p className="main-page-item__description">FAQ</p>
            </div>
        </a>
        <a href='/Voting' style={{textDecoration:'none'}}>
            <div className="main-page-item">
                <p className="main-page-item__description">Опросы</p>
            </div>
        </a>
    </div>
    )
}
export default Main