import WorkCard from './WorkCard';
export default function FilterGrid({items,type='game'}){return <div className="work-grid">{items.map(x=><WorkCard key={x.id} item={x} type={type}/>)}</div>}
