import '../styles/EmailRow.css'
import {Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { selectMail } from '../features/mailSlice'
function EmailRow({ id, title , subject , description, time }) {
    const history = useHistory();
    const dispatch = useDispatch()
    const openMail = () =>{
        dispatch(selectMail({ id, title , subject , description, time }));
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className='email-row'>
            <div className='email-row-options'>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className='email-row-title'>
                {title}
            </h3>
            <div className='email-row-message'>
                <h4>
                    {subject}{' '}
                    <span className='email-row-description'>
                        - {description}
                    </span>
                </h4>
            </div>
            <p className='email-row-time'>
                {time}
            </p>
        </div>
    )
}

export default EmailRow
