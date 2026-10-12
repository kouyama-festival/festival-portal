import {Link} from 'react-router-dom';
export default function LinkCard({to,title,text,cta='詳しく見る'}){return <Link className="link-card" to={to}><div><h3>{title}</h3><p>{text}</p></div><span>{cta} →</span></Link>}
