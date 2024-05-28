import React from 'react'

class PrincipalMenu extends React.Component {
    render(){

        function home_view() {
            window.location = "/"
        }

        let timerecord_view = () => {
            window.location = "/timerecord_view"
        }

        function searchrecordtime_view() {
            window.location = "/searchrecordtime_view"
        }

        function searchtask_view() {
            window.location = "/searchtask_view"
        }

        function createtask_view() {
            window.location = "/createtask_view"
        }

        return(
            <div className="principal-menu">
                <li className="items-principal-menu">
                    <button className="btn-principal-menu" onClick={home_view} > Home </button>
                </li>
                <li className="items-principal-menu">
                    <button className="btn-principal-menu" onClick={timerecord_view} > Time Record </button>
                </li>
                <li className="items-principal-menu">
                    <button className="btn-principal-menu" onClick={searchrecordtime_view} > Search Time Record </button>
                </li>
                <li className="items-principal-menu">
                    <button className="btn-principal-menu" onClick={createtask_view} > Create Task </button>
                </li>
                <li className="items-principal-menu">
                    <button className="btn-principal-menu" onClick={searchtask_view} > Search Task </button>
                </li>
                <li className="items-principal-menu">
                    <button className="btn-principal-menu"> Loguin </button>
                </li>
            </div>
        )
    }
}

export default PrincipalMenu