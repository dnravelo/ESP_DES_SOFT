function CreateTask () {
    return(
        <div className="form-container">
            <h1> Create Task </h1>
            <form action='/create_task' method='post' >
                
                <label> Tittle </label> <input name="tittle"/> <br/> <br/>
                <label> Start Date </label> <input type="date" id="startdate" name="startdate"/> <br/> <br/>
                <label> End Date</label> <input type="date" id="enddate" name="enddate"/> <br/> <br/>
                <label> Description </label> <textarea name="description"/> <br/> <br/>
                <label> Total Time </label> <input name="totaltime"/> <br/> <br/>
                <button> Save </button>
                <input name="Result" disabled/> <br/> <br/>
            </form>
        </div>
    )
}

export default CreateTask