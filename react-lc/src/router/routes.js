import Index from '../views/index/index'
import DiCan from '../views/index/dican/dican'
const routes=[
    {
        path:"/index",
        children:[
            {
                path:"/index/dican",
                conponent:DiCan
            },
            {
                from:"/index",
                to:"/index/dican"
            }
        ],
        conponent:Index
    },
    {
        from:"/",
        to:"/index"
    }
]
export default routes