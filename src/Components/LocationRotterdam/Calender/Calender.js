import React from "react"
import CalenderItem from "./CalenderItem";
import calenderData from "./CalenderData";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            bookings: calenderData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedBookings = prevState.bookings.map(booking => {
                if (booking.id === id) {
                    return {
                        ...booking,
                        completed: !booking.completed
                    }
                }
                return booking
            })
            return {
                bookings: updatedBookings
            }
        })
    }

    render() {
        const bookingItems = this.state.bookings.map(item => <CalenderItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                {bookingItems}
            </div>
        )
    }
}

export default App