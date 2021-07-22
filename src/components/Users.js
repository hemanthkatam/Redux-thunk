import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Users = ({ userList, setData }) => {
    const getDate = async () => {
        const data = await fetch('https://reqres.in/api/users/').then(res => res.json()).then(res => res.data)
        setData(data)
    }

    const removeData = (index) => {
        const data = userList.slice();
        data.splice(index, 1)
        console.log(data)
        setData(data)
    }
    useEffect(() => {
        getDate()
    }, [])
    return (<div>
        {
            userList.map((user, index) => (<div onClick={() => removeData(index)}>{user['last_name']}</div>))
        }
    </div>)
}

const mapStateToProps = (state) => ({
    userList: state.userList
});

const mapDispatchtoProps = (dispatch) => {
    return {
        getuserData: () => dispatch({ type: 'GET_DATA' }),
        setData: (data) => dispatch({ type: 'SET_DATA', data: data })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Users)