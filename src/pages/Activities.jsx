import PageHead from '../components/common/PageHead'; import SubNav from '../components/common/SubNav';
const items=['企画会議','チーム開発','デバッグ・改善','展示準備','神山祭での作品展示','コンテスト発表'];
export default function Activities(){return <><PageHead title="活動風景" description="企画から展示まで、C.A.Cの活動を紹介します。"/><div className="container"><SubNav/><div className="activity-grid">{items.map((x,i)=><article key={x}><div className="activity-image"><span>PHOTO {String(i+1).padStart(2,'0')}</span></div><h3>{x}</h3><p>メンバーが協力しながら制作を進めています。アイデアを出し合い、試作と改善を繰り返します。</p></article>)}</div></div></>}
