import Homefeature from "./HomeFeature"
import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'
import './HomeFeatures.css'


export default function Homefeatures({type}) {
    let text
    let icon
    let title

    switch (type){
        case '1' :
            text = 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
            icon = chat
            title = 'You are our #1 priority'
            break
        case '2':
            text = 'The more you save with us, the higher your interest rate will be!'
            icon = money
            title = 'More savings means higher rates'
            break
        default:
            text = 'We use top of the line encryption to make sure your data and money is always safe.'
            icon = security
            title = 'Security you can trust'
            break
    }
    
    return (
        <Homefeature text={text} icon={icon} title={title} />
    )
}