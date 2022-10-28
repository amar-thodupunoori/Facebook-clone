import { Box } from "@material-ui/core";
import Profile from '../../Assets/images/profile.jpeg'
import AddIcon from '@material-ui/icons/Add';
import './Story.scss'
const Story = () => {
    return(
        <Box className="Stories" display="flex" justifyContent="center" >
            <Box className="story noStory">
                <img className="storyImg" src="https://images.hdqwalls.com/wallpapers/ferrari-minimal-logo-5k-bp.jpg" width="100%" />
                <Box className="Add" display="flex" justifyContent="center" alignItems="center">
                    <AddIcon />
                </Box>
                <p className="title ">Create Story</p>
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://1000logos.net/wp-content/uploads/2018/03/Symbol-Lamborghini.jpg" width="100%" />
                <h6 className="title">Lamborghini</h6>
                <img src="https://1000logos.net/wp-content/uploads/2018/03/Symbol-Lamborghini.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" width="100%" />
                <h6 className="title">Porsche</h6>
                <img src="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://i.pinimg.com/736x/6c/2e/72/6c2e72a783f59bb58f50c7e930e2c543.jpg" width="100%" />
                <h6 className="title">Bugatti</h6>
                <img src="https://i.pinimg.com/736x/6c/2e/72/6c2e72a783f59bb58f50c7e930e2c543.jpg" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://di-uploads-pod19.dealerinspire.com/bentleyofaustin/uploads/2020/10/download.png" width="100%" />
                <h6 className="title">Bentley</h6>
                <img src="https://di-uploads-pod19.dealerinspire.com/bentleyofaustin/uploads/2020/10/download.png" alt="username" width="30px" height="30px" className="userImg" />
            </Box>
           
        </Box>
    )
}

export default Story;