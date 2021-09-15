import React from 'react';
import './Main.css';

function Main() {
    return (
    <>
        <div className="container">
            <div className="points">
                <div className="point point-floating-1"></div>
                <div className="point point-floating-2"></div>
                <div className="point point-floating-3"></div>
                <div className="point point-floating-4"></div>
                <div className="point point-floating-5"></div>
                <div className="point point-floating-6"></div>
                <div className="point point-floating-7"></div>
                <div className="point point-floating-8"></div>
                <div className="point point-floating-9"></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2>01</h2>
                    <h3>Computer Science</h3>
                    <p>정보사회의 나침판,<br />흐름을 선도하는 소프트웨어 전문 인재</p>
                    <a className="cardlink" href="/cs_intro">Read More</a>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2>02</h2>
                    <h3>SMWU Engineer</h3>
                    <p>세상을 바꾸는 부드러운 힘</p>
                    <a className="cardlink" href="#">Read More</a>
                </div>
            </div>
            <div className="card">
                <div className="content">  
                    <h2>03</h2>
                    <h3>Software Convergence</h3>
                    <p>창조적 소프트웨어 융합을 통한<br />글로벌 여성공학 CEO 양성</p>
                    <a className="cardlink" href="/sw_intro">Read More</a>
                </div>
            </div>
            <div>
                <a className="smLink" href="https://snowboard.sookmyung.ac.kr/login.php" align="center" target="_blank" rel="noreferrer">SNOWBOARD</a>
                <a className="smLink" href="http://www.sookmyung.ac.kr/sookmyungkr/index.do" align="center" target="_blank" rel="noreferrer">SMWU HOME</a>
                <a className="smLink" href="https://portal.sookmyung.ac.kr/irj/portal" align="center" target="_blank" rel="noreferrer">SM POTAL</a>
                <a className="smLink" href="https://wise.sookmyung.ac.kr" align="center" target="_blank" rel="noreferrer">SM WISE</a>
            </div>
        </div>

        {/* <footer class="footer inner">
                <ul class="footer_center">
                    <li>ⓒ Comsongz Corp.</li>
                    <li>Creator | Comsongz</li>
                    <li>Developers | Comsongz</li>
                    <li>DEPARTMENT | Apps of SMWU</li>
                </ul>
        </footer> */}
    </>        
    );
}

export default Main;