export const contests=[
{id:'contest-01',tags:['イラスト'],image:'/images/contest/illust-01.webp'},
{id:'contest-02',tags:['イラスト'],image:'/images/contest/illust-02.webp'},
{id:'contest-03',tags:['イラスト'],image:'/images/contest/illust-03.webp'},
{id:'contest-04',tags:['イラスト'],image:'/images/contest/illust-04.webp'},
{id:'contest-05',tags:['イラスト'],image:'/images/contest/illust-05.webp'},
{id:'contest-06',tags:['イラスト'],image:'/images/contest/illust-06.webp'},
{id:'contest-07',tags:['イラスト'],image:'/images/contest/illust-07.webp'},
{id:'contest-08',tags:['イラスト'],image:'/images/contest/illust-08.webp'},
{id:'contest-09',tags:['CG'],image:'/images/contest/cg-01.webp'},
{id:'contest-10',tags:['CG'],image:'/images/contest/cg-02.webp'},
{id:'contest-11',tags:['CG'],image:'/images/contest/cg-03.webp'}
];
export const getContest=id=>contests.find(c=>c.id===id);
