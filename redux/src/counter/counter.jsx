import { useDispatch, useSelector } from 'react-redux'
import { COUNTER_ACTION_TYPES } from '../redux/actionTypes'
import { getCounterValue } from '../redux/selectors'
import { decrement, increment, reset, incrementByValue } from '../redux/actions'
import './counter.scss'

export const Counter = () => {

    const dispatch = useDispatch()

    const counter = useSelector(getCounterValue)

    const clickHandler = ({ target }) => {
        if (target.tagName === "BUTTON") {
            const buttonType = target.textContent
            switch (buttonType) {
                case COUNTER_ACTION_TYPES.INCREMENT:
                    return dispatch(increment())
                case COUNTER_ACTION_TYPES.DECREMENT:
                    return dispatch(decrement())
                case COUNTER_ACTION_TYPES.RESET:
                    return dispatch(reset())
                default:
                    break;
            }
        }
    }

    return (
        <div className="counter">
            <h1 className="counter-title">Counter</h1>
            <div className="counter-control" onClick={(e) => clickHandler(e)}>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.INCREMENT}</button>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.DECREMENT}</button>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.RESET}</button>
                <button type="button" className="btn" onClick={() => {dispatch(incrementByValue(20))}}>Add 20</button>
            </div>
            <div className="counter-output">
                {counter}
            </div>
        </div>
    )
}