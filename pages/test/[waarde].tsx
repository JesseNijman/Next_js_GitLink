import {useRouter} from 'next/router'

export default function Caps2(){
    // Dit zoekt naar wat er naast test/ staat en slaat het op in {waarde}
    const router = useRouter();
    const {waarde} = router.query;

    // Door tussen de h1 de {waarde} te plaatsen wordt het getal getoond op de pagina
    return <h1 style={{fontSize: "6rem"}}>{waarde}</h1>;
}