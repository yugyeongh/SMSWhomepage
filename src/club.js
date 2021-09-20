import React from 'react';
import './club.css';

const Club = () => {
    return(
        <>
        <div className="clubCont">
            <form>
                <input type="radio" name="tab" id="menu"/>
                <div className="container">
                
                    <input type="radio" name="tab" defaultChecked="checked" id="intro"/>
                    <section className="intro">
                        <h1>동아리소개</h1>
                        <div className="content">
                        X를 눌러 뒤로간 후 <br/> 숙명여자대학교 소프트웨어학부의 동아리들을 살펴보세요.
                        </div>
                        <label htmlFor="intro"></label>
                    </section>

                    <input type="radio" name="tab" id="apps"/>
                    <section className="apps">
                        <h1>APPS</h1>
                        <div className="content appsC" >
                        <div className="content-bold">🎮 소프트웨어학부의 게임 개발동아리 입니다.</div>
                        <br/> 스터디를 통해 개발 관련 지식을 익히고, 
                        <br/> 이를 바탕으로 프로젝트를 진행하며 협업 경험을 쌓을 수 있습니다.
                        <br/> 게임개발부터 앱, 웹까지 스터디를 진행하며
                        <br/> 전시회에 프로젝트 작품을 전시할 수 있는 경험도 체험할 수 있습니다.
                        <br/> 2학기에는 다양한 학년이 모여 진행하는 사이드 프로젝트를 진행합니다.
                        <br/> 신입부원과 기존 부원과의 멘토-멘티제 운영합니다.
                        </div>
                        <label htmlFor="apps"></label>
                    </section>

                    <input type="radio" name="tab" id="algos"/>
                    <section className="algos">
                        <h1>ALGOS</h1>
                        <div className="content">
                        <div className="content-bold">💻 소프트웨어학부 ACM-ICPC 준비 동아리입니다.</div>
                        <br/> ACM-ICPC은 국제 대학생 프로그래밍 대회로, 
                        <br/> 이를 준비하기 위해 알고리즘 문제를 해결하는 스터디를 진행합니다.
                        <br/> Icpc 신촌 연합(서강대, 숙명여대, 연세대, 이화여대, 홍익대) 
                        <br/> 알고리즘 캠프 참여 가능합니다.
                        <br/> 매주 학년별 알고리즘 스터디(문제풀이)와 
                        <br/> 매달 코딩테스트를 연습하고 설명하는 정기 세미나를 가집니다.
                        <br/> 선배님과 소통할 수 있는 홈커밍 데이도 있습니다.
                        </div>
                        <label htmlFor="algos"></label>
                    </section>

                    <input type="radio" name="tab" id="forza"/>
                    <section className="forza">
                        <h1>FORZA</h1>
                        <div className="content">
                        <div className="content-bold">🖥 소프트웨어학부 공식 학회입니다. </div>
                        <br/> 일대일 c언어 멘토링 활동을 진행하며 공강시간을 활용해 공부합니다.
                        <br/> 1학기에는 c언어의 개념을 공부하면서 간단한 코딩문제풀이를 합니다.
                        <br/> 2학기에는 팀별로 진행하는 c언어 문제풀이 스터디를 진행합니다.
                        <br/> 선후배간의 친목을 다지기 위한 환영회, MT, 가을소풍등도 진행합니다.
                        </div>
                        <label htmlFor="forza"></label>
                    </section>

                    <input type="radio" name="tab" id="siss"/>
                    <section className="siss">
                        <h1 className="sissH">SISS</h1>
                        <div className="content" >
                        <div className="content-bold">🤖 소프트웨어학부 정보보안 동아리입니다.</div>
                        <br/> 시스템/웹 해킹과 정보보호, 해킹 공격과 대응책 등 
                        <br/> 정보보안 기술에 대해 함께 공부하고 실습합니다.
                        <br/> 대내활동에는 c mentoring, linux mentoring, web basic이 있으며
                        <br/> 대외활동으로는 Inc0gnito, Power of XX, Hacking Camp, 
                        <br/> 타대 보안동아리와의 연합 스터디및 세미나를 진행합니다.
                        </div>
                        <label htmlFor="siss"></label>
                    </section>
                    
                    <input type="radio" name="tab" id="solux"/>
                    <section className="solux">
                        <h1 className="soluxH">SOLUX</h1>
                        <div className="content">
                        <div className="content-bold">🧑‍💻 숙명여대 유일 IT 프로젝트 중앙동아리입니다.</div>
                        <br/> 정기 세미나에서는 파이썬을 활용해 매 세미나별 다른 주제로 
                        <br/> 프로그래밍을 진행하고, IT 관련 발표를 진행합니다.
                        <br/> 스터디에서는 파이썬을 멘토와 함께 공부하며 
                        <br/> 팀별로 자유롭게 스터디를 진행합니다. 
                        <br/> 파이썬과 다양한 분야를 접목해 자율주제로 프로젝트도 진행합니다.
                        </div>
                        <label htmlFor="solux"></label>
                    </section>
                </div>

                <div className="menu">
                <div>
                    <label htmlFor="menu"></label>
                </div>
                </div>
            </form>   
        </div>
        
        <footer className="footer inner">
        <ul className="footer_center">
            <li>ⓒ Comsongz Corp.</li>
            <li>Creator | Comsongz</li>
            <li>Developers | Comsongz</li>
            <li>DEPARTMENT | Apps of SMWU</li>
        </ul>
        </footer>
        </>
    );
};

export default Club;