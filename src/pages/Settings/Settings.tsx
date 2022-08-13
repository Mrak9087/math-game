import Categories from "../../components/Categories";
import Levels from "../../components/Levels";

import style from "./settings.module.css";

const ARR_DIFF = [
    {
        name:"low", 
        diff:4
    },
    {
        name:"normal", 
        diff:6
    },
    {
        name:"hard", 
        diff:8
    }
]

const ARR_CATEG = [
    {
        name:"dragons", 
    },
    {
        name:"halloween", 
    },
]

const Settings = () => {
    return (
        <div className={style.settings}>
            <Levels arrLevels={ARR_DIFF}/>
            <Categories arrCategories={ARR_CATEG}/>
        </div>
    )
}

export default Settings;