function SearchRecordTime () {
    return(
        <div>
            <h1> Create Task </h1>
            <form>
                <label> User </label> <input /> <br/> <br/>
                <label> Id Task </label> <input /> <br/> <br/>
                <label> Description </label> <input /> <br/> <br/>
                <button> Search </button>
            </form>
            <br/> <br/>
            <br/> <br/>
            <div id="timeresult" className="result">
                <label> User </label> <input disabled/> <br/> <br/>
                <label> Time </label> <input disabled/> <br/> <br/>
                <label> Id Task </label> <input disabled/> <br/> <br/>
                <label> Name </label> <input disabled/> <br/> <br/>
                <label> Description </label> <input disabled/> <br/> <br/>
                <label> Total Time </label> <input disabled/> <br/> <br/>
                <label> Left Time </label> <input disabled/> <br/> <br/>
            </div>
        </div>
    )
}

export default SearchRecordTime