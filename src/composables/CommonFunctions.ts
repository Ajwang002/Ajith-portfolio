// ------------------- Imports ------------------- //
import router from '@/router/index'


// ------------------- Common Functions ------------------- //
const useNavigation = (path: string) =>{
    if(path)
    {
        router.push(path)
    }
}


// ------------------- Export's ------------------- //
export{
    useNavigation
}