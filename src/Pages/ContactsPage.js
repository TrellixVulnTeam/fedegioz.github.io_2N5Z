import React from 'react';
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout, MainLayout} from '../styles/Layout'
import PrimaryButton from '../Components/PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
function ContactsPage() {
    const phone = <PhoneIcon /> 
    const address = <LocationOnIcon /> 
    const email = <EmailIcon /> 
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactsPageStyled>
                <InnerLayout className="contact-section">
                <div className="right-content">
                        <ContactItem  icon={email} title={'Email'} contact={'contact@fedegioz.xyz'} />
                        <ContactItem  icon={address} title={'Discord'} contact={'FedeGioz#0001'} />
                    </div>
                </InnerLayout>
            </ContactsPageStyled>
            
        </MainLayout>
    )
}

const ContactsPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
        }
      
        .right-content{
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 650px){
                width: 94%;

            }
        }
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
       .left-content{
           h4{
               padding: 1rem 0;
               font-size: 1.8rem;
               color: var(--white-color);
           }
        .form-field{
            margin-top: 2rem;
            position: relative;
            width: 100%;
            @media screen and (max-width: 650px){
                width: 100%;
            }
            label{
                position: absolute;
                top: -1.1rem;
                left: 1rem;
                background-color: var(--background-dark-color);
                padding:  0  7px;
            }
            input{
                border: 1px solid var(--border-color);
                height: 1.5rem;
                outline: none;
                font-size: 1rem;
                background-color: transparent ;
                color: inherit;
                padding: 1.5rem 1rem;
                width: 100%;
            }
            textarea{
                font-size: 1rem;
                border: 1px solid var(--border-color);
                outline: none;
                background-color: transparent ;
                color: inherit;
                padding: 1.5rem 1rem;
                width: 100%;
                resize: none;
            }
        }
       }
    }

`;
export default ContactsPage
