import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function HomePage() {
    return (
        <HomePageStyled>
             <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi, I'm  <span>FedeGioz</span></h1>
                <p>
                These are my social networks:    
                </p>
                <div className="icons">
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100072126465342" className="icon facebook">
                        <FacebookIcon />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/fede.gioz/" className="icon instagram">
                        <InstagramIcon />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/FedeGioz" className="icon github">
                        <GitHubIcon />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://t.me/fedegioz" className="icon telegram">
                        <TelegramIcon />
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.youtube.com/c/FedeChannelYT" className="icon youtube">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
  
    .p-particles-js{
        top: 0;
        left: 0;
        @media screen and (max-width: 992px){
            display: none;
        }
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        @media screen and (max-width: 1200px){
            padding-top: 9rem;
        }
        @media screen and (max-width: 830px){
            padding-top: 7rem;
        }
        @media screen and (max-width: 576px){
            padding-top: 5px;
                h1{
                    font-size: 1.8rem;

                    span{
                        font-size: 1.8rem;
                    }
                }
            }
        @media screen and (max-width: 430px){
            
                h1{
                    font-size: 1.2rem;

                    span{
                        font-size: 1.2rem;
                    }
                }
            }
        .icons{
            display: flex;
            margin-top: 2rem;
            justify-content: center;
            padding-bottom: 2rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                transition: .4s ease;
                &:hover{
                    border-color: var(--primary-color);
                    color:var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem ;
                    @media screen and (max-width: 430px){
                        font-size: 1rem;
                    }

                }
            }
            .youtube{
                &:hover{
                    border-color: red;
                    color: red;
                }
            }
            .instagram{
                &:hover{
                    border-color: #F73583;
                    color: #F73583;
                }
            }
            .github{
                &:hover{
                    border-color: #5f4687;
                    color: #5f4687;
                }
            }
        }
    }
`;
export default HomePage
