import {recordGameLinkClick} from '../../firebase/gameLinkClicks';
// 通常クリックに加えて中クリック（auxclick の button 1）も記録する。右クリックメニューから開いた場合はブラウザの仕様上検知できない。
export default function GameLinks({game}){if(!game.links?.length)return null;return <div className="game-links">{game.links.map(l=>{const record=()=>{recordGameLinkClick({gameId:game.id,gameTitle:game.title,linkLabel:l.label,url:l.url})};return <a key={l.label} className="btn" href={l.url} target="_blank" rel="noopener noreferrer" onClick={record} onAuxClick={e=>{if(e.button===1)record()}}>{l.label} ↗</a>})}</div>}
