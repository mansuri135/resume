function Tabs({ filterCategory, tabsData }) {

    

    return (
        <>

            <div className="text-center my-4">
                {
                    tabsData.map((category, index) => {
                        return (
                            <button type="button" className="filterButton mx-2 text-capitalize" onClick={() => filterCategory(category)} key={index}>{category}</button>
                        )
                    })
                }


            </div>
        </>
    )
}

export default Tabs;
