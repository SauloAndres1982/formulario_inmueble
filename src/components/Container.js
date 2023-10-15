import './Container.css'

const Container = ({ children }) => {
    console.log(children[0])

    return(

        <div className="container">
            {children}
        </div>

    )
}

export default Container