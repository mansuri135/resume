import Tabs from "@/components/Portfolio/Tabs";
import Items from "@/components/Portfolio/Item";
import Data from "@/components/Portfolio/Data";
import { useState } from "react";

function Portfolio(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
   return(
    <section id="portfolio" className="bg-light">
        <div className="container">
        <p className="text-center mb-2 fadeInUp" ><span className="darkYellow text-dark px-2">Portfolio</span></p>
        <h2 className="text-h2 text-center mb-5 fadeInUp" >Some of my most recent projects</h2>
        <div className="row">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-10">
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
            <div className="col-sm-1">
                
            </div>
        </div>
        </div>
    </section>
   )
}

export default Portfolio