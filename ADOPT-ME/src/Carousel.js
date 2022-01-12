// if we look at the api, we'll see that luna has 5 different images of her that come back from the api and we want to be able to nicely rotate through all of them 
import { Component } from 'react';

class Carousel extends Component {
    state = {
        active: 0 // the first photo shown is the first one from the api
    }
    // we'll have some default props
    // we're saying if we dont get props form images, we have some props we can default to 
    static defaultProps = {
        images:['http://pets-images.dev-apis.com/pets/none.jpg']
        // these must be static which means Carousel can be an abstract class as 
        // Carousel.defaultProps
        // verse const caraousel = new Carousel;
        // static means callable on abstract class 

    };

    // let's add an event handler
    // will put int handleIndexClick
    // we want to get the index back from which one they clicked on: so if they click on number 3 image, we get that one back
    // we do thisthrough html stuff
    handleIndexClick(event){
        this.setState({
            active: event.target.dataset.index

        })
    }



    render (){
        // state vs props
        // state is mutable (this is changeable: can call this.setState and modify what activate is)
        // props are one way data flows that is read only. I cannot change props, only the parents can change props. 
        // props data is flowing down from the parent. State is self contained in the component itself
        // state is always self contained: it's contained within the component itself
        // props is state from the statement
        // the only thing that can modify state is the component that contains state; nothing else can modify state 
        // can't call set state from pet or app can only do it from within carousels

        const { active } = this.state;
        const { images } = this.props;
        // under className, when someone selects a pet (image 3 and selects that), we don't want an active class
        // if it's selected, put an active class on it, if it's not selected, don't put an active class on it
        return (
            <div className = "carousel"> 
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line 
                        // the image should be a button
                        <img 
                        key = {photo}
                        src = {photo}
                        data-index = {index}
                        onClick={this.handleIndexClick}
                        className={index === active ? "active": ""}
                        // if selected, put active class, if not, don't put active class
                        alt = "animal thumbnail "
                        />
                    ))}
                </div>
            </div>
        )
    }
   
}

export default Carousel;