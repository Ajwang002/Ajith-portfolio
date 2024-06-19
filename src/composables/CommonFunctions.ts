// ------------------- Imports ------------------- //
import router from '@/router/index'


// ------------------- Common Functions ------------------- //
const useNavigation = (path: string) =>{
    if(path && path.trim()?.length)
    {
        router.push(path)
    }
}


// ------------------- Export's ------------------- //
export{
    useNavigation
}