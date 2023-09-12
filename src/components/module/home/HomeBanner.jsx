import React from 'react';
import  styled  from 'styled-components';
import { Button } from '../../button';
import { NavLink } from 'react-router-dom';

const HomeBannerPage = styled.div`
    min-height: 520px;
    padding: 40px 0;
    margin-bottom: 60px;
    background-image:  linear-gradient(to right bottom,#2EBAC1, #A4D96C);
    .banner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    &-content {
        max-width: 600px;
        color: white;
    }
    &-heading{
        font-size: 36px;
        margin-bottom: 20px;
    }
    &-desc{
        line-height: 1.75;
        margin-bottom: 40px;
    }

}  
.button-homepage{
        background-color: white;
        padding: 15px;
        border-radius:  4px;
        color: #2EBAC1;
        font-weight: 500;
    }
    
`;
const HomeBanner = () => {
    return (
        <HomeBannerPage>
            <div className="container">
                <div className="banner">
                    <div className="banner-content">
                        <h1 className="banner-heading">Monkey Blogging</h1>
                        <p className="banner-desc">
                            Học vấn do người siêng năng đạt được, tài sản do người tinh tế sở hữu, quyền lợi do người dũng cảm nắm giữ, thiên đường do người lương thiện xây dựng. – Franklin –
                        </p>
                        <NavLink to='/sign-up'>
                        <span className='button-homepage' >Get Started</span>
                        </NavLink>
                    </div> 
                    <div className="banner-image">
                        <img src="./img-banner.png" alt="banner" />
                    </div>
                </div>
            </div>
        </HomeBannerPage>
    );
};

export default HomeBanner;