import '../styles/EmailList.css'
import {Checkbox, IconButton} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import Section from './Section'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import InboxIcon from '@material-ui/icons/Inbox'
import EmailRow from './EmailRow'
import {useState, useEffect} from 'react'
import {db} from '../firebase'


function EmailList() {
    const [emails, setEmails] = useState([])
    useEffect(() => {
        db.collection('emails')
            .orderBy('timeStamp', 'desc')
            .onSnapshot(snapshot=> setEmails(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data(),
            }))))
    }, [])
    return (
        <div className='email-list'>
            <div className='email-settings'>
                <div className='email-settings-left'>
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className='email-settings-right'>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='email-list-section'>
                <Section Icon={InboxIcon} title='Primary' color='red' selected/>
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8'/>
                <Section Icon={LocalOfferIcon} title='Promotions' color='green'/>
            </div>
            <div className='email-list-list'>
                {
                    emails.map(({id, data:{to, subject, message, timeStamp}})=>(
                        <EmailRow 
                            id={id}
                            key={id}
                            title= {to}
                            subject={subject}
                            description={message}
                            time={new Date(timeStamp?.seconds * 1000).toTimeString()}/>
                    ))
                }
            </div>
        </div>
    )

}

export default EmailList
