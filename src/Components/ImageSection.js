import React from 'react';
import styled from 'styled-components';
import resume from '../images/port.jpg';
import PrimaryButton from './PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resumePhoto" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>FedeGioz</span></h4>
                    <div className="about-info">
                        <div className="info-title">
<p>Nationality</p>
                            <p>Languages</p>
                            <p>Location</p>
                        </div>
                        <div className="info">
                            <p>Italian</p>
                            <p>Italian, English</p>
                            <p>Italy</p>
                        </div>
                        <div className="label">
                            <div>
                                <h6>Nationality :</h6>
                                <p> Italian</p>
                            </div>
                            <div>
                                <h6>Languages :</h6>
                                <p> Italian, English</p>
                            </div>
                            <div>
                                <h6>Location :</h6>
                                <p> Italy</p>
                                                        </div>
                            
                        </div>
                    </div>
                </div>
                 
            </div>
        </ImageSectionStyled>    
    )
}
const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 1rem;
    .left-content{
        width: 50%;
        img{
            width: 80%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        .label{
            display: none;
            @media screen and (max-width: 539px){
                display: block  ;
            }
        }
        width: 60%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .about-info{
            padding-bottom: 1.4rem;
            display: flex;
            
            .info-title{
                padding-right: 2rem;
                p{
                    font-weight: 600;
                }
               @media screen and (max-width: 540px){
                .services{
                    margin-top: 1.2rem;
                }
               }
            }
           
            .info-title , .info{
                @media screen and (max-width: 539px){
                display: none  ;
                }
                p{
                    padding: .3rem 0;
                }  
            }
        }
    }
    @media screen and (max-width: 992px){
        display: flex;
        flex-direction: column;
        .left-content{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .right-content{
            width: 100%;
        }
    }
    
`;
export default ImageSection
