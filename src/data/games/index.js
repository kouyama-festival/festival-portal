export const games=[
{id:'game-01',title:'Rhythm Adventure : Lost Notes',club:'チーム2',tags:['リズム','ブラウザ','2D','Unity'],image:'/festival-portal/images/games/team2.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/rhythm_adventure-lost_notes'}]},
{id:'game-02',title:'ぱくりーん',club:'チーム6',tags:['陣取り','ブラウザ','2D','Unity','パズル'],image:'/festival-portal/images/games/team6.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/pakurin'}]},
{id:'game-03',title:'Frog Up',club:'チーム1',tags:['アクション','Unity','2D','ブラウザ'],image:'/festival-portal/images/games/team1.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/frog_up'}]},
{id:'game-04',title:'ひっくりカエル',club:'チーム8',tags:['アクション','Unity','2D','ブラウザ'],image:'/festival-portal/images/games/team8.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/ksu-cac-koyama2026-team8'}]}
];
export const getGame=id=>games.find(g=>g.id===id);
