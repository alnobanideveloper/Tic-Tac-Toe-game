const Header = ({showPlayer , playerNames , reset})=>{
        return (
            <header >
                <li>
                    <div className="player lobster-regular" style={{backgroundColor:showPlayer ? 'antiquewhite': 'yellow'}}>
                       { playerNames[0]}   
                    </div>

                    <div className="player reset" onClick={reset}>
                       reset
                    </div>

                    <div className="player lobster-regular" style={{backgroundColor:showPlayer ? 'yellow': 'antiquewhite'}}>
                        {playerNames[1]}
                    </div>
                </li>
            </header>
        )
}

export default Header