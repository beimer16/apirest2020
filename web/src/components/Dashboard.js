import React, { Component } from 'react'
import '../shared/styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import 'react-slideshow-image/dist/styles.css'
import Alexandra from '../static/Alexandra.jpg';
import Eduard from '../static/Eduard.jpg';
import Felipe from '../static/Felipe.jpg';
import Mary from '../static/Mary.jpg';
import Nefta from '../static/Nefta.jpg';
import Jennifer from '../static/Jennifer.jpg';
import Julia from '../static/Julia.jpg';
import Luisa from '../static/Luisa.jpg';
import Patry from '../static/Patry.jpg';
import Sofia from '../static/Sofia.jpg';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import PostDialog from './PostDialog';
class Dashboard extends Component {
    state = {
        isOpen: false,
        image: ''
    }

    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.log('la imagen es :', e.target.result);
        }
    }

    render() {
        return (
            <div>
                <div className="container-form">
                    <div className="slide-container">
                        <div >
                            <img src={Alexandra} className="slide-field" />
                        </div>
                        <div >
                            <img src={Eduard} className="slide-field" />
                        </div>
                        <div >
                            <img src={Felipe} className="slide-field" />
                        </div>
                        <div >
                            <img src={Mary} className="slide-field" />
                        </div>
                        <div>
                            <img src={Nefta} className="slide-field" />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="paper-container">
                        <div>
                            <img src={Mary} className="img-rounded" />
                        </div>
                        <div className="input-search" >
                            <IconButton type="button" aria-label="search">
                                <SearchIcon onClick={(e) => this.setState({ isOpen: true })} />
                            </IconButton>
                        </div>
                    </div>
                    <Divider orientation="horizontal" />
                    <div className="form-main">
                        <Card className="card-form-main" >
                            <div className="card-header-form-nain">
                                Register App
                           </div>
                            <CardMedia
                                image="'../static/test.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>

                            </CardContent>
                        </Card>
                    </div>
                    <div className="container-postdialog" >
                        <PostDialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}  >
                            <div className="dialog-form">
                                <Card  className="card-form">
                                    <div className="card-header-form">
                                        Writing Post
                                    </div>
                                    <CardContent>
                                        <form>
                                            <TextField
                                                className="field-form"
                                                required id="standard-required"
                                                label="Required"
                                                placeholder="title post" />
                                            <TextareaAutosize
                                                className="fieldarea-form"
                                                rowsMax={5}
                                                required id="standard-required"
                                                aria-label="maximum height"
                                                placeholder="This space is available for you to comment on the photo, image or any news you want"
                                          />
                                            <input type="file" name="file" onChange={(e) => { this.onChange(e) }} />
                                        </form>
                                    </CardContent>
                                    <div className="button">
                                        <Button
                                            className="App-button"
                                            color="primary"
                                            variant="contained"
                                            onClick={(e) => this.setState({ isOpen: false })}
                                        >
                                            Save
                                    </Button>
                                        <Button
                                            className="App-button"
                                            component="button"
                                            variant="contained"
                                            onClick={(e) => this.setState({ isOpen: false })}
                                        >
                                            Cancel
                                    </Button>
                                    </div>
                                </Card>
                            </div>
                        </PostDialog>
                    </div>
                </div>
            </div>

        );
    }
}
export default Dashboard;