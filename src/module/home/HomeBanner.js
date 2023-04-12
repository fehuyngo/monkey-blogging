import { Button } from 'components/button';
import React from 'react';
import styled from 'styled-components';

const HomeBannerStyles = styled.div`
    min-height: 520px;
    padding: 40px 0;
    background-image: linear-gradient( 
        to right bottom, 
        ${props => props.theme.primary}, 
        ${props => props.theme.secondary}
    );
    margin-bottom: 60px;
    .banner {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .banner-content {
        max-width: 600px;
        color: white;
    }
    .banner-heading {
        font-size: 36px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .banner-desc {
        line-height: 1.75;
        margin-bottom: 40px;
    }
    @media screen and (max-width: 1023.98px) {
        .banner {
        flex-direction: column;
        min-height: unset;
        &-heading {
            font-size: 30px;
            margin-bottom: 10px;
        }
        &-desc {
            font-size: 14px;
            margin-bottom: 20px;
        }
        &-image {
            margin-top: 25px;
        }
        &-button {
            font-size: 14px;
            height: auto;
            padding: 15px;
        }
        }
    }
`;

const HomeBanner = () => {
    return (
        <HomeBannerStyles>
            <div className='container'>
                <div className='banner'>
                    <div className='banner-content'>
                        <h1 className='banner-heading'>Monkey Blogging</h1>
                        <p className='banner-desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <Button to="/sign-up" kind="secondary" className="banner-button">Get started</Button>
                    </div>
                    <div className='banner-image'>
                        <img srcSet='/img-banner.png' alt='banner'/>
                    </div>
                </div>
            </div>
        </HomeBannerStyles>
    );
};

export default HomeBanner;