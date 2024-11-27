import { createStore, createLogger } from "vuex";
import newlywedsModule from "./modules/newlywedsModule";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {  
        newlywedsModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})