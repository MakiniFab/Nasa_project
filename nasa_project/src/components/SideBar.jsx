export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar-container">
            <div onClick={handleToggleModal} className="sidebar-contents"></div>
            <div className="sidebar-details" >
                <h2>{data?.title}</h2>
                <div className="sidebar-description]">
                    <p className="sidebar-description-title">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button className="sidebar-button" onClick={handleToggleModal}>
                    info
                </button>
            </div>
        </div>
    )
}