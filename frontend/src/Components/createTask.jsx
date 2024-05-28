function CreateTask () {
    return(
        <div className="form-container">
            <h1> Create Task </h1>
            <form>
                <label> Id </label> <input /> <br/> <br/>
                <label> Start Date </label> <input /> <br/> <br/>
                <label> End Date</label> <input /> <br/> <br/>
                <label> Description </label> <input /> <br/> <br/>
                <label> Left Time </label> <input /> <br/> <br/>
                <label> Total Time </label> <input /> <br/> <br/>
                <button> Save </button>
            </form>
        </div>
    )
}

export default CreateTask