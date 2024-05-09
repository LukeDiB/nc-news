
function ErrorPage(props = null) {
    const {message} = props
    if(message){
        const errMessage = message.err.response.data.message
        const statusCode = message.err.response.status
        console.log(errMessage);
        return (
          <div>
            <h3>
              Oops looks like you took a wrong turn and got a {statusCode}!
            </h3>
            <h3>Head back a page or use the links above</h3>
          </div>
        );
    } else {
        return (
          <div>
            <h3>Oops looks like there's nothing here!</h3>
            <h3>Head back a page or use the links above</h3>
          </div>
        );
            
    }


    

}

export default ErrorPage