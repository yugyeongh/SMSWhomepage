import React from 'react';
import './style.css';
import './HeaderFooter.css'

function SWIntro() {
    return (
        <>
            <div class="inner">
                <div align="center" class="main__banner">학과소개</div>
                <ul class="classTab">
                    <li><a align="center" href="/pf_intro">· 교수소개</a></li>
                    <li><a align="center" href="/cs_intro">· 컴퓨터과학전공</a></li>
                    <li><a align="center" href="/sw_intro">· 소프트웨어융합전공</a></li>
                </ul>
                <p align="center" class="major_title_1">창조적 소프트웨어 융합을 통한 글로벌 여성공학 CEO 양성</p>
                <span align="center" class="major_title_2">소프트웨어융합전공</span>
                <span align="center" class="major_title_3">DEPARTMENT OF OFTWARE CONVERGENCE</span>
            </div>

            <div class="inner summary">
                <h2 align="center" class="summary__title">어떤 학과인가요?</h2>
                <p align="center" class="summary__description">
                    &nbsp;소프트웨어가 21세기의 변화를 이끌고 있습니다.
                    <br />"세상을 바꾸는 부드러운 힘" 숙명여대 소프트웨어학부는 1982년 설립된 전산학과를 전신으로<br /> 
                    현재까지 컴퓨터과학 분야 및 소프트웨어융합 분야 전반에 걸친 교육 및 연구를 수행하고 있습니다.<br/>
                     본 학부는 지난 30여 년간 다수의 훌륭한 여성 소프트웨어 인재를 배출해 왔으며,<br/>
                     지식정보화 사회를 선도할 창의력과 리더십을 갖춘 소프트웨어 전문 인력의 양성을 목표로 하고 있습니다.
                    <br /><br />
                    &nbsp;소프트웨어학부에는 컴퓨터과학전공과 소프트웨어융합전공이 있으며,
                    <br />소프트웨어 학부에서는 사회에서 요구하는 전문성과 실용성을 겸비하여 지식정보화 시대를 주도할 <br/>
                    IT 전문 인력의 양성뿐만 아니라 전공자 개인의 성취를 도모하여 기업과 국가의 발전에 기여하기를 지향합니다.<br/>
                    <br /><span style={{fontWeight: 600}}>그 중 소프트웨어융합전공은 소프트웨어뿐만 아니라<br/> 다양한 학문과의 융합 능력을 함양하기 위한 특화된 교육 과정을 운영하며,<br/>
                    이를 기반으로 창의적으로 복합적인 소프트웨어융합 능력을 갖춘 인재 양성을 목표로 삼고 있습니다.</span>
                </p>
            </div>
            <div class="inner learn">
                <h2 align="center" class="summary__title">무엇을 배울까요?</h2>
                {/* <hr class="summaryHR" align="center" /> */}
                <p align="center" class="summary__description">
                    &nbsp;소프트웨어학부에서는 크게 기초이론과목과 응용과목을 공부하게 됩니다.<br/> 기초이론과목에서는 컴퓨터의 기본 구조를 이루는 
                    시스템을 공부합니다.(자료구조, 운영체제, 프로그래밍언어론, 알고리즘 etc)<br/> 기초과목을 기반으로, 응용과목을 공부하게 됩니다(고급시스템프로그래밍, 웹시스템설계, 
                    데이터베이스프로그래밍 etc). <br/><br/>우리 학부에서 배운 지식을 토대로 교직근무를 희망하는 학생은 <br/>정보컴퓨터교육론, 정보컴퓨터교수법, 논리및논술 
                    등의 교직 이수과목을 공부합니다.<br/><br/>

                    <span style={{fontWeight: 600}}>특히, 소프트웨어융합 전공에서는 창의적인 융합인재 양성을 위해 <br/>데이터 마이닝 & visualization, UI/UX, 경영정보시스템
                    SW창업, 소셜미디어 서비스, <br/>인터랙티브미디어, 바이오융합소프트웨어, 디지털스토리텔링 등과 같은 수업을 진행합니다.</span>
                </p>
            </div>
            <div class="inner summary">
                <h2 align="center" class="summary__title">졸업 후 진로</h2>
                <p align="center" class="summary__description">
                    &nbsp;
                    졸업생은 대부분 다양한 소프트웨어 응용분야 직종으로 진출합니다. <br/>삼성전자,
                     삼성 SDS, LG CNS, LG전자, SK Telecom 등의 IT 대기업, 시중 은행이나 공공기관의 전산부서, 
                     <br/>소프트웨어 개발업체, 소프트웨어 컨설팅, 
                    외국계기업의 컴퓨터 관련직, 전산교육 분야 등 다양한 사회 진출의 길이 있습니다. <br/>
                    ‘정보처리기사’ 같은 자격증을 취득하면 취업을 할 때 도움을 받을 수 있습니다.
                    <br /><br />
                </p>
            </div>

            <footer class="footer inner">
                <ul class="footer_center">
                    <li>ⓒ Comsongz Corp.</li>
                    <li>Creator | Comsongz</li>
                    <li>Developers | Comsongz</li>
                    <li>DEPARTMENT | Apps of SMWU</li>
                </ul>
            </footer>
        </>
    );
}

export default SWIntro;
