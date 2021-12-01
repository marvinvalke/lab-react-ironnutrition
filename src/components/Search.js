

function Search(props) {
    console.log("The Props Search",props)
    return (
        <div>
             <input onChange={props.searchBtn} type="text" placeholder="Search for food"/>
        </div>
    )
}

export default Search
