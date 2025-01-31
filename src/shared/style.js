
export const buttonStyle = ({
    bgColor,
    textColor,
    isHover
}) => {
    return {

        backgroundColor: bgColor,
        color: textColor,
        filter: 
            isHover ? bgColor == '#FFFFFF' ?
                'brightness(90%)' :  'brightness(120%)' : 'none' ,
        
        
    }
}

export const headingPostStyle = ({color}) => {
    return {
        backgroundColor: `${color}50`,
        borderLeft: `5px solid ${color}`,
        paddingLeft: '5px',
        color: "#fff",
        margin: 22
    }
}
