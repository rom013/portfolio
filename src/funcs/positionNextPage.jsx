const positionNextPage = () => {
    const innerHeight = window.innerHeight
    const innerWidth = window.innerWidth

    return innerWidth <=  640 ? innerHeight + 80 : innerHeight 
}

export default positionNextPage