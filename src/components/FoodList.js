
function FoodList(props) {
    console.log("FOODLIST PROPS",props)
    const {joanne} = props
    const totalCal = joanne.reduce((acc, elem)=>{
        return acc + (elem.quantity * elem.calories)
    }, 0)


    return (
        <div>
            <h1>LIST OF TODAY'S FOOD</h1>
            {
                joanne.map((elem)=>{
                    return (
                        <div>
                            {elem.name} x {elem.quantity} = {elem.quantity * elem.calories} Cal.
                        </div>
                    )
                })
            }
            <p>TOTAL FOR TODAY = {Math.round(totalCal)} Calories</p>
        </div>
    )
}

export default FoodList
