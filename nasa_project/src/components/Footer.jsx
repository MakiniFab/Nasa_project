export default function Footer(props) {
    const { handleToggleModal, data } = props

    return (
        <footer>
            <div className="footer-container"></div>
            <div className="footer-title" >
                <h1>Nasa API Project</h1>
                <h2>{data?.title}</h2>
            </div>
            <button className="footer-button" onClick={handleToggleModal}>
                info
            </button>
        </footer>
    )
}