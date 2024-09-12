const Footer = ({player})=>{
    return (
        <div className="lobster-regular">
            <div className="won">
            {`${player.toUpperCase()} WON THE GAME!!`}
            </div>
        </div>
    )
}


export default Footer