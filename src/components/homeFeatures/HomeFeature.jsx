export default function Homefeature({text,icon,title}) {

    return (
        <div className="feature-item">
            <img src={icon} alt='icon' className="feature-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}