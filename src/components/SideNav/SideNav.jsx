import "./SideNav.scss";
const SideNav = (props) => {

    const { searchTerm, handleInput, handleOnChange} = props;
   
    return(
        <div className="side-selections">
            <form className="search-box">
                <input type="text" placeholder="Search here" value={searchTerm} onInput={handleInput} className="search-box__input" />
            </form>
            <div>
            <div>
                High Alcohol (ABV value greater than 6%) <input type="checkbox" onChange={handleOnChange}></input>
            </div>
            <div>
                Classic Range <input type="checkbox"></input>
            </div>
            <div>
                High Acidity (pH lower than 4) <input type="checkbox"></input>
            </div>
        </div>
        </div>    
    )
}

export default SideNav;