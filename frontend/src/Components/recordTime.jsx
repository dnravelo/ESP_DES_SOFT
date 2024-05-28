function RecordTime () {
    return(
        <div className="form-container">
            <h1> Record time </h1>
            <form>
                <label> User </label> <input /> <br/> <br/>
                <label> Time </label> <input /> <br/> <br/>
                <label> Id Task </label> <input /> <br/> <br/>
                <label> Name </label> <input /> <br/> <br/>
                <label> Description </label> <input /> <br/> <br/>
                <label> Total Time </label> <input /> <br/> <br/>
                <label> Left Time </label> <input /> <br/> <br/>
                <button> Save </button>
            </form>
        </div>
    )
}

export default RecordTime