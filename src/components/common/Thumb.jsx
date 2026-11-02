const withBase=src=>src&&src.startsWith('/')?import.meta.env.BASE_URL+src.slice(1):src;
export default function Thumb({src,alt=''}){return <div className="thumb"><img src={withBase(src||'/images/placeholder.svg')} alt={alt}/></div>}
