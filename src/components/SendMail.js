import '../styles/SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import {Button} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import { closeSendMessage } from '../features/mailSlice';
import {useDispatch} from 'react-redux'
import {db} from '../firebase'
import firebase from 'firebase/compat/app';

function SendMail() {
    const dispatch = useDispatch();
    const {register , handleSubmit , watch , formState:  {errors} } = useForm();
    const onSubmit = (formData) =>{
        console.log(formData);
        const data = {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        console.log(data)
        db.collection('emails').add(data);
        dispatch(closeSendMessage())
    }
    return (
        <div className='send-mail'>
            <div className='send-mail-header'>
                <h3>New Message</h3>
                <CloseIcon 
                    onClick={()=>dispatch(closeSendMessage())}
                    className='send-mail-close'/>
                
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('to',{required: true})} name='to' placeholder='To:' type='email'/>
                {errors.to && <p className='send-mail-error'>To is required!</p>}
                <input {...register('subject',{required: true})} name='subject' placeholder='Subject:' type='text'/>
                {errors.subject && <p className='send-mail-error'>Subject is required!</p>}
                <input {...register('message',{required: true})} name='message' className='send-mail-message' placeholder='Message...' type='text'/>
                {errors.message && <p className='send-mail-error'>Message is required!</p>}
                <div className='send-mail-options'>
                    <Button 
                        className='send-mail-send'
                        variant='contained'
                        color='primary'
                        type='submit'    
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
