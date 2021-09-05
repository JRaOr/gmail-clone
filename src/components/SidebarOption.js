import '../styles/SidebarOption.css'
function SidebarOption({ Icon , title , number , selected}) {
    return (
        <div className={`sidebar-option ${selected && "sidebar--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
