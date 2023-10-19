import "./../css/card.css";

export default function Card({ id, title, icon, tag }) {
  return (
    <div className="card">
      <span className="card-data">
        <div className="cardHeader">
          <span>{id}</span>
          <span>img</span>
        </div>
        <div className="cardContent">{title}</div>
        <div className="card-bottom">
          <span>ic</span>
          <div className="feature">
            <span>🔘</span>
          <span >{tag}</span>
          </div>
        </div>
      </span>
    </div>
  );
}
