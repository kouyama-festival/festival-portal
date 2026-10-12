export const formatDate=d=>new Intl.DateTimeFormat('ja-JP',{dateStyle:'medium'}).format(new Date(d));
