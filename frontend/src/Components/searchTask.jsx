function SearchTask () {
    return(
        <div>
            <h1> Create Task </h1>
            <form>
                <label> Id </label> <input /> <br/> <br/>
                <label> Completed? </label> <input type="checkbox"/> <br/> <br/>
                <label> Description </label> <input /> <br/> <br/>
                <button> Search </button>
            </form>
            <br/> <br/>
            <br/> <br/>
            <div id="taskresult" className="result">
                 <label> Id </label> <input disabled/> <br/> <br/>
                <label> Start Date </label> <input disabled/> <br/> <br/>
                <label> End Date</label> <input disabled/> <br/> <br/>
                <label> Description </label> <input disabled/> <br/> <br/>
                <label> Left Time </label> <input disabled/> <br/> <br/>
                <label> Total Time </label> <input disabled/> <br/> <br/>
            </div>
        </div>
    )
}
export default SearchTask