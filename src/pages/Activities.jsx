import PageHead from '../components/common/PageHead'; import SubNav from '../components/common/SubNav'; import Thumb from '../components/common/Thumb';
const items=[
{name:'Programing',text:'ゲームやシステムの制作',image:'/images/activities/programing.webp'},
{name:'CG',text:'Blender, Mayaなどを使った3Dモデルの制作',image:'/images/activities/cg.webp'},
{name:'Graphic',text:'イラスト、アニメーションなどのデザインに関わるものの制作',image:'/images/activities/graphic.webp'},
{name:'Music',text:'BGM, 効果音やボカロなどの音楽、音源を制作',image:'/images/activities/music.webp'},
{name:'Video',text:'MVなどの映像作品の制作',image:'/images/activities/video.webp'},
{name:'Scenario',text:'小説やノベルゲームのシナリオの制作',image:'/images/activities/scenario.webp'}
];
export default function Activities(){return <><PageHead title="活動内容" description="C.A.Cの活動内容を紹介します。"/><div className="container"><SubNav/><div className="activity-grid">{items.map(x=><article key={x.name}><Thumb src={x.image}/><h3>{x.name}</h3><p>{x.text}</p></article>)}</div></div></>}
