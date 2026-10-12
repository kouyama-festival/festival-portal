import {useEffect} from 'react'; export default function useDocumentTitle(title){useEffect(()=>{document.title=`${title} | C.A.C`},[title])}
