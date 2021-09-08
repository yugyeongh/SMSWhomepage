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
                    <br />"세상을 바꾸는 부드러운 힘" 숙명여대 소프트웨어학부는 1982년 설립된 전산학과를 전신으로 
                    현재까지 컴퓨터과학 분야 및 소프트웨어융합 분야 전반에 걸친 교육 및 연구를 수행하고 있습니다.
                     본 학부는 지난 30여 년간 다수의 훌륭한 여성 소프트웨어 인재를 배출해 왔으며,
                     지식정보화 사회를 선도할 창의력과 리더십을 갖춘 소프트웨어 전문 인력의 양성을 목표로 하고 있습니다.
                    <br /><br />
                    &nbsp;소프트웨어학부에는 컴퓨터과학전공과 소프트웨어융합전공이 있으며,
                    <br />컴퓨터과학전공은 전통적인 컴퓨터과학 분야인 컴퓨터 시스템 및 소프트웨어에 대한 체계적인 
                    교육 과정을 운영하며, 이를 기반으로 전문적인 소프트웨어 개발능력을 갖춘 인재를 양성합니다.
                    <br />소프트웨어융합전공은 소프트웨어뿐 만 아니라 다양한 학문과의 융합능력을 함양하기 위한 
                    교육과정을 운영하며, 이를 기반으로 창의적이고 복합적인 소프트웨어 융합능력을 갖춘 인재를 양성합니다.
                </p>
            </div>
            <div class="inner learn">
                <h2 align="center" class="summary__title">무엇을 배울까요?</h2>
                {/* <hr class="summaryHR" align="center" /> */}
                <p align="center" class="summary__description">
                    &nbsp;소프트웨어학부에서는 크게 기초이론과목과 응용과목을 공부하게 됩니다. 기초이론과목에서는 컴퓨터의 기본 구조를 이루는 
                    시스템을 공부합니다(자료구조, 운영체제, 프로그래밍언어론, 알고리즘, 인공지능 등). 기초과목에서 쌓은 지식을 기반으로, 고급 
                    프로그래밍 같은 응용과목을 공부하게 됩니다(프로그래밍개론I/II, 컴퓨터프로그래밍, 고급시스템프로그래밍, 웹시스템설계, 
                    데이터베이스프로그래밍 등). 우리 학부에서 배운 지식을 토대로 교직근무를 희망하는 학생은 정보컴퓨터교육론, 정보컴퓨터교수법, 논리및논술 
                    등의 교직 이수과목을 공부합니다.
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
